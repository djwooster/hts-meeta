// ═══════════════════════════════════════════════════════════════
// Hale Textile Studio — Newsletter Netlify Function v2
// Handles: new signups, resubscription of unsubscribed contacts,
//          notification email to Meeta, confirmation to subscriber
// Deploy to: netlify/functions/newsletter.js
// ═══════════════════════════════════════════════════════════════

const MC_API_KEY   = process.env.MAILCHIMP_API_KEY;
const MC_AUDIENCE  = process.env.MAILCHIMP_AUDIENCE_ID;
const NOTIFY_EMAIL = process.env.NOTIFY_EMAIL || 'HaleTextileStudio@gmail.com';

function getDC(apiKey) {
  return apiKey.split('-').pop();
}

async function md5Email(email) {
  const crypto = require('crypto');
  return crypto.createHash('md5').update(email.toLowerCase()).digest('hex');
}

async function mcFetch(path, method, body, apiKey) {
  const dc = getDC(apiKey);
  const url = `https://${dc}.api.mailchimp.com/3.0${path}`;
  const auth = 'Basic ' + Buffer.from(`anystring:${apiKey}`).toString('base64');
  const opts = {
    method,
    headers: { Authorization: auth, 'Content-Type': 'application/json' }
  };
  if (body) opts.body = JSON.stringify(body);
  const res = await fetch(url, opts);
  return res.json();
}

async function sendGmailNotification(to, subject, body) {
  // Uses Gmail SMTP via Netlify env — requires GMAIL_USER and GMAIL_APP_PASSWORD
  // If not configured, we skip gracefully
  const nodemailer = require('nodemailer');
  if (!process.env.GMAIL_USER || !process.env.GMAIL_APP_PASSWORD) return false;
  const transporter = nodemailer.createTransporter({
    service: 'gmail',
    auth: { user: process.env.GMAIL_USER, pass: process.env.GMAIL_APP_PASSWORD }
  });
  await transporter.sendMail({ from: process.env.GMAIL_USER, to, subject, text: body });
  return true;
}

exports.handler = async function(event) {

  if (event.httpMethod === 'OPTIONS') {
    return {
      statusCode: 200,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Access-Control-Allow-Methods': 'POST, OPTIONS'
      },
      body: ''
    };
  }

  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: JSON.stringify({ result: 'error', msg: 'Method not allowed' }) };
  }

  let data;
  try { data = JSON.parse(event.body); }
  catch (e) { return { statusCode: 400, body: JSON.stringify({ result: 'error', msg: 'Bad request' }) }; }

  const { email = '', fname = '', lname = '', iama = '', company = '' } = data;

  if (!email || !email.includes('@')) {
    return { statusCode: 400, body: JSON.stringify({ result: 'error', msg: 'Valid email required' }) };
  }

  const emailHash = await md5Email(email);

  // ── STEP 1: Check if contact already exists in Mailchimp ──
  let existingStatus = null;
  try {
    const check = await mcFetch(`/lists/${MC_AUDIENCE}/members/${emailHash}`, 'GET', null, MC_API_KEY);
    if (check.status && typeof check.status === 'string') {
      existingStatus = check.status; // 'subscribed', 'unsubscribed', 'cleaned', 'pending', 'archived'
    }
  } catch (e) {
    // Not found — new contact
  }

  const wasUnsubscribed = existingStatus === 'unsubscribed' || existingStatus === 'archived';

  // ── STEP 2: Upsert member — force status to 'subscribed' ──
  // Using PUT /members/{hash} with status: 'subscribed' resubscribes unsubscribed contacts
  const upsertPayload = {
    email_address: email,
    status_if_new: 'subscribed',
    status: 'subscribed',          // <-- key: this forces resubscription
    merge_fields: {
      FNAME:   fname,
      LNAME:   lname,
      I_AM_A:  iama,
      COMPANY: company
    }
  };

  let mcResult;
  try {
    mcResult = await mcFetch(`/lists/${MC_AUDIENCE}/members/${emailHash}`, 'PUT', upsertPayload, MC_API_KEY);
  } catch (e) {
    return {
      statusCode: 500,
      body: JSON.stringify({ result: 'error', msg: 'Could not connect to mailing list. Please try again.' })
    };
  }

  // Check for hard errors from Mailchimp
  if (mcResult.status === 400 || mcResult.title === 'Invalid Resource') {
    return {
      statusCode: 400,
      body: JSON.stringify({ result: 'error', msg: mcResult.detail || 'Unable to subscribe. Please try again.' })
    };
  }

  // ── STEP 3: Send notification email to Meeta ──
  const firstName = fname || email;
  const notifySubject = wasUnsubscribed
    ? `\u26A0\uFE0F Resubscription alert \u2014 ${firstName} rejoined your list`
    : `\u2736 New subscriber \u2014 ${firstName} joined Hale Textile Studio`;

  const notifyBody = wasUnsubscribed
    ? `Resubscription Alert\n\nSomeone who previously unsubscribed has rejoined your mailing list.\n\nName: ${fname} ${lname}\nEmail: ${email}\nI Am A: ${iama || 'not specified'}\nCompany: ${company || 'not specified'}\n\nThey have been resubscribed in Mailchimp. No action needed unless you want to reach out personally.\n\n\u2014 Hale Textile Studio website`
    : `New Newsletter Signup!\n\nName: ${fname} ${lname}\nEmail: ${email}\nI Am A: ${iama || 'not specified'}\nCompany: ${company || 'not specified'}\n\nThey are now in your Mailchimp audience.\n\n\u2014 Hale Textile Studio website`;

  // ── STEP 4: Send confirmation email to subscriber ──
  const confirmSubject = wasUnsubscribed
    ? 'Welcome back to Hale Textile Studio \u2736'
    : 'You are on the list \u2014 Mahalo from Hale Textile Studio \u2736';

  const confirmBody = wasUnsubscribed
    ? `Aloha ${fname || 'there'},\n\nWelcome back! You have been resubscribed to the Hale Textile Studio newsletter.\n\nYou will receive exclusive previews of the fabric library, seasonal drop announcements, new arrivals, and studio events.\n\nWith aloha,\nMeeta Vu\nHale Textile Studio \u2014 Hawaii's Home Fabric Library\n1050 Queen St Suite 100, Honolulu HI 96814\nhaletextilestudio.com | @haletextilestudio`
    : `Aloha ${fname || 'there'},\n\nMahalo for joining the Hale Textile Studio community.\n\nYou will be the first to know about new arrivals, seasonal drops, studio events, and everything happening at Hawaii\u2019s home fabric library.\n\nWith aloha,\nMeeta Vu\nHale Textile Studio \u2014 Hawaii's Home Fabric Library\n1050 Queen St Suite 100, Honolulu HI 96814\nhaletextilestudio.com | @haletextilestudio`;

  // Send both emails (fails gracefully if Gmail not configured)
  try {
    await sendGmailNotification(NOTIFY_EMAIL, notifySubject, notifyBody);
    await sendGmailNotification(email, confirmSubject, confirmBody);
  } catch (e) {
    console.log('Email send skipped (Gmail not configured):', e.message);
    // Signup still succeeded — this is non-blocking
  }

  // ── STEP 5: Add a tag in Mailchimp to flag resubscriptions ──
  if (wasUnsubscribed) {
    try {
      await mcFetch(
        `/lists/${MC_AUDIENCE}/members/${emailHash}/tags`,
        'POST',
        { tags: [{ name: 'Resubscribed', status: 'active' }] },
        MC_API_KEY
      );
    } catch (e) {
      // Non-critical
    }
  }

  return {
    statusCode: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      result: 'success',
      status: mcResult.status,
      resubscribed: wasUnsubscribed,
      msg: wasUnsubscribed
        ? 'Welcome back! You have been resubscribed.'
        : 'You are on the list. Mahalo!'
    })
  };
};
