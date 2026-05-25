"use client";

import Reveal from "./Reveal";

export default function About() {
  return (
    <section id="about" className="py-24 md:py-36">
      <div className="max-w-6xl mx-auto px-6 md:px-10 grid md:grid-cols-12 gap-10 md:gap-16 items-start">
        <div className="md:col-span-5">
          <Reveal>
            <p className="text-[11px] uppercase tracking-[0.3em] mb-6">
              [ 01 ] &nbsp; About
            </p>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="font-display text-4xl md:text-6xl leading-[1.02]">
              Small space.
              <br />
              <em>Big</em> heart.
            </h2>
          </Reveal>
        </div>

        <div className="md:col-span-7 md:pt-4">
          <Reveal delay={0.1}>
            <p className="text-base md:text-lg leading-relaxed">
              Tucked into a door + a window on Baldwin Street, Takoyaki6ix is
              the kind of place you could blink and miss &mdash; if your nose
              didn&apos;t catch the bonito and brown butter first. We griddle our
              takoyaki to order: crisp outside, custardy inside, and never
              reheated.
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-6 text-base md:text-lg leading-relaxed">
              Beside the octopus balls, we hand-fold pillowy bao buns, fry
              karaage to crackle, press onigiri to order, and shave matcha
              slushies for the hot afternoons. Four seats inside, two outside
              when summer is kind. Mostly, you&apos;ll be eating on the curb &mdash;
              and you&apos;ll be glad you did.
            </p>
          </Reveal>

          <div className="mt-12 grid grid-cols-3 gap-6 border-t border-brand/20 pt-8">
            {[
              { k: "5.0", v: "Avg. rating" },
              { k: "~5 min", v: "Made to order" },
              { k: "$$", v: "Reasonable" },
            ].map((s, i) => (
              <Reveal key={s.k} delay={0.1 * i}>
                <div>
                  <div className="font-display text-3xl md:text-4xl">{s.k}</div>
                  <div className="text-xs uppercase tracking-[0.2em] mt-2 opacity-80">
                    {s.v}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
