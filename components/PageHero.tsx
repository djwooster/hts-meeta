"use client";

import { motion } from "framer-motion";

interface PageHeroProps {
  eyebrow: string;
  title: string;
  tagline?: string;
}

export function PageHero({ eyebrow, title, tagline }: PageHeroProps) {
  return (
    <section
      style={{ background: "#D4614A", position: "relative", overflow: "hidden" }}
      className="pt-20 pb-[72px] px-10 max-md:pt-14 max-md:pb-12 max-md:px-6"
    >
      <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: 2, background: "linear-gradient(90deg, #2B5278, #5AADA8, #2B5278)" }} />
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          style={{ fontFamily: "var(--font-josefin), sans-serif", fontSize: 10, letterSpacing: "0.45em", textTransform: "uppercase", color: "rgba(255,255,255,0.55)", marginBottom: 16 }}
        >
          {eyebrow}
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          style={{ fontFamily: "var(--font-cormorant), serif", fontSize: "clamp(36px, 6vw, 72px)", fontWeight: 300, color: "#fff", marginBottom: 14, letterSpacing: "0.04em" }}
        >
          {title}
        </motion.h1>
        {tagline && (
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            style={{ fontFamily: "var(--font-cormorant), serif", fontSize: 17, fontStyle: "italic", color: "rgba(255,255,255,0.75)", letterSpacing: "0.06em", maxWidth: 560 }}
          >
            {tagline}
          </motion.p>
        )}
      </div>
    </section>
  );
}
