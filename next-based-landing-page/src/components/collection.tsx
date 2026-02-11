"use client";

import Image from "next/image";
import { FadeUp, StaggerContainer } from "@/components/motion-wrapper";
import {
  HoverCard,
  HoverCardTrigger,
  HoverCardContent,
} from "@/components/ui/hover-card";

const products = [
  {
    name: "Ivory Vessel",
    category: "Ceramics",
    price: "$280",
    description:
      "Hand-thrown porcelain cup with a matte glaze, fired at 1300°C for unparalleled smoothness.",
    image:
      "https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?w=600&q=80&auto=format&fit=crop",
  },
  {
    name: "Cloud Cushion",
    category: "Textiles",
    price: "$420",
    description:
      "Pure New Zealand merino wool with an organic cotton shell. Silence in a pillow.",
    image:
      "https://images.unsplash.com/photo-1629949009765-40fc74c9ec21?w=600&q=80&auto=format&fit=crop",
  },
  {
    name: "Carrara Sofa",
    category: "Furniture",
    price: "$12,800",
    description:
      "Italian-made frame draped in Belgian linen. A monument to quietude.",
    image:
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&q=80&auto=format&fit=crop",
  },
  {
    name: "Blanc Throw",
    category: "Textiles",
    price: "$680",
    description:
      "100% cashmere woven in Scotland. Ethereally soft, impossibly light.",
    image:
      "https://images.unsplash.com/photo-1616627547584-bf28cee262db?w=600&q=80&auto=format&fit=crop",
  },
  {
    name: "Snow Taper",
    category: "Objects",
    price: "$95",
    description:
      "Unscented soy wax candle in a hand-cast plaster holder. 60-hour burn.",
    image:
      "https://images.unsplash.com/photo-1602607434911-60de84e8b97e?w=600&q=80&auto=format&fit=crop",
  },
  {
    name: "Mist Vase",
    category: "Ceramics",
    price: "$350",
    description:
      "Frosted borosilicate glass with a silken finish. Japanese-inspired form.",
    image:
      "https://images.unsplash.com/photo-1581783898377-1c85bf937427?w=600&q=80&auto=format&fit=crop",
  },
  {
    name: "Hush Diffuser",
    category: "Scent",
    price: "$165",
    description:
      "Cold-pressed white tea and cedarwood. A whisper, not a shout.",
    image:
      "https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?w=600&q=80&auto=format&fit=crop",
  },
  {
    name: "Bone Chair",
    category: "Furniture",
    price: "$4,200",
    description:
      "Ash wood frame in a chalk-white lacquer, upholstered in alpaca bouclé.",
    image:
      "https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?w=600&q=80&auto=format&fit=crop",
  },
];

export function Collection() {
  return (
    <section id="collection" className="mx-auto max-w-7xl px-6 py-28 lg:px-10">
      <FadeUp>
        <p className="mb-3 text-center text-xs tracking-luxury uppercase text-slate-400">
          The Collection
        </p>
        <h2 className="mb-16 text-center font-serif text-4xl font-normal text-slate-900 md:text-5xl">
          Objects of Quiet
        </h2>
      </FadeUp>

      <StaggerContainer className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {products.map((product) => (
          <FadeUp key={product.name}>
            <HoverCard openDelay={200} closeDelay={100}>
              <HoverCardTrigger asChild>
                <article className="group cursor-pointer">
                  <div className="relative mb-5 aspect-[4/5] overflow-hidden rounded-sm bg-zinc-100">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      placeholder="blur"
                      blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAMCAgMCAgMDAwMEAwMEBQgFBQQEBQoHBwYIDAoMCwsKCwsQERIQDg8RERMTEhMSEBEUFRUVFBcYFxcZGhobGhT/2wBDAQMEBAUEBQkFBQkaEA8QGhoaGhoaGhoaGhoaGhoaGhoaGhoaGhoaGhoaGhoaGhoaGhoaGhoaGhoaGhoaGhoaGhr/wAARCAADAAQDASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAFBABAAAAAAAAAAAAAAAAAAAABv/EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAMAwEAAhEDEQA/AKgA/9k="
                    />
                  </div>
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="text-sm font-medium text-slate-900">
                        {product.name}
                      </h3>
                      <p className="mt-0.5 text-xs text-slate-400">
                        {product.category}
                      </p>
                    </div>
                    <p className="text-sm text-slate-400">{product.price}</p>
                  </div>
                </article>
              </HoverCardTrigger>
              <HoverCardContent
                side="top"
                className="w-72 border-hairline bg-white p-4 shadow-luxury"
              >
                <p className="text-xs leading-relaxed text-slate-400">
                  {product.description}
                </p>
              </HoverCardContent>
            </HoverCard>
          </FadeUp>
        ))}
      </StaggerContainer>
    </section>
  );
}
