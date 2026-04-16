"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const benefits = [
  { title: "Studio Space for Client Meetings", body: "Private meeting room · Projector & screen\nLarge layout tables for fabric review\nLiving fabric library as backdrop\nCustom furniture vignettes in context", accent: "#D4614A" },
  { title: "Trade Pricing", body: "Preferred pricing on all fabric orders\nWallpaper trade discounts\nAccessory wholesale pricing\nCustom order priority", accent: "#D4614A" },
  { title: "Sample Loan Program", body: "Take samples to your clients\nExtended loan periods for projects\nNo deposit required for established trade\nReturn when project is complete", accent: "#D4614A" },
  { title: "HTS Team Support", body: "Fabric sourcing assistance\nProduct knowledge & guidance\nCustom furniture resource access\nPriority scheduling for busy periods", accent: "#D4614A" },
  { title: "For Established Designers", body: "Continuing the Accent Interiors legacy\nExisting relationships honored\nDedicated account management\nProject history maintained", accent: "#5AADA8" },
  { title: "For Emerging Designers", body: "Open invitation to build your career here\nNo minimum order requirements\nMentorship resources available\nBuild your trade account from day one", accent: "#2B5278" },
];

const whatToBring = [
  "Your business card or design credentials",
  "Your resale certificate (if you have one)",
  "A project you're currently working on",
  "Curiosity. That is the only real requirement.",
];

export default function TradePage() {
  return (
    <>
      {/* Hero */}
      <section style={{ background: "#0A2A3A", padding: "80px 40px 72px", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: 3, background: "linear-gradient(90deg, #2B5278, #5AADA8, #2B5278)" }} />
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} style={{ fontSize: 11, letterSpacing: "0.55em", textTransform: "uppercase", color: "rgba(90,173,168,0.7)", marginBottom: 16 }}>
            For Hawaii&apos;s Design Community
          </motion.div>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1 }} style={{ fontFamily: "var(--font-cormorant), serif", fontSize: "clamp(44px, 6vw, 72px)", fontWeight: 300, color: "#fff", marginBottom: 14, letterSpacing: "0.05em" }}>
            Trade Program
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} style={{ fontFamily: "var(--font-cormorant), serif", fontSize: 16, fontStyle: "italic", color: "rgba(255,255,255,0.65)", letterSpacing: "0.1em" }}>
            Open to every designer in Hawaii. No tiers. No exclusivity. Just resources.
          </motion.p>
        </div>
      </section>

      {/* Philosophy */}
      <section style={{ background: "#2B5278", padding: "72px 40px", textAlign: "center" }}>
        <div style={{ maxWidth: 800, margin: "0 auto" }}>
          <div style={{ fontSize: 10, letterSpacing: "0.55em", textTransform: "uppercase", color: "rgba(255,255,255,0.6)", marginBottom: 10 }}>Our Philosophy</div>
          <div style={{ width: 28, height: 1.5, background: "rgba(255,255,255,0.3)", margin: "10px auto 24px" }} />
          <p style={{ fontFamily: "var(--font-cormorant), serif", fontSize: 22, fontStyle: "italic", color: "#fff", lineHeight: 1.7, marginBottom: 16 }}>
            &ldquo;Hale Textile Studio is a resource for every designer in Hawaii — established or just starting out. Our studio space is available to trade partners for client presentations, sample reviews, and project work. If you source with us, consider this your home base.&rdquo;
          </p>
          <div style={{ fontSize: 11, letterSpacing: "0.45em", textTransform: "uppercase", color: "rgba(255,255,255,0.5)" }}>
            Hale Textile Studio · Trade Program Philosophy
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section style={{ padding: "72px 40px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div className="section-label" style={{ color: "#D4614A" }}>What You Get</div>
          <div style={{ width: 28, height: 1.5, background: "#D4614A", marginBottom: 28 }} />
          <h2 style={{ fontFamily: "var(--font-cormorant), serif", fontSize: 36, color: "#0A2A3A", marginBottom: 40 }}>Your studio. Your home base.</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 2 }} className="max-md:grid-cols-1">
            {benefits.map(({ title, body, accent }) => (
              <motion.div key={title} whileHover={{ backgroundColor: "#F9E8E4" }} style={{ background: "#F8F4EC", borderLeft: `3px solid ${accent}`, padding: "32px 28px", transition: "background 0.2s" }}>
                <div style={{ fontFamily: "var(--font-cormorant), serif", fontSize: 20, color: "#0A2A3A", marginBottom: 12 }}>{title}</div>
                <div style={{ fontSize: 11, letterSpacing: "0.28em", textTransform: "uppercase", color: "#5A5248", lineHeight: 2.4, whiteSpace: "pre-line" }}>{body}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Apply */}
      <section style={{ background: "#2B5278", padding: "72px 40px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "start" }} className="max-md:block max-md:space-y-8">
          <div>
            <div style={{ fontSize: 10, letterSpacing: "0.55em", textTransform: "uppercase", color: "rgba(90,173,168,0.7)", marginBottom: 10 }}>Get Started</div>
            <div style={{ width: 28, height: 1.5, background: "#5AADA8", marginBottom: 28 }} />
            <h2 style={{ fontFamily: "var(--font-cormorant), serif", fontSize: 40, color: "#fff", marginBottom: 16 }}>
              Apply for<br />trade access.
            </h2>
            <p style={{ fontFamily: "var(--font-cormorant), serif", fontSize: 18, fontStyle: "italic", color: "rgba(255,255,255,0.6)", lineHeight: 1.9, marginBottom: 28 }}>
              Visit the studio or reach out by email. We approve all legitimate design professionals — no gatekeeping, no waiting lists.
            </p>
            <Link href="/contact" style={{ display: "inline-block", background: "#D4614A", color: "#fff", fontSize: 11, letterSpacing: "0.45em", textTransform: "uppercase", padding: "16px 32px", textDecoration: "none" }}>
              Contact Us to Apply
            </Link>
          </div>

          <div style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", padding: 36 }}>
            <div style={{ fontSize: 11, letterSpacing: "0.42em", textTransform: "uppercase", color: "#5AADA8", marginBottom: 20 }}>What to Bring</div>
            <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
              {whatToBring.map((item) => (
                <div key={item} style={{ fontFamily: "var(--font-cormorant), serif", fontSize: 17, color: "rgba(255,255,255,0.65)", lineHeight: 1.7, fontStyle: "italic", paddingLeft: 16, borderLeft: "1px solid rgba(90,173,168,0.3)" }}>
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
