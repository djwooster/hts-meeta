import Link from "next/link";
import { HtsSymbol } from "./HtsSymbol";

const pageLinks = [
  { href: "/", label: "Home" },
  { href: "/fabric", label: "Fabric Library" },
  { href: "/wallpaper", label: "Wallpaper" },
  { href: "/accessories", label: "Accessories" },
];

const studioLinks = [
  { href: "/trade", label: "Trade Program" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
  { href: "/contact", label: "Book a Visit" },
];

const linkStyle = {
  fontSize: 11,
  letterSpacing: "0.18em",
  textTransform: "uppercase" as const,
  color: "rgba(255,255,255,0.45)",
  textDecoration: "none",
};

const colTitleStyle = {
  fontSize: 10,
  letterSpacing: "0.42em",
  textTransform: "uppercase" as const,
  color: "#5AADA8",
  marginBottom: 16,
};

export function Footer() {
  return (
    <footer style={{ background: "#0A2A3A" }} className="px-10 pt-[60px] pb-8 max-md:px-6 max-md:pt-12 max-md:pb-8">
      <div className="grid grid-cols-[2fr_1fr_1fr_1fr] gap-12 mb-12 max-w-[1200px] mx-auto max-md:grid-cols-1 max-md:gap-8">

        {/* Brand */}
        <div>
          <div className="flex items-center gap-3 mb-3.5">
            <HtsSymbol size={18} />
            <div
              style={{
                fontFamily: "var(--font-cormorant), serif",
                fontSize: 15,
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
                  fontSize: 10,
                  color: "rgba(255,255,255,0.4)",
                  letterSpacing: "0.38em",
                  marginTop: 2,
                }}
              >
                Honolulu, Hawaii
              </span>
            </div>
          </div>
          <div
            style={{
              fontFamily: "var(--font-cormorant), serif",
              fontSize: 16,
              fontStyle: "italic",
              color: "#5AADA8",
              marginBottom: 8,
            }}
          >
            Your creative space for the home.
          </div>
          <div
            style={{
              fontSize: 10,
              letterSpacing: "0.28em",
              textTransform: "uppercase",
              color: "rgba(255,255,255,0.3)",
              lineHeight: 2.2,
            }}
          >
            Hawaii&apos;s Home Fabric Library
            <br />
            Wallpaper · Custom Home Accessories
            <br />
            Hub Coworking · 1050 Queen St · Honolulu
          </div>
        </div>

        {/* Pages */}
        <div>
          <div style={colTitleStyle}>Pages</div>
          <ul className="list-none flex flex-col gap-2 p-0 m-0">
            {pageLinks.map(({ href, label }) => (
              <li key={href + label}>
                <Link href={href} style={linkStyle}>{label}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Studio */}
        <div>
          <div style={colTitleStyle}>Studio</div>
          <ul className="list-none flex flex-col gap-2 p-0 m-0">
            {studioLinks.map(({ href, label }) => (
              <li key={href + label}>
                <Link href={href} style={linkStyle}>{label}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Connect */}
        <div>
          <div style={colTitleStyle}>Connect</div>
          <ul className="list-none flex flex-col gap-2 p-0 m-0">
            <li>
              <a
                href="https://www.instagram.com/haletextilestudio/"
                target="_blank"
                rel="noopener noreferrer"
                style={{ ...linkStyle, display: "inline-flex", alignItems: "center", gap: 7 }}
              >
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
                  <rect x="2" y="2" width="20" height="20" rx="5" stroke="rgba(90,173,168,0.7)" strokeWidth="2" fill="none" />
                  <circle cx="12" cy="12" r="4.5" stroke="rgba(90,173,168,0.7)" strokeWidth="2" fill="none" />
                  <circle cx="17.5" cy="6.5" r="1" fill="rgba(90,173,168,0.7)" />
                </svg>
                @haletextilestudio
              </a>
            </li>
            <li>
              <span style={linkStyle}>haletextilestudio.com</span>
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
        style={{ borderTop: "1px solid rgba(255,255,255,0.08)", paddingTop: 24, maxWidth: 1200, margin: "0 auto" }}
        className="flex items-center justify-between max-md:flex-col max-md:text-center max-md:gap-3"
      >
        <div style={{ fontSize: 10, letterSpacing: "0.28em", textTransform: "uppercase", color: "rgba(255,255,255,0.25)" }}>
          © 2026 Hale Textile Studio LLC · Honolulu, Hawaii
        </div>
        <a
          href="https://www.instagram.com/haletextilestudio/"
          target="_blank"
          rel="noopener noreferrer"
          style={{ display: "inline-flex", alignItems: "center", gap: 8, textDecoration: "none", color: "#5AADA8", fontSize: 10, letterSpacing: "0.28em", textTransform: "uppercase" }}
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
            <rect x="2" y="2" width="20" height="20" rx="5" stroke="#5AADA8" strokeWidth="1.8" fill="none" />
            <circle cx="12" cy="12" r="4.5" stroke="#5AADA8" strokeWidth="1.8" fill="none" />
            <circle cx="17.5" cy="6.5" r="1" fill="#5AADA8" />
          </svg>
          @haletextilestudio
        </a>
      </div>
    </footer>
  );
}
