export default function Marquee() {
  const items = [
    "Takoyaki",
    "★",
    "Bao Buns",
    "★",
    "Onigiri",
    "★",
    "Karaage",
    "★",
    "Matcha Slushy",
    "★",
    "Garlic Shrimp Balls",
    "★",
  ];
  const row = [...items, ...items, ...items, ...items];
  return (
    <section className="border-y border-brand/20 bg-cream2 py-5 overflow-hidden">
      <div className="flex marquee-track whitespace-nowrap font-display text-3xl md:text-5xl">
        {row.map((item, i) => (
          <span key={i} className="mx-6">
            {item}
          </span>
        ))}
      </div>
    </section>
  );
}
