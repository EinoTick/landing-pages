import { Component, ChangeDetectionStrategy } from '@angular/core';
import { LucideAngularModule, ArrowRight, Play } from 'lucide-angular';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [LucideAngularModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section class="relative h-screen flex items-center justify-center overflow-hidden">
      <!-- Background Image with Overlay -->
      <div class="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1544636331-e26879cd4d9b?auto=format&fit=crop&w=2000&q=80"
          alt="Luxury sports car"
          class="w-full h-full object-cover"
        />
        <div class="absolute inset-0 bg-gradient-to-b from-zinc-950/70 via-zinc-950/50 to-zinc-950"></div>
        <div class="absolute inset-0 bg-gradient-to-r from-zinc-950/80 via-transparent to-zinc-950/80"></div>
      </div>

      <!-- Content -->
      <div class="relative z-10 text-center max-w-5xl mx-auto px-6">
        <div class="space-y-8">
          <!-- Overline -->
          <p class="text-xs tracking-mega uppercase text-amber-500/80 font-light">
            Est. 2024 — Exclusive Automotive
          </p>

          <!-- Headline -->
          <h1 class="text-5xl sm:text-7xl lg:text-8xl font-extralight tracking-tight leading-[0.9]">
            Engineered
            <br />
            <span class="text-gradient font-thin">Emotion</span>
          </h1>

          <!-- Subline -->
          <p class="text-zinc-400 text-lg sm:text-xl font-extralight max-w-2xl mx-auto leading-relaxed">
            Where raw power meets refined elegance. Discover the world's most
            extraordinary machines, curated for the discerning few.
          </p>

          <!-- CTAs -->
          <div class="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <a
              href="#collection"
              class="group flex items-center gap-3 px-8 py-4 bg-white text-zinc-950 text-sm tracking-widest uppercase font-medium hover:bg-amber-500 transition-all duration-300"
            >
              View Inventory
              <lucide-icon [img]="arrowRight" [size]="16" class="group-hover:translate-x-1 transition-transform"></lucide-icon>
            </a>
            <a
              href="#experience"
              class="group flex items-center gap-3 px-8 py-4 border border-white/20 text-sm tracking-widest uppercase font-light text-zinc-300 hover:border-white/40 hover:text-white transition-all duration-300"
            >
              <lucide-icon [img]="playIcon" [size]="14"></lucide-icon>
              Watch Film
            </a>
          </div>
        </div>
      </div>

      <!-- Scroll Indicator -->
      <div class="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3">
        <span class="text-[10px] tracking-mega uppercase text-zinc-500">Scroll</span>
        <div class="w-px h-12 bg-gradient-to-b from-zinc-500 to-transparent"></div>
      </div>

      <!-- Side Accent Lines -->
      <div class="absolute top-1/2 left-6 -translate-y-1/2 hidden lg:block">
        <div class="w-px h-32 bg-gradient-to-b from-transparent via-amber-500/30 to-transparent"></div>
      </div>
      <div class="absolute top-1/2 right-6 -translate-y-1/2 hidden lg:block">
        <div class="w-px h-32 bg-gradient-to-b from-transparent via-amber-500/30 to-transparent"></div>
      </div>
    </section>
  `,
})
export class HeroComponent {
  readonly arrowRight = ArrowRight;
  readonly playIcon = Play;
}
