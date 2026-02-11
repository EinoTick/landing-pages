import { Component, signal, HostListener, ChangeDetectionStrategy } from '@angular/core';
import { LucideAngularModule, Menu, X, ChevronRight } from 'lucide-angular';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [LucideAngularModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <nav
      class="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
      [class]="scrolled() ? 'glass-dark py-3' : 'py-6'"
    >
      <div class="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <!-- Logo -->
        <a href="#" class="flex items-center gap-3 group">
          <div class="w-8 h-8 border border-amber-500/60 rotate-45 flex items-center justify-center group-hover:border-amber-400 transition-colors">
            <div class="w-2 h-2 bg-amber-500 rotate-[-45deg]"></div>
          </div>
          <span class="text-sm font-light tracking-ultra uppercase">Apex Velocity</span>
        </a>

        <!-- Desktop Nav -->
        <div class="hidden md:flex items-center gap-10">
          @for (item of navItems; track item) {
            <a
              [href]="item.href"
              class="text-xs tracking-widest uppercase text-zinc-400 hover:text-zinc-100 transition-colors duration-300"
            >
              {{ item.label }}
            </a>
          }
          <a
            href="#experience"
            class="text-xs tracking-widest uppercase px-5 py-2.5 border border-amber-500/40 text-amber-500 hover:bg-amber-500 hover:text-zinc-950 transition-all duration-300"
          >
            Reserve
          </a>
        </div>

        <!-- Mobile Toggle -->
        <button
          class="md:hidden text-zinc-400 hover:text-white transition-colors"
          (click)="mobileOpen.set(!mobileOpen())"
        >
          <lucide-icon [img]="mobileOpen() ? xIcon : menuIcon" [size]="20"></lucide-icon>
        </button>
      </div>

      <!-- Mobile Menu -->
      @if (mobileOpen()) {
        <div class="md:hidden glass-dark mt-3 mx-6 p-6 space-y-4">
          @for (item of navItems; track item) {
            <a
              [href]="item.href"
              class="flex items-center justify-between text-xs tracking-widest uppercase text-zinc-400 hover:text-zinc-100 transition-colors py-2 border-b border-white/5"
              (click)="mobileOpen.set(false)"
            >
              {{ item.label }}
              <lucide-icon [img]="chevronIcon" [size]="14"></lucide-icon>
            </a>
          }
        </div>
      }
    </nav>
  `,
})
export class NavbarComponent {
  readonly menuIcon = Menu;
  readonly xIcon = X;
  readonly chevronIcon = ChevronRight;

  scrolled = signal(false);
  mobileOpen = signal(false);

  navItems = [
    { label: 'Collection', href: '#collection' },
    { label: 'Performance', href: '#performance' },
    { label: 'Engineering', href: '#engineering' },
    { label: 'Experience', href: '#experience' },
  ];

  @HostListener('window:scroll')
  onScroll(): void {
    this.scrolled.set(window.scrollY > 50);
  }
}
