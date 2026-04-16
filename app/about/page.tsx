"use client";

import { motion } from "framer-motion";
import { PageHero } from "@/components/PageHero";

const values = [
  { title: "Fabric is tactile", body: "You cannot choose fabric from a screen. The weight, the drape, the hand — these things can only be experienced in person. That is why we exist." },
  { title: "Classic over trendy", body: "We curate for longevity, not the season. The fabrics we carry are the ones that will still be beautiful in twenty years — and more beautiful for the time." },
  { title: "Open to everyone", body: "Designers and homeowners. Experienced and first-time. Everyone who walks through our door deserves the same quality of service and access." },
  { title: "Unmistakably Hawaii", body: "The colors of the ocean, the mountain, the rainforest, the reef. Our curation reflects where we are — not a mainland idea of what Hawaii should look like." },
  { title: "The living showroom", body: "Nothing in our studio is decorative for decoration's sake. Every surface, every upholstered piece, every drapery panel is available to you. It is all real." },
  { title: "Quality over quantity", body: "We carry fewer things and know them deeply. Every fabric in our library has been chosen by hand, for a reason. We can tell you what it is." },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Story"
        title={"About Hale\nTextile Studio"}
        tagline="Born in Hawaii. Built for the art of living well at home."
      />

      {/* Story */}
      <div style={{ padding: "72px 40px", maxWidth: 1200, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "start" }} className="max-md:block max-md:px-5 max-md:space-y-8">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
          <div className="section-label" style={{ color: "#D4614A" }}>The Story</div>
          <div style={{ width: 28, height: 1.5, background: "#D4614A", marginBottom: 28 }} />
          <h2 style={{ fontFamily: "var(--font-cormorant), serif", fontSize: 36, color: "#0A2A3A", marginBottom: 20 }}>
            A fabric library<br />for Hawaii.
          </h2>
          {[
            "Hale Textile Studio was built on a simple belief — that the people of Hawaii deserve a home fabric library that reflects where they live. Not a catalog of generic choices imported from the mainland. A curated, tactile, deeply local resource.",
            "The word Hale means home in Hawaiian. Everything we do is grounded in that idea — your home, your creative space, your relationship to the place you live.",
            "Our studio at Hub Coworking in Honolulu is a fully realized living showroom where nothing is decorative for decoration's sake. Every surface showcases fabric that is available. Every piece of furniture is upholstered in something you can order.",
            "Come in. Touch everything. That is the whole point.",
          ].map((p, i) => (
            <p key={i} style={{ fontFamily: "var(--font-cormorant), serif", fontSize: 17, fontStyle: "italic", color: "#5A5248", lineHeight: 1.9, marginBottom: 16 }}>{p}</p>
          ))}
        </motion.div>

        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} style={{ background: "#D4614A", padding: "36px 32px" }}>
            <p style={{ fontFamily: "var(--font-cormorant), serif", fontSize: 22, fontWeight: 300, color: "#fff", lineHeight: 1.5, fontStyle: "italic", marginBottom: 12 }}>
              &ldquo;Not fast fashion for the home. The opposite — timeless, tactile, deeply personal, and unmistakably Hawaii.&rdquo;
            </p>
            <div style={{ fontSize: 11, letterSpacing: "0.42em", textTransform: "uppercase", color: "rgba(255,255,255,0.55)" }}>Brand North Star</div>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }} style={{ background: "#EDE0CC", padding: "32px 28px", border: "1px solid #D4C8B4" }}>
            <div className="section-label" style={{ color: "#D4614A", marginBottom: 12 }}>The Space</div>
            <div style={{ fontFamily: "var(--font-cormorant), serif", fontSize: 17, fontStyle: "italic", color: "#5A5248", lineHeight: 1.9 }}>
              Hub Coworking<br />
              1050 Queen Street · Suite 100<br />
              Honolulu, Hawaii 96814
            </div>
          </motion.div>
        </div>
      </div>

      {/* Values */}
      <section style={{ background: "#0A2A3A", padding: "72px 40px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ fontSize: 10, letterSpacing: "0.55em", textTransform: "uppercase", color: "rgba(90,173,168,0.7)", textAlign: "center", marginBottom: 10 }}>What We Believe</div>
          <div style={{ width: 28, height: 1.5, background: "#5AADA8", margin: "10px auto 24px" }} />
          <h2 style={{ fontFamily: "var(--font-cormorant), serif", fontSize: 36, color: "#fff", textAlign: "center", marginBottom: 8 }}>
            Classic over trendy.
            <br />
            <em style={{ color: "rgba(255,255,255,0.5)" }}>Grounded over aspirational.</em>
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 2, marginTop: 40 }} className="max-md:grid-cols-1">
            {values.map(({ title, body }) => (
              <motion.div key={title} whileHover={{ backgroundColor: "rgba(90,173,168,0.08)" }} style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.06)", padding: "36px 28px" }}>
                <div style={{ fontFamily: "var(--font-cormorant), serif", fontSize: 20, color: "#fff", marginBottom: 12 }}>{title}</div>
                <div style={{ fontFamily: "var(--font-cormorant), serif", fontSize: 15, fontStyle: "italic", color: "rgba(255,255,255,0.55)", lineHeight: 1.8 }}>{body}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
