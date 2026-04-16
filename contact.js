// Netlify Function: contact.js
// Handles contact form → Mailchimp API with Contact Inquiry tag

exports.handler = async (event) => {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' };
  }

  const API_KEY = process.env.MAILCHIMP_API_KEY;
  const LIST_ID = process.env.MAILCHIMP_LIST_ID;

  let data;
  try {
    data = JSON.parse(event.body);
  } catch {
    return { statusCode: 400, body: JSON.stringify({ error: 'Invalid JSON' }) };
  }

  const { email, fname, lname, iama, message, whyhere } = data;
  if (!email) {
    return { statusCode: 400, body: JSON.stringify({ error: 'Email required' }) };
  }

  const mcData = {
    email_address: email,
    status: 'subscribed',
    merge_fields: {
      FNAME:   fname    || '',
      LNAME:   lname    || '',
      I_AM_A:  iama     || '',
      MESSAGE: message  || '',
      MMERGE9: whyhere  || ''
    },
    tags: ['Contact Inquiry', 'Newsletter Signup']
  };

  try {
    const res = await fetch(
      `https://us8.api.mailchimp.com/3.0/lists/${LIST_ID}/members`,
      {
        method: 'POST',
        headers: {
          'Authorization': 'apikey ' + API_KEY,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(mcData)
      }
    );

    const result = await res.json();

    // If already subscribed, update their record and tags
    if (result.status === 400 && result.title === 'Member Exists') {
      const hash = require('crypto')
        .createHash('md5')
        .update(email.toLowerCase())
        .digest('hex');

      // Update merge fields
      await fetch(
        `https://us8.api.mailchimp.com/3.0/lists/${LIST_ID}/members/${hash}`,
        {
          method: 'PATCH',
          headers: {
            'Authorization': 'apikey ' + API_KEY,
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            merge_fields: {
              FNAME:   fname    || '',
              LNAME:   lname    || '',
              I_AM_A:  iama     || '',
              MESSAGE: message  || '',
              MMERGE9: whyhere  || ''
            }
          })
        }
      );

      // Apply tag
      await fetch(
        `https://us8.api.mailchimp.com/3.0/lists/${LIST_ID}/members/${hash}/tags`,
        {
          method: 'POST',
          headers: {
            'Authorization': 'apikey ' + API_KEY,
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            tags: [{ name: 'Contact Inquiry', status: 'active' }, { name: 'Newsletter Signup', status: 'active' }]
          })
        }
      );

      return { statusCode: 200, body: JSON.stringify({ result: 'success' }) };
    }

    if (res.ok) {
      return { statusCode: 200, body: JSON.stringify({ result: 'success' }) };
    } else {
      return { statusCode: 400, body: JSON.stringify({ result: 'error', msg: result.detail }) };
    }

  } catch (err) {
    return { statusCode: 500, body: JSON.stringify({ error: err.message }) };
  }
};
