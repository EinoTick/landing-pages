/**
 * "The Switch" comparison gallery — hover/tap to flip cards.
 */

const SWITCHES = [
  {
    plastic: "Plastic Toothbrush",
    plasticDesc: "Petroleum-based handle. Nylon bristles. 1 billion discarded yearly in the US alone.",
    purist: "Bamboo / Bio-Acetate",
    puristDesc: "Moso bamboo handle. Plant-based bristles. Fully compostable within 6 months.",
    icon: "sparkles",
  },
  {
    plastic: "Synthetic Yoga Mat",
    plasticDesc: "PVC foam. Off-gasses volatile compounds. Takes 1,000+ years to decompose.",
    purist: "Natural Rubber / Cork",
    puristDesc: "Harvested cork oak bark. Portuguese origin. Antimicrobial. Biodegradable.",
    icon: "leaf",
  },
  {
    plastic: "Polyester Pillows",
    plasticDesc: "Microfiber fill sheds microplastics with every wash. Flat within months.",
    purist: "Kapok / Down-Filled",
    puristDesc: "Wild-harvested kapok fiber. Naturally hypoallergenic. Lasts 5–10 years.",
    icon: "cloud",
  },
  {
    plastic: "Plastic Loofah",
    plasticDesc: "Nylon mesh puff. Harbors bacteria within weeks. Landfill-bound.",
    purist: "Natural Gourd Loofah",
    puristDesc: "Sun-dried Luffa aegyptiaca. Grown, not manufactured. Compostable.",
    icon: "sun",
  },
  {
    plastic: "Nylon Dental Floss",
    plasticDesc: "Petroleum-derived nylon coated in synthetic wax. PFAS contamination risk.",
    purist: "Silk / Waxed Cotton",
    puristDesc: "Peace silk thread with candelilla wax. Naturally antibacterial. Zero PFAS.",
    icon: "heart",
  },
];

export function initComparison() {
  const grid = document.getElementById("switch-grid");
  if (!grid) return;

  grid.innerHTML = SWITCHES.map((item, i) => createCard(item, i)).join("");

  // Touch support for mobile
  grid.querySelectorAll(".switch-card").forEach((card) => {
    card.addEventListener("click", () => {
      card.classList.toggle("is-flipped");
    });
  });
}

function createCard(item, index) {
  return `
    <div class="switch-card reveal reveal-delay-${(index % 4) + 1} group cursor-pointer" role="button" tabindex="0" aria-label="Flip to see the purist alternative to ${item.plastic}">
      <div class="switch-card-inner relative w-full" style="aspect-ratio: 3/4;">

        <!-- Front: Plastic -->
        <div class="switch-card-face absolute inset-0 flex flex-col justify-between p-6 sm:p-8 bg-stone-100 border border-stone-200/60 rounded-sm">
          <div>
            <span class="inline-block px-3 py-1 text-[10px] font-medium tracking-[0.2em] uppercase text-stone/80 bg-stone-200/50 rounded-full mb-6">
              The Problem
            </span>
            <h3 class="heading-editorial text-2xl sm:text-3xl text-bark mb-4">${item.plastic}</h3>
            <p class="text-sm leading-relaxed text-stone">${item.plasticDesc}</p>
          </div>
          <div class="flex items-center gap-2 text-stone/40">
            <span class="text-[11px] tracking-[0.15em] uppercase">Hover to switch</span>
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4"/></svg>
          </div>
        </div>

        <!-- Back: Purist Alternative -->
        <div class="switch-card-face switch-card-back absolute inset-0 flex flex-col justify-between p-6 sm:p-8 bg-forest text-paper border border-forest-light rounded-sm">
          <div>
            <span class="inline-block px-3 py-1 text-[10px] font-medium tracking-[0.2em] uppercase text-clay bg-forest-light/60 rounded-full mb-6">
              The Switch
            </span>
            <h3 class="heading-editorial text-2xl sm:text-3xl mb-4">${item.purist}</h3>
            <p class="text-sm leading-relaxed text-paper-warm/70">${item.puristDesc}</p>
          </div>
          <div class="flex items-center gap-2 text-paper-warm/30">
            <span class="text-[11px] tracking-[0.15em] uppercase">Purist Approved</span>
            <i data-lucide="${item.icon}" class="w-4 h-4"></i>
          </div>
        </div>

      </div>
    </div>
  `;
}
