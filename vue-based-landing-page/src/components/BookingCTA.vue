<script setup>
import { Calendar, Users, ArrowRight } from 'lucide-vue-next'
</script>

<template>
  <section id="book" class="relative py-32 px-6 overflow-hidden">
    <!-- Atmospheric background -->
    <div class="absolute inset-0">
      <img
        src="https://images.unsplash.com/photo-1440581572325-0bea30075d9d?w=1920&q=80"
        alt="Forest canopy"
        class="w-full h-full object-cover opacity-20"
      />
      <div class="absolute inset-0 bg-gradient-to-t from-emerald-950 via-emerald-950/90 to-emerald-950" />
    </div>

    <!-- Light rays -->
    <div class="absolute inset-0 light-rays opacity-40" />

    <div class="relative z-10 max-w-4xl mx-auto text-center">
      <p
        v-motion
        :initial="{ opacity: 0, y: 15 }"
        :visible-once="{ opacity: 1, y: 0, transition: { duration: 600 } }"
        class="text-amber-500/80 text-sm uppercase tracking-[0.25em] mb-4"
      >
        Begin Your Journey
      </p>

      <h2
        v-motion
        :initial="{ opacity: 0, y: 25 }"
        :visible-once="{ opacity: 1, y: 0, transition: { delay: 200, duration: 800 } }"
        class="font-serif text-4xl md:text-5xl lg:text-7xl font-bold mb-6"
      >
        Book Your <span class="text-gradient-gold">Journey</span>
      </h2>

      <p
        v-motion
        :initial="{ opacity: 0, y: 20 }"
        :visible-once="{ opacity: 1, y: 0, transition: { delay: 400, duration: 700 } }"
        class="text-stone-300/80 text-lg max-w-2xl mx-auto mb-12 leading-relaxed"
      >
        Reserve your place among the ancient giants. Limited availability ensures an intimate, unhurried experience with nature's grandest creations.
      </p>

      <!-- Booking form card -->
      <div
        v-motion
        :initial="{ opacity: 0, y: 30 }"
        :visible-once="{ opacity: 1, y: 0, transition: { delay: 600, duration: 800 } }"
        class="glass-card p-8 md:p-10 max-w-2xl mx-auto"
      >
        <div class="grid sm:grid-cols-2 gap-4 mb-6">
          <!-- Check-in -->
          <div>
            <label class="block text-left text-stone-400 text-xs uppercase tracking-wider mb-2">Check-in</label>
            <div class="relative">
              <Calendar :size="16" class="absolute left-3 top-1/2 -translate-y-1/2 text-amber-500/60" />
              <input
                type="date"
                class="w-full pl-10 pr-4 py-3 bg-emerald-900/50 border border-emerald-700/40 rounded-xl text-stone-200 text-sm focus:outline-none focus:border-amber-600/60 transition-colors"
              />
            </div>
          </div>

          <!-- Check-out -->
          <div>
            <label class="block text-left text-stone-400 text-xs uppercase tracking-wider mb-2">Check-out</label>
            <div class="relative">
              <Calendar :size="16" class="absolute left-3 top-1/2 -translate-y-1/2 text-amber-500/60" />
              <input
                type="date"
                class="w-full pl-10 pr-4 py-3 bg-emerald-900/50 border border-emerald-700/40 rounded-xl text-stone-200 text-sm focus:outline-none focus:border-amber-600/60 transition-colors"
              />
            </div>
          </div>

          <!-- Guests -->
          <div>
            <label class="block text-left text-stone-400 text-xs uppercase tracking-wider mb-2">Guests</label>
            <div class="relative">
              <Users :size="16" class="absolute left-3 top-1/2 -translate-y-1/2 text-amber-500/60" />
              <select
                class="w-full pl-10 pr-4 py-3 bg-emerald-900/50 border border-emerald-700/40 rounded-xl text-stone-200 text-sm focus:outline-none focus:border-amber-600/60 transition-colors appearance-none"
              >
                <option>1 Guest</option>
                <option>2 Guests</option>
                <option>3 Guests</option>
                <option>4 Guests</option>
                <option>5+ Guests</option>
              </select>
            </div>
          </div>

          <!-- Accommodation -->
          <div>
            <label class="block text-left text-stone-400 text-xs uppercase tracking-wider mb-2">Accommodation</label>
            <select
              class="w-full px-4 py-3 bg-emerald-900/50 border border-emerald-700/40 rounded-xl text-stone-200 text-sm focus:outline-none focus:border-amber-600/60 transition-colors appearance-none"
            >
              <option>Sentinel Suite</option>
              <option>Heartwood Cabin</option>
              <option>Canopy Treehouse</option>
              <option>Fern Hollow Cottage</option>
            </select>
          </div>
        </div>

        <button
          class="w-full py-4 bg-amber-600 hover:bg-amber-500 text-emerald-950 font-semibold rounded-xl transition-all duration-300 hover:shadow-xl hover:shadow-amber-600/20 flex items-center justify-center gap-3 group"
        >
          <span>Check Availability</span>
          <ArrowRight :size="18" class="transition-transform duration-300 group-hover:translate-x-1" />
        </button>

        <p class="mt-4 text-stone-500 text-xs">
          No charge until your stay is confirmed. Free cancellation up to 48 hours before check-in.
        </p>
      </div>
    </div>
  </section>
</template>
