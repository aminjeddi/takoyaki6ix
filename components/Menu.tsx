"use client";

import Reveal from "./Reveal";

type Item = { name: string; desc: string; price?: string };

const sections: { title: string; items: Item[] }[] = [
  {
    title: "Takoyaki & Shrimp Balls",
    items: [
      {
        name: "Takoyaki or Crispy Garlic Shrimp Ball — 5pc",
        desc: "Mix & match. Crisp outside, custardy inside. Topped with sauce, kewpie, bonito.",
        price: "8",
      },
      {
        name: "Takoyaki or Crispy Garlic Shrimp Ball — 10pc",
        desc: "The full set. Pick all takoyaki, all shrimp, or split it however you like.",
        price: "15",
      },
    ],
  },
  {
    title: "Bao",
    items: [
      {
        name: "Asian BBQ Beef Brisket",
        desc: "House-braised brisket, ginger-soy glaze, crispy shallot.",
        price: "9.75",
      },
      {
        name: "Wafu Chicken Katsu",
        desc: "Crisp chicken cutlet, spicy mayo, cabbage, takoyaki sauce, scallion.",
        price: "9.75",
      },
      {
        name: "Miso Glazed Smoked Pork Belly",
        desc: "Slow-smoked pork belly, miso glaze, pickled cucumber.",
        price: "9.75",
      },
      {
        name: "Sweet Chili Crispy Fish",
        desc: "Panko-crusted fish, sweet chili, fresh herbs.",
        price: "9.75",
      },
    ],
  },
  {
    title: "Bigger Plates",
    items: [
      {
        name: "Karaage — 4pc",
        desc: "Marinated fried chicken, double-fried for the crunch. Served with house dip.",
        price: "9.75",
      },
      {
        name: "Karaage Bento",
        desc: "Karaage with rice and side salad.",
        price: "14.50",
      },
      {
        name: "Japanese Chicken Cutlet Curry",
        desc: "Crisp katsu over rice, ladled with rich Japanese curry.",
        price: "16",
      },
      {
        name: "Smoked Pork Belly Yakisoba",
        desc: "New. Smoked pork belly tossed through fried noodles.",
        price: "15",
      },
    ],
  },
  {
    title: "Onigiri",
    items: [
      { name: "Tuna Mayo", desc: "Kewpie tuna, toasted nori.", price: "3.85" },
      { name: "Beef", desc: "Seasoned beef, sesame.", price: "3.85" },
      {
        name: "Mustard Greens / Takana",
        desc: "Pickled greens, sesame. Vegan.",
        price: "3.85",
      },
      { name: "Salmon", desc: "New. Flaked salmon, kewpie, nori.", price: "4.50" },
    ],
  },
  {
    title: "Drinks",
    items: [
      {
        name: "Pop",
        desc: "Coke, Diet Coke, Ginger Ale or Iced Tea.",
      },
      { name: "Bottled Water", desc: "", price: "2" },
      {
        name: "Cold Brew Barley Tea (Mugicha)",
        desc: "Roasted barley. Smooth, lightly nutty, caffeine-free.",
        price: "3.50",
      },
    ],
  },
];

export default function Menu() {
  return (
    <section id="menu" className="py-24 md:py-36 border-t border-brand/20">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <Reveal>
          <p className="text-[11px] uppercase tracking-[0.3em] mb-6">
            [ 02 ] &nbsp; Menu
          </p>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="font-display text-4xl md:text-6xl leading-[1.02] max-w-2xl">
            Made the moment <em>you</em> order.
          </h2>
        </Reveal>

        <div className="mt-16 md:mt-20 grid md:grid-cols-2 gap-12 md:gap-x-20 md:gap-y-16">
          {sections.map((sec, i) => (
            <Reveal key={sec.title} delay={i * 0.05}>
              <div>
                <h3 className="font-display text-2xl md:text-3xl mb-6 pb-3 border-b border-brand/30">
                  {sec.title}
                </h3>
                <ul className="space-y-6">
                  {sec.items.map((it) => (
                    <li key={it.name} className="group">
                      <div className="flex items-baseline gap-3">
                        <span className="text-sm md:text-base font-medium">
                          {it.name}
                        </span>
                        <span className="flex-1 border-b border-dashed border-brand/30 translate-y-[-3px]" />
                        {it.price && (
                          <span className="text-sm md:text-base tabular-nums">
                            ${it.price}
                          </span>
                        )}
                      </div>
                      <p className="mt-1.5 text-[13px] opacity-80 leading-relaxed">
                        {it.desc}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1}>
          <p className="mt-16 text-xs uppercase tracking-[0.25em] opacity-70">
            Menu rotates with seasons &amp; market finds.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
