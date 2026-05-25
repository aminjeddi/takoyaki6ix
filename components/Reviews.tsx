"use client";

import Reveal from "./Reveal";

const reviews = [
  {
    quote:
      "The takoyaki are perfectly crisp on the outside, soft and custardy inside, and full of flavor. Small place, big heart, and seriously good takoyaki.",
    name: "JePH",
    tag: "Local Guide · 220 reviews",
  },
  {
    quote:
      "Out of this world. The people working here are very friendly and welcoming. Feels like authentic street food and worth every penny.",
    name: "Mohamed T.",
    tag: "Local Guide · 446 reviews",
  },
  {
    quote:
      "God DAMN that is delicious. Chicken katsu bao 😮‍💨 I have been meaning to come here for about a year and finally stopped in. I wish I came earlier.",
    name: "Ryan P.",
    tag: "Local Guide",
  },
  {
    quote:
      "My favorite place to get takoyaki in the GTA. Haven't found a better place. Prices are very reasonable, definitely recommend.",
    name: "Lian",
    tag: "Local Guide",
  },
  {
    quote:
      "The matcha slushy hit so good after a hot day. Got some takoyaki and onigiri too, both were fire. Super friendly staff!",
    name: "Rafa",
    tag: "Local Guide",
  },
  {
    quote:
      "I love this place. Their baos are phenomenal — my go-to is the brisket, but tbh, they are all really really good. A fantastic small business.",
    name: "Sol O.",
    tag: "Local Guide",
  },
];

export default function Reviews() {
  return (
    <section id="reviews" className="py-24 md:py-36 border-t border-brand/20 bg-cream2/40">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid md:grid-cols-12 gap-10 items-end mb-14">
          <div className="md:col-span-7">
            <Reveal>
              <p className="text-[11px] uppercase tracking-[0.3em] mb-6">
                [ 03 ] &nbsp; Reviews
              </p>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="font-display text-4xl md:text-6xl leading-[1.02]">
                Five stars,
                <br />
                <em>from the curb.</em>
              </h2>
            </Reveal>
          </div>
          <div className="md:col-span-5 md:text-right">
            <Reveal delay={0.1}>
              <div className="font-display text-6xl md:text-7xl leading-none">
                ★★★★★
              </div>
              <p className="text-xs uppercase tracking-[0.25em] mt-3 opacity-80">
                Averaged across 100+ Google reviews
              </p>
            </Reveal>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {reviews.map((r, i) => (
            <Reveal key={i} delay={(i % 3) * 0.08}>
              <figure className="h-full border border-brand/25 rounded-2xl p-7 bg-cream hover:bg-brand hover:text-cream transition-colors duration-500">
                <div className="text-sm leading-none mb-4">★★★★★</div>
                <blockquote className="text-[15px] leading-relaxed">
                  &ldquo;{r.quote}&rdquo;
                </blockquote>
                <figcaption className="mt-6 pt-5 border-t border-current/20 text-xs uppercase tracking-[0.18em]">
                  <span className="font-medium">{r.name}</span>
                  <span className="opacity-70"> &nbsp;·&nbsp; {r.tag}</span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
