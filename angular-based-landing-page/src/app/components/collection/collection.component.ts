import { Component, signal, ChangeDetectionStrategy } from '@angular/core';
import { LucideAngularModule, ArrowRight, Eye } from 'lucide-angular';
import { ScrollRevealDirective } from '../../directives/scroll-reveal.directive';

interface Car {
  name: string;
  make: string;
  price: string;
  image: string;
  specs: string;
  year: number;
}

@Component({
  selector: 'app-collection',
  standalone: true,
  imports: [LucideAngularModule, ScrollRevealDirective],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section id="collection" class="relative py-32">
      <div class="max-w-7xl mx-auto px-6">
        <!-- Header -->
        <div class="flex flex-col sm:flex-row sm:items-end sm:justify-between mb-16 gap-6" appScrollReveal>
          <div>
            <p class="text-xs tracking-mega uppercase text-amber-500/80 font-light mb-4">The Collection</p>
            <h2 class="text-4xl sm:text-5xl font-extralight tracking-tight">Curated Excellence</h2>
          </div>
          <a href="#collection" class="group flex items-center gap-2 text-xs tracking-widest uppercase text-zinc-400 hover:text-white transition-colors">
            View All
            <lucide-icon [img]="arrowRight" [size]="14" class="group-hover:translate-x-1 transition-transform"></lucide-icon>
          </a>
        </div>

        <!-- Car Grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/5">
          @for (car of cars; track car.name; let i = $index) {
            <div
              class="group bg-zinc-950 relative overflow-hidden cursor-pointer"
              [appScrollReveal]="i * 100"
              (mouseenter)="hoveredIndex.set(i)"
              (mouseleave)="hoveredIndex.set(-1)"
            >
              <!-- Image -->
              <div class="relative aspect-[4/3] overflow-hidden">
                <img
                  [src]="car.image"
                  [alt]="car.name"
                  class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div class="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent"></div>

                <!-- Year badge -->
                <div class="absolute top-4 left-4 glass px-3 py-1.5">
                  <span class="text-[10px] tracking-ultra uppercase text-zinc-300">{{ car.year }}</span>
                </div>

                <!-- Hover overlay -->
                <div
                  class="absolute inset-0 bg-zinc-950/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                >
                  <div class="glass px-6 py-3 flex items-center gap-2">
                    <lucide-icon [img]="eyeIcon" [size]="14" class="text-amber-500"></lucide-icon>
                    <span class="text-xs tracking-widest uppercase">Quick View</span>
                  </div>
                </div>
              </div>

              <!-- Info -->
              <div class="p-6 space-y-3">
                <div class="flex items-start justify-between">
                  <div>
                    <p class="text-[10px] tracking-ultra uppercase text-zinc-500">{{ car.make }}</p>
                    <h3 class="text-lg font-light tracking-wide">{{ car.name }}</h3>
                  </div>
                  <div class="text-right">
                    <p class="text-[10px] tracking-ultra uppercase text-zinc-500">Starting at</p>
                    <p class="text-amber-500 font-light">{{ car.price }}</p>
                  </div>
                </div>
                <div class="pt-3 border-t border-white/5">
                  <p class="text-xs text-zinc-500 font-light">{{ car.specs }}</p>
                </div>
              </div>
            </div>
          }
        </div>
      </div>
    </section>
  `,
})
export class CollectionComponent {
  readonly arrowRight = ArrowRight;
  readonly eyeIcon = Eye;

  hoveredIndex = signal(-1);

  cars: Car[] = [
    {
      name: 'SF90 Stradale',
      make: 'Ferrari',
      price: '$524,815',
      image: 'https://images.unsplash.com/photo-1592198084033-aade902d1aae?auto=format&fit=crop&w=800&q=80',
      specs: '4.0L Twin-Turbo V8 + 3 Electric Motors — 986 HP',
      year: 2024,
    },
    {
      name: 'Huracán Tecnica',
      make: 'Lamborghini',
      price: '$306,233',
      image: 'https://images.unsplash.com/photo-1544636331-e26879cd4d9b?auto=format&fit=crop&w=800&q=80',
      specs: '5.2L Naturally Aspirated V10 — 631 HP',
      year: 2024,
    },
    {
      name: '720S',
      make: 'McLaren',
      price: '$299,000',
      image: 'https://images.unsplash.com/photo-1621135802920-133df287f89c?auto=format&fit=crop&w=800&q=80',
      specs: '4.0L Twin-Turbo V8 — 710 HP',
      year: 2024,
    },
    {
      name: 'Chiron Sport',
      make: 'Bugatti',
      price: '$3,260,000',
      image: 'https://images.unsplash.com/photo-1600712242805-5f78671b24da?auto=format&fit=crop&w=800&q=80',
      specs: '8.0L Quad-Turbo W16 — 1,479 HP',
      year: 2024,
    },
    {
      name: '911 GT3 RS',
      make: 'Porsche',
      price: '$223,800',
      image: 'https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?auto=format&fit=crop&w=800&q=80',
      specs: '4.0L Naturally Aspirated Flat-6 — 518 HP',
      year: 2025,
    },
    {
      name: 'Valkyrie',
      make: 'Aston Martin',
      price: '$3,500,000',
      image: 'https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=800&q=80',
      specs: '6.5L V12 + Electric Motor — 1,139 HP',
      year: 2025,
    },
  ];
}
