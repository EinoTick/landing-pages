import { Component, signal, ChangeDetectionStrategy } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LucideAngularModule, ArrowRight, Instagram, Twitter, Youtube } from 'lucide-angular';
import { ScrollRevealDirective } from '../../directives/scroll-reveal.directive';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [FormsModule, LucideAngularModule, ScrollRevealDirective],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <footer class="relative pt-32 pb-12">
      <div class="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>

      <div class="max-w-7xl mx-auto px-6">
        <!-- Newsletter -->
        <div class="text-center mb-24" appScrollReveal>
          <p class="text-xs tracking-mega uppercase text-amber-500/80 font-light mb-4">Newsletter for the Elite</p>
          <h2 class="text-3xl sm:text-4xl font-extralight tracking-tight mb-4">Stay Ahead of the Curve</h2>
          <p class="text-zinc-500 text-sm font-light max-w-md mx-auto mb-8">
            Exclusive previews, first access to new arrivals, and invitations to private events.
          </p>

          <div class="flex flex-col sm:flex-row items-center gap-3 max-w-md mx-auto">
            <input
              [(ngModel)]="email"
              type="email"
              placeholder="your@email.com"
              class="flex-1 w-full bg-white/5 border border-white/10 px-5 py-3.5 text-sm font-light text-white placeholder:text-zinc-600 focus:outline-none focus:border-amber-500/40 transition-colors"
            />
            <button
              (click)="subscribed.set(true)"
              class="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3.5 bg-white text-zinc-950 text-xs tracking-widest uppercase font-medium hover:bg-amber-500 transition-all duration-300 whitespace-nowrap"
            >
              @if (subscribed()) {
                Subscribed
              } @else {
                Subscribe
                <lucide-icon [img]="arrowRight" [size]="14"></lucide-icon>
              }
            </button>
          </div>
        </div>

        <!-- Footer Grid -->
        <div class="grid grid-cols-2 md:grid-cols-4 gap-10 mb-16" [appScrollReveal]="100">
          @for (col of footerColumns; track col.title) {
            <div>
              <h4 class="text-[10px] tracking-mega uppercase text-zinc-500 mb-5">{{ col.title }}</h4>
              <ul class="space-y-3">
                @for (link of col.links; track link) {
                  <li>
                    <a href="#" class="text-sm font-light text-zinc-400 hover:text-white transition-colors duration-300">
                      {{ link }}
                    </a>
                  </li>
                }
              </ul>
            </div>
          }
        </div>

        <!-- Bottom Bar -->
        <div class="flex flex-col sm:flex-row items-center justify-between pt-8 border-t border-white/5 gap-6">
          <!-- Logo -->
          <div class="flex items-center gap-3">
            <div class="w-6 h-6 border border-amber-500/40 rotate-45 flex items-center justify-center">
              <div class="w-1.5 h-1.5 bg-amber-500 rotate-[-45deg]"></div>
            </div>
            <span class="text-xs font-light tracking-ultra uppercase text-zinc-500">Apex Velocity</span>
          </div>

          <!-- Social -->
          <div class="flex items-center gap-5">
            @for (social of socials; track social.label) {
              <a href="#" class="text-zinc-600 hover:text-white transition-colors duration-300" [attr.aria-label]="social.label">
                <lucide-icon [img]="social.icon" [size]="16"></lucide-icon>
              </a>
            }
          </div>

          <!-- Copyright -->
          <p class="text-[10px] tracking-widest uppercase text-zinc-600">
            &copy; 2025 Apex Velocity. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  `,
})
export class FooterComponent {
  readonly arrowRight = ArrowRight;

  email = '';
  subscribed = signal(false);

  socials = [
    { icon: Instagram, label: 'Instagram' },
    { icon: Twitter, label: 'Twitter' },
    { icon: Youtube, label: 'YouTube' },
  ];

  footerColumns = [
    {
      title: 'Showroom',
      links: ['Current Inventory', 'Coming Soon', 'Sold Archive', 'Request a Build'],
    },
    {
      title: 'Services',
      links: ['Financing', 'Trade-In', 'Transport', 'Concierge'],
    },
    {
      title: 'Company',
      links: ['About Us', 'Careers', 'Press', 'Contact'],
    },
    {
      title: 'Legal',
      links: ['Privacy Policy', 'Terms of Service', 'Cookie Policy', 'Accessibility'],
    },
  ];
}
