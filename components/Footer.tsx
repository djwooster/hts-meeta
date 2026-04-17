import Link from "next/link";
import { HtsSymbol } from "./HtsSymbol";

const exploreLinks = [
  { href: "/fabric", label: "Fabric Library" },
  { href: "/wallpaper", label: "Wallpaper" },
  { href: "/accessories", label: "Accessories" },
  { href: "/trade", label: "Trade Program" },
];

const studioLinks = [
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
  { href: "/contact", label: "Book a Visit" },
  { href: "https://www.instagram.com/haletextilestudio/", label: "@haletextilestudio" },
];

export function Footer() {
  return (
    <footer style={{ background: "#0A2A3A" }} className="px-10 pt-20 pb-8 max-md:px-6 max-md:pt-14">
      <div
        className="grid gap-16 mb-16 max-w-[1200px] mx-auto max-md:grid-cols-1 max-md:gap-10"
        style={{ gridTemplateColumns: "1.6fr 1fr 1fr" }}
      >
        {/* Brand */}
        <div>
          <div style={{ fontFamily: "var(--font-geist-sans), sans-serif", fontSize: 9, letterSpacing: "0.42em", textTransform: "uppercase", color: "#5AADA8", marginBottom: 10 }}>
            Hale Textile Studio
          </div>
          <div
            style={{
              fontFamily: "var(--font-cormorant), serif",
              fontSize: 32,
              fontWeight: 700,
              color: "#fff",
              letterSpacing: "0",
              lineHeight: 1.1,
              marginBottom: 16,
            }}
          >
            Hawaii&apos;s Fabric<br />Library.
          </div>
          <p
            style={{
              fontFamily: "var(--font-geist-sans), sans-serif",
              fontSize: 14,
              fontWeight: 300,
              color: "rgba(255,255,255,0.5)",
              lineHeight: 1.75,
              maxWidth: 280,
              margin: "0 0 20px",
            }}
          >
            Luxury fabrics, wallpaper, and custom home accessories. Open to designers and homeowners alike.
          </p>
          <div style={{ fontFamily: "var(--font-geist-sans), sans-serif", fontSize: 12, color: "rgba(255,255,255,0.3)", lineHeight: 1.8 }}>
            Hub Coworking · 1050 Queen St · Honolulu
          </div>
        </div>

        {/* Explore */}
        <div>
          <div style={{ fontFamily: "var(--font-geist-sans), sans-serif", fontSize: 9, letterSpacing: "0.42em", textTransform: "uppercase", color: "#5AADA8", marginBottom: 20 }}>
            Explore
          </div>
          <ul className="list-none flex flex-col p-0 m-0" style={{ gap: 18 }}>
            {exploreLinks.map(({ href, label }) => (
              <li key={href + label}>
                <Link
                  href={href}
                  style={{ fontFamily: "var(--font-geist-sans), sans-serif", fontSize: 14, fontWeight: 400, color: "rgba(255,255,255,0.6)", textDecoration: "none" }}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Studio */}
        <div>
          <div style={{ fontFamily: "var(--font-geist-sans), sans-serif", fontSize: 9, letterSpacing: "0.42em", textTransform: "uppercase", color: "#5AADA8", marginBottom: 20 }}>
            Studio
          </div>
          <ul className="list-none flex flex-col p-0 m-0" style={{ gap: 18 }}>
            {studioLinks.map(({ href, label }) => (
              <li key={href + label}>
                <Link
                  href={href}
                  style={{ fontFamily: "var(--font-geist-sans), sans-serif", fontSize: 14, fontWeight: 400, color: "rgba(255,255,255,0.6)", textDecoration: "none" }}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div
        style={{ borderTop: "1px solid rgba(255,255,255,0.1)", paddingTop: 20, maxWidth: 1200, margin: "0 auto" }}
        className="flex items-center justify-between max-md:flex-col max-md:text-center max-md:gap-2"
      >
        <div style={{ fontFamily: "var(--font-geist-sans), sans-serif", fontSize: 12, color: "rgba(255,255,255,0.28)", letterSpacing: "0.02em" }}>
          © 2026 Hale Textile Studio LLC. All rights reserved.
        </div>
        <div style={{ fontFamily: "var(--font-geist-sans), sans-serif", fontSize: 12, color: "rgba(255,255,255,0.28)", letterSpacing: "0.02em" }}>
          Hawaii&apos;s luxury home fabric library.
        </div>
      </div>
    </footer>
  );
}
