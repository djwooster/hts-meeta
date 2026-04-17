"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { motion, type Easing } from "framer-motion";
import { HtsSymbol } from "./HtsSymbol";

const links = [
  { href: "/fabric", label: "Fabric Library" },
  { href: "/wallpaper", label: "Wallpaper" },
  { href: "/accessories", label: "Accessories" },
  { href: "/trade", label: "Trade Program" },
  { href: "/about", label: "About" },
];

const navItemVariants = {
  hidden: { opacity: 0, y: -8 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as Easing } },
};

export function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-10 h-16 bg-coral border-b border-black/10"
      initial={{ y: -8, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >

      {/* Logo */}
      <motion.div
        initial={{ opacity: 0, y: -8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
      >
        <Link href="/" className="flex items-center gap-3 no-underline" onClick={() => setOpen(false)}>
          <HtsSymbol size={22} />
          <span className="font-serif text-[15px] font-light tracking-[0.16em] uppercase text-white leading-none">
            Hale Textile Studio
          </span>
        </Link>
      </motion.div>

      {/* Desktop nav */}
      <motion.ul
        className="hidden md:flex items-center gap-1 list-none m-0 p-0"
        initial="hidden"
        animate="visible"
        variants={{ visible: { transition: { staggerChildren: 0.07, delayChildren: 0.25 } } }}
      >
        {links.map(({ href, label }) => {
          const active = pathname === href;
          return (
            <motion.li key={href} variants={navItemVariants}>
              <Link
                href={href}
                className={`block px-3.5 py-2 font-sans font-light text-[13px] tracking-[0.04em] no-underline transition-colors duration-200 border-b ${
                  active ? "text-white border-white/70" : "text-white/75 border-transparent hover:text-white"
                }`}
              >
                {label}
              </Link>
            </motion.li>
          );
        })}
        <motion.li className="ml-4" variants={navItemVariants}>
          <Link
            href="/contact"
            className="block px-5 py-2 font-sans font-light text-[13px] tracking-[0.04em] text-white no-underline border border-white/50 transition-colors duration-200 hover:border-white"
          >
            Visit Us
          </Link>
        </motion.li>
      </motion.ul>

      {/* Mobile hamburger */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="md:hidden bg-transparent border-0 cursor-pointer p-2"
        onClick={() => setOpen((v) => !v)}
        aria-label="Menu"
      >
        <svg width="20" height="14" fill="none">
          <line x1="0" y1="1.5" x2="20" y2="1.5" stroke="white" strokeWidth="1.5" />
          <line x1="0" y1="7" x2="20" y2="7" stroke="white" strokeWidth="1.5" />
          <line x1="0" y1="12.5" x2="20" y2="12.5" stroke="white" strokeWidth="1.5" />
        </svg>
      </motion.button>

      {/* Mobile dropdown */}
      {open && (
        <div className="md:hidden fixed top-16 left-0 right-0 z-50 flex flex-col px-6 py-4 bg-coral-dk border-t border-black/10">
          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              onClick={() => setOpen(false)}
              className="font-sans text-[13px] tracking-[0.02em] text-white/80 no-underline py-3 border-b border-white/10"
            >
              {label}
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={() => setOpen(false)}
            className="font-sans text-[13px] tracking-[0.02em] text-white no-underline py-3 mt-1"
          >
            Visit Us
          </Link>
        </div>
      )}
    </motion.nav>
  );
}
