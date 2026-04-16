import { NextRequest, NextResponse } from "next/server";
import crypto from "crypto";

const API_KEY = process.env.MAILCHIMP_API_KEY!;
const LIST_ID = process.env.MAILCHIMP_LIST_ID!;

export async function POST(req: NextRequest) {
  let data: { email?: string; fname?: string; lname?: string; iama?: string; message?: string; whyhere?: string };
  try {
    data = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const { email, fname = "", lname = "", iama = "", message = "", whyhere = "" } = data;
  if (!email) {
    return NextResponse.json({ error: "Email required" }, { status: 400 });
  }

  const mcData = {
    email_address: email,
    status: "subscribed",
    merge_fields: { FNAME: fname, LNAME: lname, I_AM_A: iama, MESSAGE: message, MMERGE9: whyhere },
    tags: ["Contact Inquiry", "Newsletter Signup"],
  };

  try {
    const res = await fetch(`https://us8.api.mailchimp.com/3.0/lists/${LIST_ID}/members`, {
      method: "POST",
      headers: { Authorization: "apikey " + API_KEY, "Content-Type": "application/json" },
      body: JSON.stringify(mcData),
    });

    const result = await res.json();

    if (result.status === 400 && result.title === "Member Exists") {
      const hash = crypto.createHash("md5").update(email.toLowerCase()).digest("hex");
      await fetch(`https://us8.api.mailchimp.com/3.0/lists/${LIST_ID}/members/${hash}`, {
        method: "PATCH",
        headers: { Authorization: "apikey " + API_KEY, "Content-Type": "application/json" },
        body: JSON.stringify({ merge_fields: { FNAME: fname, LNAME: lname, I_AM_A: iama, MESSAGE: message, MMERGE9: whyhere } }),
      });
      await fetch(`https://us8.api.mailchimp.com/3.0/lists/${LIST_ID}/members/${hash}/tags`, {
        method: "POST",
        headers: { Authorization: "apikey " + API_KEY, "Content-Type": "application/json" },
        body: JSON.stringify({ tags: [{ name: "Contact Inquiry", status: "active" }, { name: "Newsletter Signup", status: "active" }] }),
      });
      return NextResponse.json({ result: "success" });
    }

    if (res.ok) {
      return NextResponse.json({ result: "success" });
    } else {
      return NextResponse.json({ result: "error", msg: result.detail }, { status: 400 });
    }
  } catch (err) {
    return NextResponse.json({ error: (err as Error).message }, { status: 500 });
  }
}
