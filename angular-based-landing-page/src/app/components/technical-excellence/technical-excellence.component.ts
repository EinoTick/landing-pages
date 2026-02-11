import { Component, ChangeDetectionStrategy } from '@angular/core';
import { LucideAngularModule, Shield, Zap, Wind, Gauge } from 'lucide-angular';
import { ScrollRevealDirective } from '../../directives/scroll-reveal.directive';

@Component({
  selector: 'app-technical-excellence',
  standalone: true,
  imports: [LucideAngularModule, ScrollRevealDirective],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section id="engineering" class="relative py-32 overflow-hidden">
      <!-- Background -->
      <div class="absolute inset-0 bg-gradient-to-b from-zinc-950 via-zinc-900/20 to-zinc-950"></div>

      <div class="relative max-w-7xl mx-auto px-6">
        <div class="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <!-- Image Side -->
          <div class="relative" appScrollReveal>
            <div class="relative aspect-[4/5] overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=800&q=80"
                alt="Carbon fiber chassis detail"
                class="w-full h-full object-cover"
              />
              <div class="absolute inset-0 bg-gradient-to-t from-zinc-950/60 to-transparent"></div>
            </div>

            <!-- Floating specs card -->
            <div class="absolute -bottom-6 -right-6 sm:right-6 glass p-6 max-w-[260px] glow-amber">
              <p class="text-[10px] tracking-mega uppercase text-amber-500 mb-3">Carbon Fiber Monocoque</p>
              <p class="text-3xl font-extralight">1,180<span class="text-sm text-zinc-500 ml-1">kg</span></p>
              <p class="text-xs text-zinc-500 mt-1">Dry weight</p>
            </div>

            <!-- Accent line -->
            <div class="absolute -top-4 -left-4 w-24 h-px bg-amber-500/40"></div>
            <div class="absolute -top-4 -left-4 w-px h-24 bg-amber-500/40"></div>
          </div>

          <!-- Content Side -->
          <div class="space-y-10">
            <div appScrollReveal>
              <p class="text-xs tracking-mega uppercase text-amber-500/80 font-light mb-4">Technical Excellence</p>
              <h2 class="text-4xl sm:text-5xl font-extralight tracking-tight leading-tight">
                Where Science<br />Meets Obsession
              </h2>
            </div>

            <p class="text-zinc-400 text-lg font-extralight leading-relaxed" [appScrollReveal]="100">
              Every vehicle in our collection represents the pinnacle of automotive engineering.
              From Formula 1–derived aerodynamics to hand-laid carbon fiber monocoques, these
              machines are built without compromise.
            </p>

            <!-- Feature Grid -->
            <div class="grid grid-cols-2 gap-6">
              @for (feature of features; track feature.title; let i = $index) {
                <div
                  class="group p-5 border-subtle hover:bg-white/[0.02] transition-colors duration-300"
                  [appScrollReveal]="200 + i * 100"
                >
                  <lucide-icon
                    [img]="feature.icon"
                    [size]="20"
                    class="text-amber-500/70 mb-3"
                  ></lucide-icon>
                  <h4 class="text-sm font-light tracking-wide mb-1">{{ feature.title }}</h4>
                  <p class="text-xs text-zinc-500 font-light leading-relaxed">{{ feature.desc }}</p>
                </div>
              }
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
})
export class TechnicalExcellenceComponent {
  features = [
    {
      icon: Shield,
      title: 'Carbon Chassis',
      desc: 'Full carbon fiber monocoque construction for maximum rigidity and minimum weight.',
    },
    {
      icon: Zap,
      title: 'Hybrid Power',
      desc: 'Electric motors complement combustion engines for instant torque delivery.',
    },
    {
      icon: Wind,
      title: 'Active Aero',
      desc: 'Computer-controlled aerodynamic surfaces adapt in real-time at speed.',
    },
    {
      icon: Gauge,
      title: 'Precision Telemetry',
      desc: 'Race-derived data systems monitor every parameter, every millisecond.',
    },
  ];
}
