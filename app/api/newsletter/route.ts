import { NextRequest, NextResponse } from "next/server";
import crypto from "crypto";
import nodemailer from "nodemailer";

const MC_API_KEY = process.env.MAILCHIMP_API_KEY!;
const MC_AUDIENCE = process.env.MAILCHIMP_AUDIENCE_ID!;
const NOTIFY_EMAIL = process.env.NOTIFY_EMAIL || "HaleTextileStudio@gmail.com";

function getDC(apiKey: string) {
  return apiKey.split("-").pop();
}

function md5Email(email: string) {
  return crypto.createHash("md5").update(email.toLowerCase()).digest("hex");
}

async function mcFetch(path: string, method: string, body: unknown) {
  const dc = getDC(MC_API_KEY);
  const url = `https://${dc}.api.mailchimp.com/3.0${path}`;
  const auth = "Basic " + Buffer.from(`anystring:${MC_API_KEY}`).toString("base64");
  const opts: RequestInit = { method, headers: { Authorization: auth, "Content-Type": "application/json" } };
  if (body) opts.body = JSON.stringify(body);
  const res = await fetch(url, opts);
  return res.json();
}

async function sendEmail(to: string, subject: string, text: string) {
  if (!process.env.GMAIL_USER || !process.env.GMAIL_APP_PASSWORD) return;
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: { user: process.env.GMAIL_USER, pass: process.env.GMAIL_APP_PASSWORD },
  });
  await transporter.sendMail({ from: process.env.GMAIL_USER, to, subject, text });
}

export async function POST(req: NextRequest) {
  let data: { email?: string; fname?: string; lname?: string; iama?: string; company?: string };
  try {
    data = await req.json();
  } catch {
    return NextResponse.json({ result: "error", msg: "Bad request" }, { status: 400 });
  }

  const { email = "", fname = "", lname = "", iama = "", company = "" } = data;
  if (!email || !email.includes("@")) {
    return NextResponse.json({ result: "error", msg: "Valid email required" }, { status: 400 });
  }

  const emailHash = md5Email(email);

  let existingStatus: string | null = null;
  try {
    const check = await mcFetch(`/lists/${MC_AUDIENCE}/members/${emailHash}`, "GET", null);
    if (check.status && typeof check.status === "string") existingStatus = check.status;
  } catch { /* new contact */ }

  const wasUnsubscribed = existingStatus === "unsubscribed" || existingStatus === "archived";

  let mcResult;
  try {
    mcResult = await mcFetch(`/lists/${MC_AUDIENCE}/members/${emailHash}`, "PUT", {
      email_address: email,
      status_if_new: "subscribed",
      status: "subscribed",
      merge_fields: { FNAME: fname, LNAME: lname, I_AM_A: iama, COMPANY: company },
    });
  } catch {
    return NextResponse.json({ result: "error", msg: "Could not connect to mailing list. Please try again." }, { status: 500 });
  }

  if (mcResult.status === 400 || mcResult.title === "Invalid Resource") {
    return NextResponse.json({ result: "error", msg: mcResult.detail || "Unable to subscribe. Please try again." }, { status: 400 });
  }

  const firstName = fname || email;
  const notifySubject = wasUnsubscribed
    ? `⚠️ Resubscription alert — ${firstName} rejoined your list`
    : `✦ New subscriber — ${firstName} joined Hale Textile Studio`;

  const notifyBody = wasUnsubscribed
    ? `Resubscription Alert\n\nName: ${fname} ${lname}\nEmail: ${email}\nI Am A: ${iama || "not specified"}\nCompany: ${company || "not specified"}\n\nThey have been resubscribed in Mailchimp.\n\n— Hale Textile Studio website`
    : `New Newsletter Signup!\n\nName: ${fname} ${lname}\nEmail: ${email}\nI Am A: ${iama || "not specified"}\nCompany: ${company || "not specified"}\n\nThey are now in your Mailchimp audience.\n\n— Hale Textile Studio website`;

  const confirmSubject = wasUnsubscribed ? "Welcome back to Hale Textile Studio ✦" : "You are on the list — Mahalo from Hale Textile Studio ✦";
  const confirmBody = wasUnsubscribed
    ? `Aloha ${fname || "there"},\n\nWelcome back! You've been resubscribed to the Hale Textile Studio newsletter.\n\nWith aloha,\nMeeta Vu\nHale Textile Studio\n1050 Queen St Suite 100, Honolulu HI 96814`
    : `Aloha ${fname || "there"},\n\nMahalo for joining the Hale Textile Studio community.\n\nWith aloha,\nMeeta Vu\nHale Textile Studio\n1050 Queen St Suite 100, Honolulu HI 96814`;

  try {
    await sendEmail(NOTIFY_EMAIL, notifySubject, notifyBody);
    await sendEmail(email, confirmSubject, confirmBody);
  } catch { /* non-blocking */ }

  if (wasUnsubscribed) {
    try {
      await mcFetch(`/lists/${MC_AUDIENCE}/members/${emailHash}/tags`, "POST", { tags: [{ name: "Resubscribed", status: "active" }] });
    } catch { /* non-critical */ }
  }

  return NextResponse.json({
    result: "success",
    status: mcResult.status,
    resubscribed: wasUnsubscribed,
    msg: wasUnsubscribed ? "Welcome back! You have been resubscribed." : "You are on the list. Mahalo!",
  });
}
