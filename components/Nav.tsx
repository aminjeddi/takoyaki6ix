"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

const links = [
  { href: "#about", label: "About" },
  { href: "#menu", label: "Menu" },
  { href: "#reviews", label: "Reviews" },
  { href: "#visit", label: "Visit" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "backdrop-blur-md bg-cream/80 border-b border-brand/10" : ""
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 md:px-10 h-20 md:h-28 flex items-center justify-between">
        <a href="#top" aria-label="Takoyaki6ix — home" className="flex items-center">
          <Image
            src="/logo.png"
            alt="Takoyaki6ix"
            width={120}
            height={120}
            priority
            className="w-14 h-14 md:w-20 md:h-20"
          />
        </a>

        <ul className="hidden md:flex items-center gap-8 text-[13px] uppercase tracking-[0.15em]">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="link-underline">
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="https://www.ubereats.com/ca/store/takoyaki6ix/qJgkKpfRUh6yiqCQGUBCyA"
          target="_blank"
          rel="noreferrer"
          className="hidden md:inline-flex items-center gap-2 text-[13px] uppercase tracking-[0.15em] border border-brand rounded-full px-5 py-2 hover:bg-brand hover:text-cream transition-colors duration-300"
        >
          Order &nbsp;→
        </a>

        <button
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
          className="md:hidden flex flex-col gap-1.5 p-2"
        >
          <span
            className={`block w-6 h-px bg-brand transition-transform ${
              open ? "translate-y-[6px] rotate-45" : ""
            }`}
          />
          <span className={`block w-6 h-px bg-brand transition-opacity ${open ? "opacity-0" : ""}`} />
          <span
            className={`block w-6 h-px bg-brand transition-transform ${
              open ? "-translate-y-[6px] -rotate-45" : ""
            }`}
          />
        </button>
      </nav>

      <motion.div
        initial={false}
        animate={{ height: open ? "auto" : 0, opacity: open ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className="md:hidden overflow-hidden bg-cream border-b border-brand/10"
      >
        <ul className="px-6 py-6 space-y-4 text-lg">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                onClick={() => setOpen(false)}
                className="block uppercase tracking-[0.15em] text-sm"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      </motion.div>
    </motion.header>
  );
}
