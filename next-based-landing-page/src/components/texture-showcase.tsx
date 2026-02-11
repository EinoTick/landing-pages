"use client";

import Image from "next/image";
import { FadeUp, FadeIn } from "@/components/motion-wrapper";
import { Maximize2 } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogTitle,
} from "@/components/ui/dialog";

const textures = [
  {
    title: "Egyptian Cotton",
    subtitle: "1000 Thread Count",
    description:
      "Grown in the Nile Delta, each fiber is hand-picked and combed to produce an impossibly smooth weave. The result is a fabric that feels like air against the skin.",
    image:
      "https://images.unsplash.com/photo-1588117260148-b47818741c74?w=1200&q=80&auto=format&fit=crop",
  },
  {
    title: "Carrara Marble",
    subtitle: "From Tuscany, Italy",
    description:
      "Quarried from the same mountains that supplied Michelangelo. Each slab is unique—soft grey veins threading through crystalline white, polished to a mirror finish.",
    image:
      "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1200&q=80&auto=format&fit=crop",
  },
  {
    title: "Mongolian Cashmere",
    subtitle: "Grade A, 15.5 Micron",
    description:
      "Combed—never sheared—from the underbelly of Hircus goats during spring molting. The finest fibers in the world, impossibly soft and weightless.",
    image:
      "https://images.unsplash.com/photo-1586105251261-72a756497a11?w=1200&q=80&auto=format&fit=crop",
  },
];

export function TextureShowcase() {
  return (
    <section
      id="materials"
      className="bg-zinc-100/50 py-28"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <FadeUp>
          <p className="mb-3 text-center text-xs tracking-luxury uppercase text-slate-400">
            Materials
          </p>
          <h2 className="mb-6 text-center font-serif text-4xl font-normal text-slate-900 md:text-5xl">
            Texture &amp; Truth
          </h2>
          <p className="mx-auto mb-20 max-w-lg text-center text-sm leading-relaxed text-slate-400">
            Every material is sourced at origin, chosen for purity of color and
            integrity of craft. We zoom in so you can feel the difference.
          </p>
        </FadeUp>

        <div className="space-y-24">
          {textures.map((texture, i) => (
            <FadeUp key={texture.title} delay={i * 0.1}>
              <div
                className={`flex flex-col items-center gap-12 lg:flex-row ${
                  i % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                {/* Image with zoom dialog */}
                <div className="relative w-full lg:w-1/2">
                  <Dialog>
                    <DialogTrigger asChild>
                      <div className="group relative aspect-[4/3] cursor-pointer overflow-hidden rounded-sm">
                        <Image
                          src={texture.image}
                          alt={texture.title}
                          fill
                          className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                          sizes="(max-width: 1024px) 100vw, 50vw"
                          placeholder="blur"
                          blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAMCAgMCAgMDAwMEAwMEBQgFBQQEBQoHBwYIDAoMCwsKCwsQERIQDg8RERMTEhMSEBEUFRUVFBcYFxcZGhobGhT/2wBDAQMEBAUEBQkFBQkaEA8QGhoaGhoaGhoaGhoaGhoaGhoaGhoaGhoaGhoaGhoaGhoaGhoaGhoaGhoaGhoaGhoaGhr/wAARCAADAAQDASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAFBABAAAAAAAAAAAAAAAAAAAABv/EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAMAwEAAhEDEQA/AKgA/9k="
                        />
                        <div className="absolute inset-0 flex items-center justify-center bg-black/0 transition-colors duration-300 group-hover:bg-black/10">
                          <Maximize2
                            size={24}
                            strokeWidth={1}
                            className="text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                          />
                        </div>
                      </div>
                    </DialogTrigger>
                    <DialogContent className="max-w-4xl border-hairline bg-white p-0">
                      <DialogTitle className="sr-only">
                        {texture.title} — Close-up Detail
                      </DialogTitle>
                      <div className="relative aspect-[16/10] w-full">
                        <Image
                          src={texture.image}
                          alt={`${texture.title} close-up`}
                          fill
                          className="object-cover"
                          sizes="90vw"
                        />
                      </div>
                    </DialogContent>
                  </Dialog>
                </div>

                {/* Text */}
                <div className="w-full lg:w-1/2 lg:px-8">
                  <p className="mb-2 text-xs tracking-luxury uppercase text-slate-400">
                    {texture.subtitle}
                  </p>
                  <h3 className="mb-4 font-serif text-3xl font-normal text-slate-900">
                    {texture.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-slate-400">
                    {texture.description}
                  </p>
                </div>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
