"use client";

import { motion } from "framer-motion";
import PixelOctopus from "./PixelOctopus";

export default function Hero() {
  return (
    <section id="top" className="relative pt-32 md:pt-40 pb-20 md:pb-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="flex flex-col items-center text-center">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-[11px] md:text-xs uppercase tracking-[0.3em] mb-6"
          >
            Kensington Market &nbsp;·&nbsp; Est. Toronto
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="font-display text-[18vw] sm:text-[16vw] md:text-[12vw] lg:text-[180px] leading-[0.9] tracking-tight"
          >
            Takoyaki<span className="italic">6ix</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-8 max-w-xl text-sm md:text-base leading-relaxed"
          >
            A tiny window on Baldwin Street where octopus balls sizzle to order,
            baos come out fluffy, and karaage stays crispy. Small space.
            Big heart. Bigger flavour.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.55 }}
            className="mt-10 flex flex-col sm:flex-row items-center gap-4"
          >
            <a
              href="#menu"
              className="group inline-flex items-center justify-center w-full sm:w-auto bg-brand text-cream rounded-full px-10 py-4 text-sm uppercase tracking-[0.2em] hover:bg-brandDark transition-colors"
            >
              See the Menu
              <span className="ml-2 transition-transform group-hover:translate-x-1">→</span>
            </a>
            <a
              href="#visit"
              className="inline-flex items-center justify-center w-full sm:w-auto border border-brand rounded-full px-10 py-4 text-sm uppercase tracking-[0.2em] hover:bg-brand hover:text-cream transition-colors"
            >
              Find Us
            </a>
          </motion.div>

          {/* Logo octopus — two-frame retro sprite */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="mt-12 flex justify-center"
          >
            <PixelOctopus className="w-40 md:w-48 h-auto" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

