"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { HtsSymbol } from "./HtsSymbol";

const links = [
  { href: "/", label: "Home", id: "home" },
  { href: "/fabric", label: "Fabric Library" },
  { href: "/wallpaper", label: "Wallpaper" },
  { href: "/accessories", label: "Accessories" },
  { href: "/trade", label: "Trade Program" },
  { href: "/about", label: "About" },
];

export function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-10 h-16 border-b-2"
      style={{ background: "#D4614A", borderColor: "#B84D38" }}
    >
      <Link
        href="/"
        className="flex items-center gap-3.5 no-underline"
        onClick={() => setOpen(false)}
      >
        <HtsSymbol size={24} />
        <div
          style={{
            fontFamily: "var(--font-cormorant), serif",
            fontSize: 15,
            fontWeight: 300,
            letterSpacing: "0.28em",
            textTransform: "uppercase",
            color: "#fff",
            lineHeight: 1,
          }}
        >
          Hale Textile Studio
          <span
            style={{
              display: "block",
              fontSize: 11,
              color: "rgba(255,255,255,0.55)",
              letterSpacing: "0.5em",
              marginTop: 2,
            }}
          >
            Hawaii&apos;s Home Fabric Library
          </span>
        </div>
      </Link>

      {/* Desktop nav */}
      <ul className="hidden md:flex items-center gap-0.5 list-none">
        {links.map(({ href, label }) => {
          const active = pathname === href;
          return (
            <li key={href}>
              <Link
                href={href}
                style={{
                  fontSize: 11,
                  letterSpacing: "0.45em",
                  textTransform: "uppercase",
                  color: active ? "#fff" : "rgba(255,255,255,0.75)",
                  textDecoration: "none",
                  padding: "8px 14px",
                  borderBottom: active
                    ? "1.5px solid #fff"
                    : "1.5px solid transparent",
                  transition: "color 0.2s",
                  display: "block",
                }}
              >
                {label}
              </Link>
            </li>
          );
        })}
        <li>
          <Link
            href="/contact"
            style={{
              background: "#fff",
              color: "#D4614A",
              fontSize: 11,
              fontWeight: 400,
              letterSpacing: "0.35em",
              textTransform: "uppercase",
              padding: "8px 18px",
              textDecoration: "none",
              transition: "background 0.2s",
              display: "block",
            }}
          >
            Visit Us
          </Link>
        </li>
      </ul>

      {/* Mobile hamburger */}
      <button
        className="md:hidden bg-transparent border-0 cursor-pointer p-2"
        onClick={() => setOpen((v) => !v)}
        aria-label="Menu"
      >
        <svg width="22" height="16" fill="none">
          <line x1="0" y1="2" x2="22" y2="2" stroke="white" strokeWidth="2" />
          <line x1="0" y1="8" x2="22" y2="8" stroke="white" strokeWidth="2" />
          <line x1="0" y1="14" x2="22" y2="14" stroke="white" strokeWidth="2" />
        </svg>
      </button>

      {/* Mobile dropdown */}
      {open && (
        <div
          className="md:hidden fixed top-14 left-0 right-0 z-50 flex flex-col gap-1 p-4"
          style={{ background: "#B84D38" }}
        >
          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              onClick={() => setOpen(false)}
              style={{
                fontSize: 11,
                letterSpacing: "0.45em",
                textTransform: "uppercase",
                color: "rgba(255,255,255,0.85)",
                textDecoration: "none",
                padding: "10px 8px",
              }}
            >
              {label}
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={() => setOpen(false)}
            style={{
              fontSize: 11,
              letterSpacing: "0.45em",
              textTransform: "uppercase",
              color: "#fff",
              textDecoration: "none",
              padding: "10px 8px",
            }}
          >
            Visit Us
          </Link>
        </div>
      )}
    </nav>
  );
}
