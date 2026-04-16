"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { PageHero } from "@/components/PageHero";

const types = [
  { name: "Grasscloth & Natural", desc: "Woven natural fibers\nJute · Seagrass · Sisal\nPerfect for Hawaii climate\nTextural · Tactile · Timeless" },
  { name: "Printed & Patterned", desc: "Botanical · Geometric\nTraditional · Contemporary\nExclusive designer lines\nCustom colorways available" },
  { name: "Textured & Embossed", desc: "Linen · Silk · Faux finish\nVenetian plaster effect\nDimensional surface\nLuxurious hand feel" },
  { name: "Mural & Scenic", desc: "Floor-to-ceiling panoramas\nCustom sizing available\nTropical · Botanical\nOcean & landscape scenes" },
  { name: "Vinyl & Performance", desc: "Humidity resistant\nCleanable surfaces\nCommercial grade\nHawaii climate optimized" },
  { name: "Fabric-Backed", desc: "Upholstered wall panels\nFabric on walls\nAcoustic properties\nUltimate luxury finish" },
];

export default function WallpaperPage() {
  return (
    <>
      <PageHero
        eyebrow="Hale Textile Studio"
        title="Wallpaper"
        tagline="The most transformative thing you can do to a room. We carry the most beautiful collections in Hawaii."
      />

      <div style={{ padding: "64px 40px", maxWidth: 1200, margin: "0 auto" }} className="max-md:px-5">
        {/* Intro */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, marginBottom: 52, alignItems: "center" }} className="max-md:block max-md:space-y-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
            <div className="section-label" style={{ color: "#D4614A" }}>The Collection</div>
            <div style={{ width: 28, height: 1.5, background: "#D4614A", marginBottom: 28 }} />
            <h2 style={{ fontFamily: "var(--font-cormorant), serif", fontSize: 42, color: "#0A2A3A", marginBottom: 16 }}>Wallpaper changes everything.</h2>
            <p style={{ fontFamily: "var(--font-cormorant), serif", fontSize: 16, fontStyle: "italic", color: "#5A5248", lineHeight: 1.9, marginBottom: 16 }}>
              A single wall of the right wallpaper transforms a room completely. It is the highest-impact decision you can make in interior design — and the most personal.
            </p>
            <p style={{ fontFamily: "var(--font-cormorant), serif", fontSize: 16, fontStyle: "italic", color: "#5A5248", lineHeight: 1.9, marginBottom: 24 }}>
              Our studio has every wallpaper sample on display in context. You can see how it reads in the light. You can feel the texture. You can imagine it in your home.
            </p>
            <Link href="/contact" style={{ display: "inline-block", background: "#D4614A", color: "#fff", fontSize: 11, letterSpacing: "0.45em", textTransform: "uppercase", padding: "16px 32px", textDecoration: "none" }}>
              Book a Wallpaper Consultation
            </Link>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.15 }} style={{ background: "#5AADA8", padding: "36px 32px" }}>
            <p style={{ fontFamily: "var(--font-cormorant), serif", fontSize: 20, fontWeight: 300, color: "#0A2A3A", lineHeight: 1.6, fontStyle: "italic" }}>
              &ldquo;The right wallpaper is not decoration. It is architecture. It defines the entire feeling of a room before a single piece of furniture enters.&rdquo;
            </p>
          </motion.div>
        </div>

        {/* Types */}
        <div className="section-label" style={{ color: "#D4614A" }}>What We Carry</div>
        <div style={{ width: 28, height: 1.5, background: "#D4614A", marginBottom: 28 }} />
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 12, marginTop: 48 }} className="max-md:grid-cols-2 max-sm:grid-cols-1">
          {types.map(({ name, desc }) => (
            <motion.div key={name} whileHover={{ borderTopColor: "#E8907A" }} style={{ background: "#F8F4EC", border: "1px solid #DDD8CC", borderTop: "3px solid #D4614A", padding: "28px 24px" }}>
              <div style={{ fontFamily: "var(--font-cormorant), serif", fontSize: 20, color: "#0A2A3A", marginBottom: 8 }}>{name}</div>
              <div style={{ fontSize: 11, letterSpacing: "0.3em", textTransform: "uppercase", color: "#5A5248", lineHeight: 2.4, whiteSpace: "pre-line" }}>{desc}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
}
