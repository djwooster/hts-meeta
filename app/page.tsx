"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, type Easing } from "framer-motion";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.95, delay, ease: "easeOut" as Easing },
});

const fadeIn = (delay = 0) => ({
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { duration: 1.3, delay, ease: "easeOut" as Easing },
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
      {/* ── Hero ── */}
      <section className="relative h-screen overflow-hidden max-md:h-[90vh]">

        {/* Full-bleed background image */}
        <motion.div {...fadeIn(0)} className="absolute inset-0">
          <Image
            src="/hero-image-new.jpg"
            alt="Luxury outdoor terrace with Hale Textile Studio fabrics overlooking the ocean"
            fill
            priority
            style={{ objectFit: "cover", objectPosition: "center" }}
          />
        </motion.div>

        {/* Left-to-right gradient — darkens the text area */}
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to right, rgba(5,18,28,0.90) 0%, rgba(5,18,28,0.65) 38%, rgba(5,18,28,0.18) 65%, transparent 100%)" }} />
        {/* Bottom vignette for depth */}
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(5,18,28,0.45) 0%, transparent 45%)" }} />

        {/* Text content */}
        <div className="relative z-10 h-full flex flex-col justify-start pt-[160px] px-[72px] max-md:px-8 max-md:pt-24 max-md:justify-end max-md:pb-14">
          <div>
            <motion.div
              {...fadeUp(0)}
              style={{ fontFamily: "var(--font-josefin), sans-serif", fontSize: 10, letterSpacing: "0.65em", textTransform: "uppercase", color: "#5AADA8", marginBottom: 28 }}
            >
              Honolulu · Hawaii
            </motion.div>

            <motion.div {...fadeIn(0.12)} style={{ width: 44, height: 1, background: "#C8A96E", marginBottom: 36 }} />

            <motion.h1
              {...fadeUp(0.2)}
              style={{
                fontFamily: "var(--font-cormorant), serif",
                fontSize: "clamp(44px, 6.5vw, 88px)",
                fontWeight: 300,
                lineHeight: 1.0,
                color: "#fff",
                margin: "0 0 32px",
                letterSpacing: "0.02em",
              }}
            >
              Your creative space
              <br /><em style={{ fontStyle: "italic", color: "rgba(255,255,255,0.6)" }}>for the home.</em>
            </motion.h1>

            <motion.p
              {...fadeUp(0.38)}
              style={{
                fontFamily: "var(--font-cormorant), serif",
                fontSize: 24,
                lineHeight: 1.7,
                color: "rgba(255,255,255,0.6)",
                margin: "0 0 48px",
                maxWidth: 480,
              }}
            >
              Thousands of luxury fabrics, wallpaper, and custom home accessories — all in one Honolulu studio.
            </motion.p>

            <motion.div {...fadeUp(0.52)} style={{ display: "flex", flexDirection: "column", gap: 18, alignItems: "flex-start" }}>
              <Link
                href="/fabric"
                style={{
                  display: "inline-block",
                  border: "1px solid rgba(255,255,255,0.45)",
                  color: "#fff",
                  fontSize: 10,
                  letterSpacing: "0.58em",
                  textTransform: "uppercase",
                  padding: "16px 36px",
                  textDecoration: "none",
                }}
              >
                Explore the Library
              </Link>
              <Link
                href="/contact"
                style={{
                  fontSize: 10,
                  letterSpacing: "0.48em",
                  textTransform: "uppercase",
                  color: "rgba(255,255,255,0.45)",
                  textDecoration: "none",
                  borderBottom: "1px solid rgba(255,255,255,0.22)",
                  paddingBottom: 3,
                }}
              >
                Visit the Studio
              </Link>
            </motion.div>
          </div>

          <motion.div
            {...fadeIn(0.8)}
            style={{ position: "absolute", bottom: 36, left: 72, fontSize: 9, letterSpacing: "0.58em", textTransform: "uppercase", color: "rgba(255,255,255,0.25)" }}
            className="max-md:hidden"
          >
            Est. 2026
          </motion.div>
        </div>

      </section>

      {/* ── Info strip ── */}
      <div
        className="relative overflow-hidden"
        style={{
          background: "#2B5278",
          borderTop: "1px solid rgba(200,169,110,0.28)",
          borderBottom: "1px solid rgba(200,169,110,0.28)",
        }}
      >
        {/* Plain-weave textile texture — warp/weft crosshatch at low opacity */}
        <svg
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 h-full w-full"
          style={{ opacity: 0.05 }}
        >
          <defs>
            <pattern id="plain-weave" x="0" y="0" width="8" height="8" patternUnits="userSpaceOnUse">
              <line x1="0" y1="2" x2="8" y2="2" stroke="white" strokeWidth="1" />
              <line x1="0" y1="6" x2="8" y2="6" stroke="white" strokeWidth="1" />
              <line x1="2" y1="0" x2="2" y2="8" stroke="white" strokeWidth="1" />
              <line x1="6" y1="0" x2="6" y2="8" stroke="white" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#plain-weave)" />
        </svg>

        <div className="relative flex max-sm:grid max-sm:grid-cols-2">
          {[
            { label: "Location", val: "Hub Coworking · Honolulu" },
            { label: "Open to", val: "Designers · Homeowners · Everyone" },
            { label: "The library holds", val: "Thousands of curated luxury fabrics" },
            {
              label: "Follow",
              val: (
                <a href="https://www.instagram.com/haletextilestudio/" target="_blank" rel="noopener noreferrer" style={{ color: "rgba(255,255,255,0.78)", textDecoration: "none", display: "inline-flex", alignItems: "center", gap: 8 }}>
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none">
                    <rect x="2" y="2" width="20" height="20" rx="5" stroke="currentColor" strokeWidth="2" fill="none" />
                    <circle cx="12" cy="12" r="4.5" stroke="currentColor" strokeWidth="2" fill="none" />
                    <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
                  </svg>
                  @haletextilestudio
                </a>
              ),
            },
          ].map(({ label, val }, i) => (
            <div
              key={i}
              className="max-sm:border-r-0 max-sm:border-b max-sm:border-white/[0.06]"
              style={{
                flex: 1,
                padding: "36px 32px",
                borderRight: i < 3 ? "1px solid rgba(200,169,110,0.18)" : "none",
              }}
            >
              <div style={{ width: 18, height: 1, background: "#C8A96E", marginBottom: 12, opacity: 0.7 }} />
              <div style={{ fontSize: 9, letterSpacing: "0.52em", textTransform: "uppercase", color: "#C8A96E", marginBottom: 14 }}>
                {label}
              </div>
              <div style={{ fontFamily: "var(--font-cormorant), serif", fontSize: 23, fontStyle: "italic", fontWeight: 300, color: "rgba(255,255,255,0.85)", letterSpacing: "0.03em", lineHeight: 1.4 }}>
                {val}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── Gallery strip ── */}
      <section style={{ background: "#F8F4EC" }}>
        {/* Header */}
        <div style={{ textAlign: "center", padding: "72px 32px 52px" }}>
          <div style={{ fontSize: 9, letterSpacing: "0.55em", textTransform: "uppercase", color: "#5A5248", marginBottom: 16 }}>
            Follow Along
          </div>
          <motion.h2
            initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}
            style={{ fontFamily: "var(--font-cormorant), serif", fontSize: "clamp(30px, 4vw, 50px)", fontWeight: 300, color: "#0A2A3A", letterSpacing: "0.02em", marginBottom: 18, lineHeight: 1.1 }}
          >
            Life at the Studio
          </motion.h2>
          <a
            href="https://www.instagram.com/haletextilestudio/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ fontSize: 10, letterSpacing: "0.45em", textTransform: "uppercase", color: "#5AADA8", textDecoration: "none", display: "inline-flex", alignItems: "center", gap: 7 }}
          >
            @haletextilestudio
            <svg width="9" height="9" viewBox="0 0 12 12" fill="none" aria-hidden="true">
              <path d="M2 10L10 2M10 2H4M10 2V8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </div>

        {/* Desktop: 6-image staggered row */}
        <div className="flex items-end max-md:hidden" style={{ gap: 3 }}>
          {[
            { h: 300, src: "/section/Wanderlust-TivoliWP-skyblue-SolsburyFAB-sunshineyellow-1-300RGB.jpg", alt: "Wanderlust Tivoli wallpaper in sky blue with Solsbury fabric in sunshine yellow" },
            { h: 380, src: "/section/Poolside_colorseries_hkm_300RGB.jpg", alt: "Poolside color series fabric collection" },
            { h: 470, src: "/section/TurtleBay_colorseries_300RGB.jpg", alt: "Turtle Bay color series collection" },
            { h: 470, src: "/section/VortexFAB_colorstory_hkm_300RGB.jpg", alt: "Vortex fabric color story" },
            { h: 380, src: "/section/LacinatoWP%26FAB_mineral_300RGB.jpg", alt: "Mineral lacinate wallpaper and fabric" },
            { h: 300, src: "/section/Wanderlust-MangroveTreeFAB-green%26white-SolsburyFAB-green-RailwayStripeWP-green-300RGB.jpg", alt: "Wanderlust mangrove tree fabric in green and white" },
          ].map(({ h, src, alt }, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, delay: i * 0.07, ease: "easeOut" as Easing }}
              style={{ flex: 1, height: h, position: "relative", overflow: "hidden" }}
            >
              <Image src={src} alt={alt} fill style={{ objectFit: "cover" }} sizes="17vw" />
            </motion.div>
          ))}
        </div>

        {/* Mobile: 2-column grid */}
        <div className="md:hidden grid grid-cols-2" style={{ gap: 3 }}>
          {[
            { src: "/section/TurtleBay_colorseries_300RGB.jpg", alt: "Turtle Bay color series collection" },
            { src: "/section/Poolside_colorseries_hkm_300RGB.jpg", alt: "Poolside color series fabric collection" },
            { src: "/section/VortexFAB_colorstory_hkm_300RGB.jpg", alt: "Vortex fabric color story" },
            { src: "/section/Wanderlust-TivoliWP-skyblue-SolsburyFAB-sunshineyellow-1-300RGB.jpg", alt: "Wanderlust Tivoli wallpaper in sky blue" },
          ].map(({ src, alt }, i) => (
            <div key={i} style={{ height: 240, position: "relative", overflow: "hidden" }}>
              <Image src={src} alt={alt} fill style={{ objectFit: "cover" }} sizes="50vw" />
            </div>
          ))}
        </div>
      </section>

      {/* ── About ── */}
      <div className="grid grid-cols-2 gap-20 items-center py-20 px-10 max-w-[1200px] mx-auto max-md:grid-cols-1 max-md:gap-10 max-md:px-5 max-md:py-14">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
          <div className="section-label" style={{ color: "#D4614A" }}>What We Are</div>
          <div style={{ width: 28, height: 1.5, background: "#D4614A", marginBottom: 28 }} />
          <h2 style={{ fontSize: "clamp(32px, 4vw, 52px)", lineHeight: 1.15, color: "#0A2A3A", marginBottom: 20 }}>
            Not a store.<br />A library.
          </h2>
          <p style={{ fontFamily: "var(--font-cormorant), serif", fontSize: 18, fontStyle: "italic", lineHeight: 1.9, color: "#5A5248", marginBottom: 16 }}>
            Hale Textile Studio is Hawaii&apos;s home fabric library — a living showroom where every surface showcases what becomes possible when you choose the right fabric.
          </p>
          <p style={{ fontFamily: "var(--font-cormorant), serif", fontSize: 18, fontStyle: "italic", lineHeight: 1.9, color: "#5A5248", marginBottom: 28 }}>
            Come in. Touch everything. See what inspires you.
          </p>
          <Link href="/about" style={{ display: "inline-block", border: "1px solid #2B5278", color: "#2B5278", fontSize: 11, letterSpacing: "0.18em", textTransform: "uppercase", padding: "14px 28px", textDecoration: "none" }}>
            Our Story
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.15 }}
          style={{ background: "#D4614A", padding: "52px 44px" }}
          className="max-md:p-8"
        >
          <p style={{ fontFamily: "var(--font-cormorant), serif", fontSize: 26, fontWeight: 300, lineHeight: 1.5, color: "#fff", fontStyle: "italic", marginBottom: 20 }}>
            &ldquo;Not fast fashion for the home. The opposite — timeless, tactile, deeply personal, and unmistakably Hawaii.&rdquo;
          </p>
          <div style={{ fontSize: 8, letterSpacing: "0.45em", textTransform: "uppercase", color: "rgba(255,255,255,0.55)" }}>
            Brand North Star · Hale Textile Studio
          </div>
        </motion.div>
      </div>

      {/* ── Services ── */}
      <section style={{ background: "#0A2A3A" }} className="py-20 px-10 max-md:py-14 max-md:px-5">
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ fontSize: 10, letterSpacing: "0.55em", textTransform: "uppercase", color: "rgba(90,173,168,0.7)", textAlign: "center", marginBottom: 10 }}>What We Offer</div>
          <div style={{ width: 28, height: 1.5, background: "#5AADA8", margin: "10px auto 20px" }} />
          <h2 style={{ fontFamily: "var(--font-cormorant), serif", fontSize: "clamp(28px, 3.5vw, 48px)", color: "#fff", textAlign: "center", marginBottom: 48, letterSpacing: "0.05em" }}>
            The Complete Resource<br />
            <em style={{ color: "rgba(255,255,255,0.55)" }}>for the home.</em>
          </h2>
          <div className="grid grid-cols-3 gap-0.5 max-md:grid-cols-1">
            {services.map(({ num, title, body, href }) => (
              <Link key={num} href={href} style={{ textDecoration: "none" }}>
                <motion.div
                  whileHover={{ backgroundColor: "rgba(90,173,168,0.08)" }}
                  style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.06)", padding: "36px 28px", cursor: "pointer", height: "100%" }}
                >
                  <div style={{ fontFamily: "var(--font-cormorant), serif", fontSize: 34, fontWeight: 300, color: "rgba(90,173,168,0.25)", marginBottom: 14 }}>{num}</div>
                  <div style={{ fontFamily: "var(--font-cormorant), serif", fontSize: 21, color: "#fff", marginBottom: 10, fontWeight: 300 }}>{title}</div>
                  <div style={{ fontFamily: "var(--font-cormorant), serif", fontSize: 16, fontStyle: "italic", color: "rgba(255,255,255,0.45)", lineHeight: 1.75 }}>{body}</div>
                  <div style={{ marginTop: 20, fontSize: 10, letterSpacing: "0.38em", textTransform: "uppercase", color: "#5AADA8" }}>Learn more →</div>
                </motion.div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── Instagram ── */}
      <section style={{ background: "#F9E8E4", borderTop: "1px solid #EDE0CC" }} className="py-16 px-10 text-center max-md:py-12 max-md:px-6">
        <div className="section-label" style={{ color: "#D4614A" }}>Follow Along</div>
        <h2 style={{ fontFamily: "var(--font-cormorant), serif", fontSize: "clamp(24px, 3vw, 36px)", color: "#0A2A3A", marginBottom: 12 }}>@haletextilestudio</h2>
        <p style={{ fontFamily: "var(--font-cormorant), serif", fontSize: 18, fontStyle: "italic", color: "#5A5248", marginBottom: 28 }}>
          Fabric inspiration, behind-the-scenes, and new arrivals — all on Instagram.
        </p>
        <a
          href="https://www.instagram.com/haletextilestudio/"
          target="_blank"
          rel="noopener noreferrer"
          style={{ display: "inline-flex", alignItems: "center", gap: 10, background: "#D4614A", color: "#fff", fontSize: 10, letterSpacing: "0.38em", textTransform: "uppercase", padding: "15px 28px", textDecoration: "none" }}
        >
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none">
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
