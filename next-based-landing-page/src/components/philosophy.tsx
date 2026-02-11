import { FadeUp, FadeIn } from "@/components/motion-wrapper";

export function Philosophy() {
  return (
    <section id="philosophy" className="py-32">
      <div className="mx-auto max-w-3xl px-6 text-center lg:px-10">
        <FadeUp>
          <p className="mb-6 text-xs tracking-luxury uppercase text-slate-400">
            Our Philosophy
          </p>
        </FadeUp>

        <FadeUp delay={0.15}>
          <h2 className="font-serif text-4xl font-normal leading-snug text-slate-900 md:text-5xl md:leading-snug">
            Living in the Light
          </h2>
        </FadeUp>

        <FadeIn delay={0.35}>
          <div className="mx-auto mt-4 mb-10 h-px w-16 bg-slate-200" />
        </FadeIn>

        <FadeUp delay={0.4}>
          <p className="text-base leading-relaxed text-slate-400">
            White is not the absence of color. It is the presence of every
            wavelength, unified. At Niveus, we believe that luxury is not about
            accumulation—it is about distillation. Each object in our collection
            has been stripped of the unnecessary, refined to its purest form.
          </p>
        </FadeUp>

        <FadeUp delay={0.55}>
          <p className="mt-8 text-base leading-relaxed text-slate-400">
            We do not follow trends. We follow light. We seek out the artisans
            who understand that a surface can speak, that a texture can comfort,
            that silence can be the most profound statement in a noisy world.
            This is not minimalism for its own sake. This is clarity, by design.
          </p>
        </FadeUp>

        <FadeUp delay={0.7}>
          <p className="mt-12 font-serif text-lg italic text-slate-300">
            &ldquo;In a world of noise, choose silence. In a world of color,
            choose light.&rdquo;
          </p>
        </FadeUp>
      </div>
    </section>
  );
}
