"use client";

import Reveal from "./Reveal";

export default function Visit() {
  return (
    <section id="visit" className="py-24 md:py-36 border-t border-brand/20">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <Reveal>
          <p className="text-[11px] uppercase tracking-[0.3em] mb-6">
            [ 04 ] &nbsp; Visit
          </p>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="font-display text-4xl md:text-6xl leading-[1.02] max-w-2xl mb-16">
            Come find the <em>tiny window</em> on Baldwin.
          </h2>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-10 md:gap-16">
          <Reveal delay={0.1}>
            <div className="space-y-8">
              <div>
                <h3 className="text-xs uppercase tracking-[0.25em] mb-2 opacity-70">
                  Address
                </h3>
                <p className="font-display text-2xl leading-tight">
                  Baldwin Street
                  <br />
                  Kensington Market, Toronto
                </p>
                <a
                  href="https://maps.google.com/?q=Takoyaki6ix+Kensington+Market+Toronto"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-block mt-3 text-sm link-underline"
                >
                  Open in Google Maps &nbsp;↗
                </a>
              </div>

              <div>
                <h3 className="text-xs uppercase tracking-[0.25em] mb-2 opacity-70">
                  Hours
                </h3>
                <ul className="space-y-1.5 text-sm">
                  <li className="flex justify-between max-w-xs">
                    <span>Monday</span>
                    <span className="tabular-nums">12 &ndash; 6 pm</span>
                  </li>
                  <li className="flex justify-between max-w-xs opacity-60">
                    <span>Tue &ndash; Wed</span>
                    <span>Closed</span>
                  </li>
                  <li className="flex justify-between max-w-xs">
                    <span>Thursday</span>
                    <span className="tabular-nums">11:30 am &ndash; 6:30 pm</span>
                  </li>
                  <li className="flex justify-between max-w-xs">
                    <span>Fri &ndash; Sat</span>
                    <span className="tabular-nums">11:30 am &ndash; 7 pm</span>
                  </li>
                  <li className="flex justify-between max-w-xs">
                    <span>Sunday</span>
                    <span className="tabular-nums">11:30 am &ndash; 6:30 pm</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xs uppercase tracking-[0.25em] mb-2 opacity-70">
                  Say hello
                </h3>
                <p className="text-sm">
                  IG &nbsp;
                  <a
                    className="link-underline"
                    href="https://instagram.com/takoyaki6ix"
                    target="_blank"
                    rel="noreferrer"
                  >
                    @takoyaki6ix
                  </a>
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="border border-brand/30 rounded-2xl p-8 md:p-10 bg-cream2/60">
              <h3 className="font-display text-3xl mb-4">Order Online</h3>
              <p className="text-sm leading-relaxed mb-8">
                Skip the line. Pick up hot &amp; fresh, usually ready in under
                ten minutes.
              </p>
              <div className="space-y-3">
                <a
                  href="https://www.ubereats.com/ca/store/takoyaki6ix/qJgkKpfRUh6yiqCQGUBCyA"
                  target="_blank"
                  rel="noreferrer"
                  className="block text-center bg-brand text-cream rounded-full px-8 py-4 text-sm uppercase tracking-[0.2em] hover:bg-brandDark transition-colors"
                >
                  Order for Pickup →
                </a>
                <a
                  href="https://www.ubereats.com/ca/store/takoyaki6ix/qJgkKpfRUh6yiqCQGUBCyA"
                  target="_blank"
                  rel="noreferrer"
                  className="block text-center border border-brand rounded-full px-8 py-4 text-sm uppercase tracking-[0.2em] hover:bg-brand hover:text-cream transition-colors"
                >
                  Delivery via Uber Eats
                </a>
              </div>
              <p className="mt-8 text-xs uppercase tracking-[0.2em] opacity-70">
                Cash &amp; card accepted &nbsp;·&nbsp; Walk-ins welcome
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
