"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const products = [
  { name: "The Signature Tote", price: "From $125 · Limited seasonal drops", desc: "Upholstery-weight fabric\nDior book tote silhouette\nNo hardware · Surprise lining\nNumbered · Named · Collectible" },
  { name: "Custom Throw Pillows", price: "From $85 · Made to order", desc: "Choose your fabric\nCustom sizing available\nKnife edge or flange\nZipper or envelope back" },
  { name: "Table Runners", price: "From $65 · Made to order", desc: "Custom length & width\nJacquard · Linen · Tapestry\nHemmed or fringed ends\nMatching napkin sets" },
  { name: "Coverlet & Quilt", price: "From $285 · Made to order", desc: "King · Queen · Twin\nChoose face fabric\nCoordinating shams\nHeirloom quality" },
  { name: "Duvet Covers", price: "From $195 · Made to order", desc: "All standard sizes\nZip or button closure\nMatching pillow shams\nMonogram available" },
  { name: "Furoshiki Gift Bags", price: "From $35 · In studio", desc: "Japanese wrapping cloth\nReusable · Beautiful\nAny size order\nPerfect for gifting" },
  { name: "Placemats & Napkins", price: "From $45 set · Made to order", desc: "Set of 4 or 6\nMix & match fabric\nHemstitched or bound\nMonogram available" },
  { name: "Lavender Sachets", price: "From $15 · In studio", desc: "Made from library scraps\nHawaii lavender filling\nPerfect gift · Gift sets\nCustom quantities" },
];

export default function AccessoriesPage() {
  return (
    <>
      {/* Split hero */}
      <section style={{ display: "grid", gridTemplateColumns: "1fr 1fr", minHeight: "60vh" }} className="max-md:block">
        <div style={{ background: "#D4614A", padding: "120px 48px 64px" }} className="max-md:px-5 max-md:py-10">
          <div style={{ fontSize: 11, letterSpacing: "0.55em", textTransform: "uppercase", color: "rgba(255,255,255,0.6)", marginBottom: 16 }}>Made from the library</div>
          <h1 style={{ fontFamily: "var(--font-cormorant), serif", fontSize: "clamp(44px, 5vw, 64px)", fontWeight: 300, color: "#fff", marginBottom: 14, letterSpacing: "0.05em" }}>
            Custom<br />Accessories
          </h1>
          <p style={{ fontFamily: "var(--font-cormorant), serif", fontSize: 16, fontStyle: "italic", color: "rgba(255,255,255,0.75)", letterSpacing: "0.1em" }}>
            Every accessory is made from fabric in our library. Choose what speaks to you.
          </p>
        </div>
        <div style={{ background: "#0A2A3A", padding: "120px 48px 64px", display: "flex", flexDirection: "column", justifyContent: "center" }} className="max-md:px-5 max-md:py-10">
          <p style={{ fontFamily: "var(--font-cormorant), serif", fontSize: 28, fontWeight: 300, color: "#fff", lineHeight: 1.4, marginBottom: 16, fontStyle: "italic" }}>
            &ldquo;The tote bag that started everything. Upholstery-weight fabric. No hardware. One of twelve.&rdquo;
          </p>
          <div style={{ fontSize: 11, letterSpacing: "0.42em", textTransform: "uppercase", color: "#5AADA8" }}>
            The Signature Tote · Drop No. 01
          </div>
        </div>
      </section>

      {/* Products grid */}
      <section style={{ padding: "64px 40px", maxWidth: 1200, margin: "0 auto" }} className="max-md:px-5">
        <div className="section-label" style={{ color: "#D4614A" }}>The Collection</div>
        <div style={{ width: 28, height: 1.5, background: "#D4614A", marginBottom: 28 }} />
        <h2 style={{ fontFamily: "var(--font-cormorant), serif", fontSize: 36, color: "#0A2A3A", marginBottom: 8 }}>Made from the library.</h2>
        <p style={{ fontFamily: "var(--font-cormorant), serif", fontSize: 18, fontStyle: "italic", color: "#5A5248", marginBottom: 40 }}>
          Everything is made from fabric in our library. You choose the fabric — we make it beautiful.
        </p>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 2 }} className="max-md:grid-cols-2 max-sm:grid-cols-1">
          {products.map(({ name, price, desc }) => (
            <motion.div key={name} whileHover={{ backgroundColor: "#F9E8E4" }} style={{ background: "#F8F4EC", border: "1px solid #DDD8CC", padding: "32px 28px" }}>
              <div style={{ fontFamily: "var(--font-cormorant), serif", fontSize: 20, color: "#0A2A3A", marginBottom: 6 }}>{name}</div>
              <div style={{ fontSize: 10, letterSpacing: "0.3em", textTransform: "uppercase", color: "#D4614A", marginBottom: 14 }}>{price}</div>
              <div style={{ fontSize: 11, letterSpacing: "0.28em", textTransform: "uppercase", color: "#5A5248", lineHeight: 2.4, whiteSpace: "pre-line" }}>{desc}</div>
            </motion.div>
          ))}
          {/* Custom order card */}
          <motion.div style={{ background: "#D4614A", padding: "32px 28px" }}>
            <div style={{ fontFamily: "var(--font-cormorant), serif", fontSize: 20, color: "#fff", marginBottom: 6 }}>Custom Order</div>
            <div style={{ fontSize: 10, letterSpacing: "0.3em", textTransform: "uppercase", color: "rgba(255,255,255,0.75)", marginBottom: 14 }}>Price on request</div>
            <div style={{ fontSize: 11, letterSpacing: "0.28em", textTransform: "uppercase", color: "rgba(255,255,255,0.6)", lineHeight: 2.4 }}>
              Don&apos;t see what you need?<br />We make almost anything<br />from our fabric library<br />Visit the studio to discuss
            </div>
          </motion.div>
        </div>

        <div style={{ marginTop: 48, textAlign: "center" }}>
          <Link href="/contact" style={{ display: "inline-block", background: "#D4614A", color: "#fff", fontSize: 11, letterSpacing: "0.45em", textTransform: "uppercase", padding: "16px 32px", textDecoration: "none" }}>
            Discuss a Custom Order
          </Link>
        </div>
      </section>
    </>
  );
}
