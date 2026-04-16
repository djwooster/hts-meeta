"use client";

import Link from "next/link";
import { motion, type Easing } from "framer-motion";
import { HtsSymbolLarge } from "@/components/HtsSymbol";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, delay, ease: "easeOut" as Easing },
});

const services = [
  {
    num: "01",
    title: "Fabric Library",
    body: "Thousands of luxury fabric samples spanning linen, cotton, velvet, outdoor, and more — all available to touch and compare in person.",
    href: "/fabric",
  },
  {
    num: "02",
    title: "Wallpaper Collections",
    body: "Designer wallpapers from leading brands. Textured, printed, grasscloth, and more — curated for Hawaii's climate and lifestyle.",
    href: "/wallpaper",
  },
  {
    num: "03",
    title: "Custom Home Accessories",
    body: "Pillows, table linens, window treatments, and more — made to order in the fabric of your choice.",
    href: "/accessories",
  },
  {
    num: "04",
    title: "Trade Program",
    body: "A dedicated resource for interior designers: trade pricing, project support, and early access to new collections.",
    href: "/trade",
  },
  {
    num: "05",
    title: "Design Consultation",
    body: "Work with Meeta to find the right fabric for your project — from a single room refresh to a full home renovation.",
    href: "/contact",
  },
  {
    num: "06",
    title: "Studio Visits",
    body: "Open to designers and homeowners alike. Come browse the library, pull samples, and find what inspires you.",
    href: "/contact",
  },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section
        style={{
          background: "#D4614A",
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          padding: "80px 40px",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div style={{ position: "absolute", top: -120, right: -120, width: 600, height: 600, borderRadius: "50%", background: "#B84D38", opacity: 0.3 }} />
        <div style={{ position: "absolute", bottom: -80, left: -80, width: 400, height: 400, borderRadius: "50%", background: "rgba(43,82,120,0.15)" }} />

        <div
          style={{ maxWidth: 1200, margin: "0 auto", width: "100%", position: "relative", zIndex: 1, display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "center" }}
          className="max-md:block max-md:max-w-full"
        >
          <div>
            <motion.div {...fadeUp(0)} style={{ fontSize: 11, letterSpacing: "0.55em", textTransform: "uppercase", color: "rgba(255,255,255,0.65)", marginBottom: 20 }}>
              Hawaii&apos;s Home Fabric Library · Est. 2026
            </motion.div>
            <motion.h1
              {...fadeUp(0.15)}
              style={{ fontFamily: "var(--font-cormorant), serif", fontSize: "clamp(52px, 7vw, 84px)", fontWeight: 300, lineHeight: 1.05, color: "#fff", marginBottom: 20, letterSpacing: "0.04em" }}
            >
              Your creative
              <br />
              space for
              <br />
              <em style={{ fontStyle: "italic", color: "rgba(255,255,255,0.75)" }}>the home.</em>
            </motion.h1>
            <motion.div {...fadeUp(0.3)} style={{ width: 32, height: 1.5, background: "rgba(255,255,255,0.4)", marginBottom: 20 }} />
            <motion.p
              {...fadeUp(0.3)}
              style={{ fontFamily: "var(--font-cormorant), serif", fontSize: 22, fontStyle: "italic", letterSpacing: "0.1em", color: "rgba(255,255,255,0.85)", marginBottom: 32, lineHeight: 1.5 }}
            >
              Thousands of luxury fabrics. Wallpaper.
              <br />
              Custom home accessories. All in one studio.
            </motion.p>
            <motion.div
              {...fadeUp(0.45)}
              style={{ fontSize: 11, letterSpacing: "0.38em", textTransform: "uppercase", color: "rgba(255,255,255,0.6)", marginBottom: 40, lineHeight: 2.2 }}
            >
              Luxury fabric · Wallpaper · Custom home accessories
              <br />
              Hub Coworking · Honolulu, Hawaii
            </motion.div>
            <motion.div {...fadeUp(0.45)} className="flex flex-wrap gap-3">
              <Link href="/fabric" style={{ display: "inline-block", background: "#fff", color: "#D4614A", fontSize: 11, letterSpacing: "0.45em", textTransform: "uppercase", padding: "16px 32px", textDecoration: "none" }}>
                Explore the Library
              </Link>
              <Link href="/contact" style={{ display: "inline-block", border: "1px solid rgba(255,255,255,0.5)", color: "#fff", fontSize: 11, letterSpacing: "0.45em", textTransform: "uppercase", padding: "16px 32px", textDecoration: "none" }}>
                Visit the Studio
              </Link>
            </motion.div>
          </div>

          <motion.div {...fadeUp(0.3)} className="max-md:hidden flex items-center justify-center">
            <HtsSymbolLarge />
          </motion.div>
        </div>
      </section>

      {/* Strip */}
      <div style={{ background: "#2B5278", display: "flex" }} className="max-sm:grid max-sm:grid-cols-2">
        {[
          { label: "Location", val: "Hub Coworking · Honolulu" },
          { label: "Open to", val: "Designers · Homeowners · Everyone" },
          { label: "The library holds", val: "Thousands of curated luxury fabrics" },
          {
            label: "Follow",
            val: (
              <a href="https://www.instagram.com/haletextilestudio/" target="_blank" rel="noopener noreferrer" style={{ color: "rgba(255,255,255,0.75)", textDecoration: "none", display: "inline-flex", alignItems: "center", gap: 7 }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                  <rect x="2" y="2" width="20" height="20" rx="5" stroke="currentColor" strokeWidth="2" fill="none" />
                  <circle cx="12" cy="12" r="4.5" stroke="currentColor" strokeWidth="2" fill="none" />
                  <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
                </svg>
                @haletextilestudio
              </a>
            ),
          },
        ].map(({ label, val }, i) => (
          <div key={i} style={{ flex: 1, padding: "20px 24px", borderRight: i < 3 ? "1px solid rgba(255,255,255,0.08)" : "none" }}>
            <div style={{ fontSize: 10, letterSpacing: "0.42em", textTransform: "uppercase", color: "#5AADA8", marginBottom: 3 }}>{label}</div>
            <div style={{ fontFamily: "var(--font-cormorant), serif", fontSize: 16, fontStyle: "italic", color: "rgba(255,255,255,0.75)", letterSpacing: "0.05em" }}>{val}</div>
          </div>
        ))}
      </div>

      {/* About strip */}
      <div style={{ padding: "80px 40px", maxWidth: 1200, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "center" }} className="max-md:block max-md:px-5 max-md:py-9">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
          <div className="section-label" style={{ color: "#D4614A" }}>What We Are</div>
          <div style={{ width: 28, height: 1.5, background: "#D4614A", marginBottom: 28 }} />
          <h2 style={{ fontSize: "clamp(36px, 4vw, 52px)", lineHeight: 1.15, color: "#0A2A3A", marginBottom: 20 }}>
            Not a store.<br />A library.
          </h2>
          <p style={{ fontFamily: "var(--font-cormorant), serif", fontSize: 18, fontStyle: "italic", lineHeight: 1.9, color: "#5A5248", marginBottom: 16 }}>
            Hale Textile Studio is Hawaii&apos;s home fabric library — a living showroom where every surface showcases what becomes possible when you choose the right fabric.
          </p>
          <p style={{ fontFamily: "var(--font-cormorant), serif", fontSize: 18, fontStyle: "italic", lineHeight: 1.9, color: "#5A5248", marginBottom: 28 }}>
            Come in. Touch everything. See what inspires you.
          </p>
          <Link href="/about" style={{ display: "inline-block", border: "1px solid #2B5278", color: "#2B5278", fontSize: 11, letterSpacing: "0.45em", textTransform: "uppercase", padding: "16px 32px", textDecoration: "none" }}>
            Our Story
          </Link>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.15 }} style={{ background: "#D4614A", padding: "52px 44px" }}>
          <p style={{ fontFamily: "var(--font-cormorant), serif", fontSize: 28, fontWeight: 300, lineHeight: 1.4, color: "#fff", fontStyle: "italic", marginBottom: 20 }}>
            &ldquo;Not fast fashion for the home. The opposite — timeless, tactile, deeply personal, and unmistakably Hawaii.&rdquo;
          </p>
          <div style={{ fontSize: 7.5, letterSpacing: "0.45em", textTransform: "uppercase", color: "rgba(255,255,255,0.55)" }}>
            Brand North Star · Hale Textile Studio
          </div>
        </motion.div>
      </div>

      {/* Services */}
      <section style={{ background: "#0A2A3A", padding: "80px 40px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ fontSize: 10, letterSpacing: "0.55em", textTransform: "uppercase", color: "rgba(90,173,168,0.7)", textAlign: "center", marginBottom: 10 }}>What We Offer</div>
          <div style={{ width: 28, height: 1.5, background: "#5AADA8", margin: "10px auto 20px" }} />
          <h2 style={{ fontFamily: "var(--font-cormorant), serif", fontSize: "clamp(32px, 3.5vw, 48px)", color: "#fff", textAlign: "center", marginBottom: 52, letterSpacing: "0.05em" }}>
            The Complete Resource<br />
            <em style={{ color: "rgba(255,255,255,0.55)" }}>for the home.</em>
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 2 }} className="max-md:grid-cols-1">
            {services.map(({ num, title, body, href }) => (
              <Link key={num} href={href} style={{ textDecoration: "none" }}>
                <motion.div whileHover={{ backgroundColor: "rgba(90,173,168,0.08)" }} style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.06)", padding: "40px 32px", cursor: "pointer", height: "100%" }}>
                  <div style={{ fontFamily: "var(--font-cormorant), serif", fontSize: 36, fontWeight: 300, color: "rgba(90,173,168,0.25)", marginBottom: 16 }}>{num}</div>
                  <div style={{ fontFamily: "var(--font-cormorant), serif", fontSize: 22, color: "#fff", marginBottom: 12, fontWeight: 300 }}>{title}</div>
                  <div style={{ fontSize: 11, letterSpacing: "0.28em", textTransform: "uppercase", color: "rgba(255,255,255,0.45)", lineHeight: 2.4 }}>{body}</div>
                  <div style={{ marginTop: 24, fontSize: 10, letterSpacing: "0.42em", textTransform: "uppercase", color: "#5AADA8" }}>Learn more →</div>
                </motion.div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Instagram teaser */}
      <section style={{ background: "#F9E8E4", padding: "64px 40px", textAlign: "center", borderTop: "2px solid #EDE0CC" }}>
        <div className="section-label" style={{ color: "#D4614A" }}>Follow Along</div>
        <h2 style={{ fontFamily: "var(--font-cormorant), serif", fontSize: 36, color: "#0A2A3A", marginBottom: 12 }}>@haletextilestudio</h2>
        <p style={{ fontFamily: "var(--font-cormorant), serif", fontSize: 18, fontStyle: "italic", color: "#5A5248", marginBottom: 28 }}>
          Fabric inspiration, behind-the-scenes, and new arrivals — all on Instagram.
        </p>
        <a
          href="https://www.instagram.com/haletextilestudio/"
          target="_blank"
          rel="noopener noreferrer"
          style={{ display: "inline-flex", alignItems: "center", gap: 10, background: "#D4614A", color: "#fff", fontSize: 11, letterSpacing: "0.45em", textTransform: "uppercase", padding: "16px 32px", textDecoration: "none" }}
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
            <rect x="2" y="2" width="20" height="20" rx="5" stroke="currentColor" strokeWidth="2" fill="none" />
            <circle cx="12" cy="12" r="4.5" stroke="currentColor" strokeWidth="2" fill="none" />
            <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
          </svg>
          Follow on Instagram
        </a>
      </section>
    </>
  );
}
