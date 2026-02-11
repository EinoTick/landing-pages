import {
  Component,
  ElementRef,
  OnInit,
  OnDestroy,
  signal,
  ChangeDetectionStrategy,
} from '@angular/core';
import { ScrollRevealDirective } from '../../directives/scroll-reveal.directive';

interface Stat {
  label: string;
  value: number;
  suffix: string;
  prefix: string;
  decimals: number;
}

@Component({
  selector: 'app-performance-stats',
  standalone: true,
  imports: [ScrollRevealDirective],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section id="performance" class="relative py-32 overflow-hidden">
      <!-- Background accent -->
      <div class="absolute inset-0 bg-gradient-to-b from-zinc-950 via-zinc-900/30 to-zinc-950"></div>
      <div class="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-500/20 to-transparent"></div>
      <div class="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-500/20 to-transparent"></div>

      <div class="relative max-w-7xl mx-auto px-6">
        <div class="text-center mb-20" appScrollReveal>
          <p class="text-xs tracking-mega uppercase text-amber-500/80 font-light mb-4">Performance Metrics</p>
          <h2 class="text-4xl sm:text-5xl font-extralight tracking-tight">Numbers That Speak</h2>
        </div>

        <div class="grid grid-cols-2 lg:grid-cols-4 gap-px bg-white/5">
          @for (stat of stats; track stat.label; let i = $index) {
            <div
              class="bg-zinc-950 p-8 sm:p-12 text-center group hover:bg-white/[0.02] transition-colors duration-500"
              [appScrollReveal]="i * 150"
            >
              <div class="text-4xl sm:text-5xl lg:text-6xl font-extralight tracking-tight text-white mb-3 tabular-nums">
                {{ stat.prefix }}{{ animatedValues()[i] }}{{ stat.suffix }}
              </div>
              <div class="text-xs tracking-ultra uppercase text-zinc-500 font-light">
                {{ stat.label }}
              </div>
            </div>
          }
        </div>
      </div>
    </section>
  `,
})
export class PerformanceStatsComponent implements OnInit, OnDestroy {
  stats: Stat[] = [
    { label: '0–60 mph', value: 2.7, suffix: 's', prefix: '', decimals: 1 },
    { label: 'Top Speed', value: 217, suffix: '', prefix: '', decimals: 0 },
    { label: 'Horsepower', value: 812, suffix: '', prefix: '', decimals: 0 },
    { label: 'Torque lb·ft', value: 590, suffix: '', prefix: '', decimals: 0 },
  ];

  animatedValues = signal<string[]>(this.stats.map(() => '0'));

  private observer!: IntersectionObserver;
  private hasAnimated = false;

  constructor(private el: ElementRef) {}

  ngOnInit(): void {
    this.observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !this.hasAnimated) {
          this.hasAnimated = true;
          this.animateCounters();
        }
      },
      { threshold: 0.3 }
    );
    this.observer.observe(this.el.nativeElement);
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }

  private animateCounters(): void {
    const duration = 2000;
    const fps = 60;
    const totalFrames = (duration / 1000) * fps;
    let frame = 0;

    const interval = setInterval(() => {
      frame++;
      const progress = this.easeOutExpo(frame / totalFrames);

      const newValues = this.stats.map((stat) => {
        const current = stat.value * Math.min(progress, 1);
        return stat.decimals > 0
          ? current.toFixed(stat.decimals)
          : Math.floor(current).toString();
      });

      this.animatedValues.set(newValues);

      if (frame >= totalFrames) {
        clearInterval(interval);
        this.animatedValues.set(
          this.stats.map((s) =>
            s.decimals > 0 ? s.value.toFixed(s.decimals) : s.value.toString()
          )
        );
      }
    }, 1000 / fps);
  }

  private easeOutExpo(t: number): number {
    return t === 1 ? 1 : 1 - Math.pow(2, -10 * t);
  }
}
