export default function Footer() {
  return (
    <footer className="border-t border-brand/20 py-14">
      <div className="max-w-7xl mx-auto px-6 md:px-10 flex flex-col md:flex-row md:items-end md:justify-between gap-10">
        <div>
          <p className="font-display text-4xl md:text-5xl leading-none">
            Takoyaki<span className="italic">6ix</span>
          </p>
          <p className="mt-4 text-xs uppercase tracking-[0.25em] opacity-70">
            Kensington Market, Toronto
          </p>
        </div>

        <div className="flex flex-wrap gap-x-8 gap-y-3 text-xs uppercase tracking-[0.2em]">
          <a href="#about" className="link-underline">About</a>
          <a href="#menu" className="link-underline">Menu</a>
          <a href="#reviews" className="link-underline">Reviews</a>
          <a href="#visit" className="link-underline">Visit</a>
          <a
            href="https://instagram.com/takoyaki6ix"
            target="_blank"
            rel="noreferrer"
            className="link-underline"
          >
            Instagram ↗
          </a>
        </div>

        <p className="text-xs uppercase tracking-[0.2em] opacity-70">
          © {new Date().getFullYear()} Takoyaki6ix
        </p>
      </div>
    </footer>
  );
}
