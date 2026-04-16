"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const inputStyle = {
  width: "100%",
  background: "rgba(255,255,255,0.06)",
  border: "1px solid rgba(255,255,255,0.15)",
  padding: "12px 16px",
  color: "#fff",
  fontSize: 13,
  fontFamily: "var(--font-josefin), sans-serif",
  outline: "none",
  marginTop: 6,
};

const labelStyle = {
  fontSize: 10,
  letterSpacing: "0.42em",
  textTransform: "uppercase" as const,
  color: "rgba(255,255,255,0.55)",
};

const rightInputStyle = {
  width: "100%",
  background: "#F8F4EC",
  border: "1px solid #DDD8CC",
  padding: "12px 16px",
  color: "#14100C",
  fontSize: 13,
  fontFamily: "var(--font-josefin), sans-serif",
  outline: "none",
  marginTop: 6,
};

const rightLabelStyle = {
  fontSize: 10,
  letterSpacing: "0.42em",
  textTransform: "uppercase" as const,
  color: "#5A5248",
};

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", iama: "", whyhere: "", message: "" });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");
    const [fname, ...rest] = form.name.trim().split(" ");
    const lname = rest.join(" ");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: form.email, fname, lname, iama: form.iama, message: form.message, whyhere: form.whyhere }),
      });
      if (res.ok) {
        setStatus("success");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <>
      <section style={{ display: "grid", gridTemplateColumns: "1fr 1fr", minHeight: "85vh" }} className="max-md:block">
        {/* Left — info */}
        <div style={{ background: "#0A2A3A", padding: "72px 48px" }} className="max-md:px-5 max-md:py-10">
          <div style={{ fontSize: 10, letterSpacing: "0.55em", textTransform: "uppercase", color: "rgba(255,255,255,0.6)", marginBottom: 10 }}>Come Visit</div>
          <div style={{ width: 28, height: 1.5, background: "rgba(255,255,255,0.3)", marginBottom: 28 }} />
          <motion.h2 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} style={{ fontFamily: "var(--font-cormorant), serif", fontSize: "clamp(40px, 4vw, 56px)", fontWeight: 300, color: "#fff", lineHeight: 1.1, marginBottom: 20 }}>
            Let&apos;s talk<br />fabric.
          </motion.h2>
          <p style={{ fontFamily: "var(--font-cormorant), serif", fontSize: 16, fontStyle: "italic", color: "rgba(255,255,255,0.65)", lineHeight: 1.9, marginBottom: 28 }}>
            Studio visits are by appointment only. Book your 30-minute visit below, or send us a message and we&apos;ll be in touch within 1–2 business days.
          </p>
          <div style={{ marginBottom: 32 }}>
            <a
              href="https://calendly.com/haletextilestudio/30min"
              target="_blank"
              rel="noopener noreferrer"
              style={{ display: "inline-block", background: "#fff", color: "#D4614A", fontSize: 10, letterSpacing: "0.42em", textTransform: "uppercase", padding: "13px 24px", textDecoration: "none" }}
            >
              Book a Studio Visit
            </a>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px 32px" }}>
            {[
              { label: "Studio Address", val: "1050 Queen Street · Suite 100\nHonolulu, Hawaii 96814" },
              { label: "Located At", val: "Hub Coworking · Honolulu" },
              { label: "Email", val: "HaleTextileStudio@gmail.com", href: "mailto:HaleTextileStudio@gmail.com" },
              { label: "Instagram", val: "@haletextilestudio", href: "https://www.instagram.com/haletextilestudio/" },
              { label: "Website", val: "haletextilestudio.com" },
            ].map(({ label, val, href }) => (
              <div key={label}>
                <div style={labelStyle}>{label}</div>
                {href ? (
                  <a href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer" style={{ fontFamily: "var(--font-cormorant), serif", fontSize: 16, fontStyle: "italic", color: "#fff", lineHeight: 1.7, whiteSpace: "pre-line", textDecoration: "none" }}>
                    {val}
                  </a>
                ) : (
                  <div style={{ fontFamily: "var(--font-cormorant), serif", fontSize: 16, fontStyle: "italic", color: "rgba(255,255,255,0.75)", lineHeight: 1.7, whiteSpace: "pre-line" }}>{val}</div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Right — form */}
        <div style={{ background: "#fff", padding: "72px 48px" }} className="max-md:px-5 max-md:py-10">
          <div className="section-label" style={{ color: "#D4614A", marginTop: 0 }}>Send a Message</div>
          <div style={{ width: 28, height: 1.5, background: "#D4614A", marginBottom: 28 }} />
          <h2 style={{ fontFamily: "var(--font-cormorant), serif", fontSize: 32, color: "#0A2A3A", marginBottom: 28 }}>How can we help?</h2>

          {status === "success" ? (
            <div style={{ padding: "28px 32px", background: "rgba(90,173,168,0.08)", border: "1px solid rgba(90,173,168,0.25)" }}>
              <div style={{ fontFamily: "var(--font-cormorant), serif", fontSize: 26, fontWeight: 300, color: "#0A2A3A", marginBottom: 10 }}>Mahalo. ✦</div>
              <div style={{ fontFamily: "var(--font-cormorant), serif", fontSize: 17, fontStyle: "italic", color: "#5A5248", lineHeight: 1.8, marginBottom: 8 }}>
                Your message has been received by the Hale Textile Studio team.
              </div>
              <div style={{ fontFamily: "var(--font-cormorant), serif", fontSize: 15, fontStyle: "italic", color: "#5A5248", lineHeight: 1.8 }}>
                We will get back to you within 1–2 business days.
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 20 }}>
              <div>
                <label style={rightLabelStyle}>Your Name</label>
                <input type="text" style={rightInputStyle} placeholder="First and last name" required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
              </div>
              <div>
                <label style={rightLabelStyle}>Email Address</label>
                <input type="email" style={rightInputStyle} placeholder="your@email.com" required value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
              </div>
              <div>
                <label style={rightLabelStyle}>I Am A</label>
                <select style={rightInputStyle} value={form.iama} onChange={(e) => setForm({ ...form, iama: e.target.value })}>
                  <option value="">Select one</option>
                  <option>Interior Designer</option>
                  <option>Homeowner</option>
                  <option>Architect</option>
                  <option>Stager / Realtor</option>
                  <option>Other</option>
                </select>
              </div>
              <div>
                <label style={rightLabelStyle}>What Brings You Here</label>
                <select style={rightInputStyle} value={form.whyhere} onChange={(e) => setForm({ ...form, whyhere: e.target.value })}>
                  <option value="">Select one</option>
                  <option>Fabric for a project</option>
                  <option>Wallpaper</option>
                  <option>Custom accessories</option>
                  <option>Trade program</option>
                  <option>Studio visit</option>
                  <option>Just curious</option>
                </select>
              </div>
              <div>
                <label style={rightLabelStyle}>Message</label>
                <textarea style={{ ...rightInputStyle, minHeight: 120, resize: "vertical" }} placeholder="Tell us about your project or what you're looking for..." value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} />
              </div>
              {status === "error" && (
                <div style={{ fontSize: 12, color: "#D4614A", letterSpacing: "0.3em", textTransform: "uppercase" }}>
                  Something went wrong. Please try again or email us directly.
                </div>
              )}
              <button
                type="submit"
                disabled={status === "loading"}
                style={{ background: "#D4614A", color: "#fff", fontSize: 11, letterSpacing: "0.45em", textTransform: "uppercase", padding: "16px 32px", border: "none", cursor: status === "loading" ? "not-allowed" : "pointer", opacity: status === "loading" ? 0.7 : 1 }}
              >
                {status === "loading" ? "Sending..." : "Send Message"}
              </button>
            </form>
          )}
        </div>
      </section>
    </>
  );
}
