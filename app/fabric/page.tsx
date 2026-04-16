"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { PageHero } from "@/components/PageHero";

const categories = [
  { name: "Upholstery", desc: "Velvets · Boucle\nChenille · Leather\nPerformance fabrics" },
  { name: "Drapery", desc: "Linen · Silk blends\nSheer · Blackout\nPrinted panels" },
  { name: "Jacquard & Brocade", desc: "Woven patterns\nTapestry · Damask\nEmbroidered textiles" },
  { name: "Natural Fibers", desc: "Linen · Cotton\nWool · Silk · Hemp\nSustainable options" },
  { name: "Outdoor & Performance", desc: "UV resistant · Waterproof\nHawaii climate ready\nIndoor/outdoor use" },
  { name: "Tropical Prints", desc: "Hawaiian motifs\nBotanical prints\nIsland-inspired patterns" },
  { name: "Bedding & Linens", desc: "Duvet cover fabric\nCoverlets · Shams\nPillow ticking" },
  { name: "Trims & Notions", desc: "Fringe · Tape · Cord\nTassels · Buttons\nHardware" },
];

const stats = [
  { num: "1,000+", label: "Fabric samples in library", bg: "#D4614A", numColor: "#fff" },
  { num: "50+", label: "Luxury fabric lines", bg: "#2B5278", numColor: "#5AADA8" },
  { num: "By Yard", label: "All fabrics available to order", bg: "#0A2A3A", numColor: "#fff" },
];

export default function FabricPage() {
  return (
    <>
      <PageHero
        eyebrow="Hawaii's Home Fabric Library"
        title="The Fabric Library"
        tagline="Thousands of curated luxury textiles. Available by the yard. Available to touch."
      />

      {/* Intro */}
      <div
        style={{ padding: "64px 40px", maxWidth: 1200, margin: "0 auto", display: "grid", gridTemplateColumns: "2fr 1fr", gap: 64, alignItems: "start" }}
        className="max-md:block max-md:px-5"
      >
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
          <div className="section-label" style={{ color: "#D4614A" }}>The Collection</div>
          <div style={{ width: 28, height: 1.5, background: "#D4614A", marginBottom: 28 }} />
          <h2 style={{ fontFamily: "var(--font-cormorant), serif", fontSize: 36, color: "#0A2A3A", marginBottom: 16 }}>
            A library of the finest textiles.
          </h2>
          <p style={{ fontFamily: "var(--font-cormorant), serif", fontSize: 16, lineHeight: 1.9, color: "#5A5248", fontStyle: "italic", marginBottom: 12 }}>
            Our fabric library is the most comprehensive collection of luxury home textiles in Hawaii. Every swatch has been hand-selected for quality, beauty, and longevity — the opposite of fast fashion for the home.
          </p>
          <p style={{ fontFamily: "var(--font-cormorant), serif", fontSize: 16, lineHeight: 1.9, color: "#5A5248", fontStyle: "italic", marginBottom: 12 }}>
            Come in and touch everything. That is the whole point. Fabric is tactile. You cannot choose it from a screen.
          </p>
          <p style={{ fontFamily: "var(--font-cormorant), serif", fontSize: 16, lineHeight: 1.9, color: "#5A5248", fontStyle: "italic" }}>
            Interior designers use our studio as their home base. Homeowners discover fabrics they never knew existed. Everyone leaves inspired.
          </p>
        </motion.div>

        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          {stats.map(({ num, label, bg, numColor }) => (
            <motion.div key={label} initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} style={{ background: bg, padding: "28px 24px" }}>
              <div style={{ fontFamily: "var(--font-cormorant), serif", fontSize: 48, fontWeight: 300, color: numColor, lineHeight: 1, marginBottom: 6 }}>{num}</div>
              <div style={{ fontSize: 7.5, letterSpacing: "0.42em", textTransform: "uppercase", color: "rgba(255,255,255,0.65)" }}>{label}</div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Categories */}
      <section style={{ background: "#EDE0CC", padding: "64px 40px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div className="section-label" style={{ color: "#D4614A" }}>Categories</div>
          <div style={{ width: 28, height: 1.5, background: "#D4614A", marginBottom: 28 }} />
          <h2 style={{ fontFamily: "var(--font-cormorant), serif", fontSize: 36, color: "#0A2A3A" }}>What&apos;s in the library.</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 12, marginTop: 36 }} className="max-md:grid-cols-2 max-sm:grid-cols-1">
            {categories.map(({ name, desc }) => (
              <motion.div key={name} whileHover={{ borderColor: "#D4614A", y: -2 }} style={{ background: "#F8F4EC", border: "1px solid #DDD8CC", padding: "32px 20px", textAlign: "center", cursor: "pointer" }}>
                <div style={{ fontFamily: "var(--font-cormorant), serif", fontSize: 17, color: "#0A2A3A", marginBottom: 6 }}>{name}</div>
                <div style={{ fontSize: 10, letterSpacing: "0.3em", textTransform: "uppercase", color: "#5A5248", lineHeight: 2.2, whiteSpace: "pre-line" }}>{desc}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: "#2B5278", padding: "64px 40px", textAlign: "center" }}>
        <h2 style={{ fontFamily: "var(--font-cormorant), serif", fontSize: 36, color: "#fff", marginBottom: 12 }}>Come touch the library.</h2>
        <p style={{ fontFamily: "var(--font-cormorant), serif", fontSize: 15, fontStyle: "italic", color: "rgba(255,255,255,0.65)", marginBottom: 28 }}>
          Fabric cannot be chosen from a screen. Visit our studio at Hub Coworking and run your hands through thousands of possibilities.
        </p>
        <Link href="/contact" style={{ display: "inline-block", background: "#fff", color: "#2B5278", fontSize: 11, letterSpacing: "0.45em", textTransform: "uppercase", padding: "16px 32px", textDecoration: "none" }}>
          Book a Studio Visit
        </Link>
      </section>
    </>
  );
}
