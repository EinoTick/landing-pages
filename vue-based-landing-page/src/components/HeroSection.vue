<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { ChevronDown } from 'lucide-vue-next'

const parallaxY = ref(0)

function handleScroll() {
  parallaxY.value = window.scrollY * 0.4
}

onMounted(() => window.addEventListener('scroll', handleScroll, { passive: true }))
onUnmounted(() => window.removeEventListener('scroll', handleScroll))
</script>

<template>
  <section class="relative h-screen min-h-[700px] overflow-hidden">
    <!-- Background image with parallax -->
    <div
      class="absolute inset-0 scale-110"
      :style="{ transform: `translateY(${parallaxY}px) scale(1.1)` }"
    >
      <img
        src="https://images.unsplash.com/photo-1587162146766-e06b1189b907?w=1920&q=80"
        alt="Ancient sequoia forest"
        class="w-full h-full object-cover"
      />
    </div>

    <!-- Fog gradient overlays -->
    <div class="absolute inset-0 fog-overlay" />
    <div class="absolute inset-0 fog-overlay-top opacity-60" />

    <!-- Light rays effect -->
    <div class="absolute inset-0 light-rays" />

    <!-- Ambient particles / mist layer -->
    <div class="absolute inset-0 bg-emerald-950/30" />

    <!-- Content -->
    <div class="relative z-10 h-full flex flex-col items-center justify-center px-6 text-center">
      <p
        v-motion
        :initial="{ opacity: 0, y: 20 }"
        :visible-once="{ opacity: 1, y: 0, transition: { delay: 200, duration: 800 } }"
        class="text-amber-500/90 text-sm md:text-base uppercase tracking-[0.3em] font-medium mb-6"
      >
        Aethelgard Giant Forest Park
      </p>

      <h1
        v-motion
        :initial="{ opacity: 0, y: 40 }"
        :visible-once="{ opacity: 1, y: 0, transition: { delay: 500, duration: 1000 } }"
        class="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-[1.05] tracking-tight max-w-5xl"
      >
        Stand Among
        <br />
        <span class="text-gradient-gold">Giants</span>
      </h1>

      <p
        v-motion
        :initial="{ opacity: 0, y: 30 }"
        :visible-once="{ opacity: 1, y: 0, transition: { delay: 800, duration: 800 } }"
        class="mt-6 text-stone-300/80 text-lg md:text-xl max-w-2xl leading-relaxed font-light"
      >
        Walk beneath cathedral canopies older than civilization.
        Experience the primordial grandeur of Earth's tallest living monuments.
      </p>

      <div
        v-motion
        :initial="{ opacity: 0, y: 20 }"
        :visible-once="{ opacity: 1, y: 0, transition: { delay: 1100, duration: 800 } }"
        class="mt-10 flex flex-col sm:flex-row gap-4"
      >
        <a
          href="#book"
          class="px-8 py-3.5 bg-amber-600 hover:bg-amber-500 text-emerald-950 font-semibold rounded-full transition-all duration-300 hover:shadow-xl hover:shadow-amber-600/20 hover:-translate-y-0.5"
        >
          Book Your Journey
        </a>
        <a
          href="#scale"
          class="px-8 py-3.5 border border-stone-400/30 hover:border-amber-500/50 text-stone-200 hover:text-amber-400 rounded-full transition-all duration-300"
        >
          Explore the Park
        </a>
      </div>
    </div>

    <!-- Scroll indicator -->
    <div
      v-motion
      :initial="{ opacity: 0 }"
      :visible-once="{ opacity: 1, transition: { delay: 1500, duration: 1000 } }"
      class="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
    >
      <span class="text-stone-400/60 text-xs uppercase tracking-widest">Scroll</span>
      <ChevronDown :size="20" class="text-stone-400/60 animate-bounce" />
    </div>
  </section>
</template>
