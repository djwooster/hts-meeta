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
];

const linkStyle = {
  fontFamily: "var(--font-cormorant), serif",
  fontSize: 18,
  fontStyle: "italic" as const,
  fontWeight: 300,
  color: "rgba(255,255,255,0.58)",
  textDecoration: "none",
  letterSpacing: "0.01em",
  lineHeight: 1,
};

const colTitleStyle = {
  fontSize: 9,
  letterSpacing: "0.48em",
  textTransform: "uppercase" as const,
  color: "#5AADA8",
  marginBottom: 24,
};

export function Footer() {
  return (
    <footer style={{ background: "#0A2A3A" }} className="px-10 pt-16 pb-8 max-md:px-6 max-md:pt-12">
      <div
        className="grid gap-12 mb-14 max-w-[1200px] mx-auto max-md:grid-cols-1 max-md:gap-10"
        style={{ gridTemplateColumns: "2fr 1fr 1fr" }}
      >
        {/* Brand */}
        <div>
          <div className="flex items-center gap-3 mb-5">
            <HtsSymbol size={20} />
            <div
              style={{
                fontFamily: "var(--font-cormorant), serif",
                fontSize: 16,
                fontWeight: 300,
                letterSpacing: "0.16em",
                textTransform: "uppercase",
                color: "#fff",
                lineHeight: 1,
              }}
            >
              Hale Textile Studio
              <span
                style={{
                  display: "block",
                  fontSize: 9,
                  color: "rgba(255,255,255,0.35)",
                  letterSpacing: "0.38em",
                  marginTop: 4,
                }}
              >
                Honolulu, Hawaii
              </span>
            </div>
          </div>

          <p
            style={{
              fontFamily: "var(--font-cormorant), serif",
              fontSize: 20,
              fontStyle: "italic",
              fontWeight: 300,
              color: "#5AADA8",
              marginBottom: 16,
              lineHeight: 1.45,
              maxWidth: 320,
            }}
          >
            Hawaii&apos;s luxury home fabric library and showroom.
          </p>
          <p
            style={{
              fontFamily: "var(--font-cormorant), serif",
              fontSize: 16,
              fontStyle: "italic",
              color: "rgba(255,255,255,0.35)",
              lineHeight: 1.7,
              maxWidth: 300,
            }}
          >
            Wallpaper · Custom Home Accessories
            <br />
            Hub Coworking · 1050 Queen St · Honolulu
          </p>
        </div>

        {/* Explore */}
        <div>
          <div style={colTitleStyle}>Explore</div>
          <ul className="list-none flex flex-col gap-4 p-0 m-0">
            {exploreLinks.map(({ href, label }) => (
              <li key={href + label}>
                <Link href={href} style={linkStyle}>{label}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Studio */}
        <div>
          <div style={colTitleStyle}>Studio</div>
          <ul className="list-none flex flex-col gap-4 p-0 m-0">
            {studioLinks.map(({ href, label }) => (
              <li key={href + label}>
                <Link href={href} style={linkStyle}>{label}</Link>
              </li>
            ))}
            <li style={{ marginTop: 8 }}>
              <a
                href="https://www.instagram.com/haletextilestudio/"
                target="_blank"
                rel="noopener noreferrer"
                style={{ ...linkStyle, display: "inline-flex", alignItems: "center", gap: 8 }}
              >
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none">
                  <rect x="2" y="2" width="20" height="20" rx="5" stroke="rgba(90,173,168,0.7)" strokeWidth="2" fill="none" />
                  <circle cx="12" cy="12" r="4.5" stroke="rgba(90,173,168,0.7)" strokeWidth="2" fill="none" />
                  <circle cx="17.5" cy="6.5" r="1" fill="rgba(90,173,168,0.7)" />
                </svg>
                @haletextilestudio
              </a>
            </li>
            <li>
              <a href="mailto:HaleTextileStudio@gmail.com" style={linkStyle}>
                HaleTextileStudio@gmail.com
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div
        style={{ borderTop: "1px solid rgba(200,169,110,0.18)", paddingTop: 24, maxWidth: 1200, margin: "0 auto" }}
        className="flex items-center justify-between max-md:flex-col max-md:text-center max-md:gap-3"
      >
        <div style={{ fontSize: 9, letterSpacing: "0.32em", textTransform: "uppercase", color: "rgba(255,255,255,0.22)" }}>
          © 2026 Hale Textile Studio LLC · Honolulu, Hawaii
        </div>
        <div style={{ fontSize: 9, letterSpacing: "0.32em", textTransform: "uppercase", color: "rgba(255,255,255,0.22)" }}>
          Hawaii&apos;s Luxury Home Fabric Library
        </div>
      </div>
    </footer>
  );
}
