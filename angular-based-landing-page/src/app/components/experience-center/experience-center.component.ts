import { Component, signal, ChangeDetectionStrategy } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { LucideAngularModule, Send, MapPin, Phone, Clock } from 'lucide-angular';
import { ScrollRevealDirective } from '../../directives/scroll-reveal.directive';

@Component({
  selector: 'app-experience-center',
  standalone: true,
  imports: [ReactiveFormsModule, LucideAngularModule, ScrollRevealDirective],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section id="experience" class="relative py-32">
      <div class="absolute inset-0 bg-gradient-to-b from-zinc-950 via-zinc-900/20 to-zinc-950"></div>
      <div class="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-500/20 to-transparent"></div>

      <div class="relative max-w-7xl mx-auto px-6">
        <div class="grid lg:grid-cols-2 gap-16 lg:gap-24">
          <!-- Left: Info -->
          <div class="space-y-10">
            <div appScrollReveal>
              <p class="text-xs tracking-mega uppercase text-amber-500/80 font-light mb-4">Experience Center</p>
              <h2 class="text-4xl sm:text-5xl font-extralight tracking-tight leading-tight">
                Request a<br />Private Viewing
              </h2>
            </div>

            <p class="text-zinc-400 text-lg font-extralight leading-relaxed" [appScrollReveal]="100">
              Step into our Experience Center for an intimate encounter with automotive
              excellence. Every test drive is a private event, tailored to your desires.
            </p>

            <!-- Contact Details -->
            <div class="space-y-6" [appScrollReveal]="200">
              @for (detail of contactDetails; track detail.label) {
                <div class="flex items-start gap-4">
                  <lucide-icon [img]="detail.icon" [size]="18" class="text-amber-500/60 mt-0.5"></lucide-icon>
                  <div>
                    <p class="text-xs tracking-ultra uppercase text-zinc-500 mb-1">{{ detail.label }}</p>
                    <p class="text-sm font-light text-zinc-300">{{ detail.value }}</p>
                  </div>
                </div>
              }
            </div>
          </div>

          <!-- Right: Form -->
          <div [appScrollReveal]="150">
            <form
              [formGroup]="form"
              (ngSubmit)="onSubmit()"
              class="glass p-8 sm:p-10 space-y-6"
            >
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div class="space-y-2">
                  <label class="text-[10px] tracking-ultra uppercase text-zinc-500">First Name</label>
                  <input
                    formControlName="firstName"
                    type="text"
                    class="w-full bg-white/5 border border-white/10 px-4 py-3 text-sm font-light text-white placeholder:text-zinc-600 focus:outline-none focus:border-amber-500/40 transition-colors"
                    placeholder="John"
                  />
                </div>
                <div class="space-y-2">
                  <label class="text-[10px] tracking-ultra uppercase text-zinc-500">Last Name</label>
                  <input
                    formControlName="lastName"
                    type="text"
                    class="w-full bg-white/5 border border-white/10 px-4 py-3 text-sm font-light text-white placeholder:text-zinc-600 focus:outline-none focus:border-amber-500/40 transition-colors"
                    placeholder="Doe"
                  />
                </div>
              </div>

              <div class="space-y-2">
                <label class="text-[10px] tracking-ultra uppercase text-zinc-500">Email</label>
                <input
                  formControlName="email"
                  type="email"
                  class="w-full bg-white/5 border border-white/10 px-4 py-3 text-sm font-light text-white placeholder:text-zinc-600 focus:outline-none focus:border-amber-500/40 transition-colors"
                  placeholder="john@example.com"
                />
              </div>

              <div class="space-y-2">
                <label class="text-[10px] tracking-ultra uppercase text-zinc-500">Vehicle of Interest</label>
                <select
                  formControlName="vehicle"
                  class="w-full bg-white/5 border border-white/10 px-4 py-3 text-sm font-light text-white focus:outline-none focus:border-amber-500/40 transition-colors appearance-none"
                >
                  <option value="" disabled class="bg-zinc-900">Select a vehicle</option>
                  <option value="ferrari-sf90" class="bg-zinc-900">Ferrari SF90 Stradale</option>
                  <option value="lamborghini-huracan" class="bg-zinc-900">Lamborghini Huracán Tecnica</option>
                  <option value="mclaren-720s" class="bg-zinc-900">McLaren 720S</option>
                  <option value="bugatti-chiron" class="bg-zinc-900">Bugatti Chiron Sport</option>
                  <option value="porsche-gt3rs" class="bg-zinc-900">Porsche 911 GT3 RS</option>
                  <option value="aston-valkyrie" class="bg-zinc-900">Aston Martin Valkyrie</option>
                </select>
              </div>

              <div class="space-y-2">
                <label class="text-[10px] tracking-ultra uppercase text-zinc-500">Message</label>
                <textarea
                  formControlName="message"
                  rows="4"
                  class="w-full bg-white/5 border border-white/10 px-4 py-3 text-sm font-light text-white placeholder:text-zinc-600 focus:outline-none focus:border-amber-500/40 transition-colors resize-none"
                  placeholder="Tell us about your ideal driving experience..."
                ></textarea>
              </div>

              <button
                type="submit"
                [disabled]="!form.valid || submitted()"
                class="w-full flex items-center justify-center gap-3 px-8 py-4 bg-white text-zinc-950 text-sm tracking-widest uppercase font-medium hover:bg-amber-500 transition-all duration-300 disabled:opacity-30 disabled:cursor-not-allowed"
              >
                @if (submitted()) {
                  Request Received
                } @else {
                  <lucide-icon [img]="sendIcon" [size]="14"></lucide-icon>
                  Request Test Drive
                }
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  `,
})
export class ExperienceCenterComponent {
  readonly sendIcon = Send;

  submitted = signal(false);
  form: FormGroup;

  contactDetails = [
    { icon: MapPin, label: 'Location', value: '1200 Biscayne Boulevard, Miami FL 33132' },
    { icon: Phone, label: 'Concierge', value: '+1 (305) 555-0192' },
    { icon: Clock, label: 'By Appointment', value: 'Monday – Saturday, 10:00 – 19:00' },
  ];

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      vehicle: ['', Validators.required],
      message: [''],
    });
  }

  onSubmit(): void {
    if (this.form.valid) {
      this.submitted.set(true);
    }
  }
}
