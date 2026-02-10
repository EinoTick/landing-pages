<script setup>
import { Footprints, Moon, Leaf, Camera, Compass, Tent } from 'lucide-vue-next'

const expeditions = [
  {
    title: 'Canopy Walks',
    description: 'Traverse suspended bridges 200 feet above the forest floor among the crown giants.',
    icon: Footprints,
    image: 'https://images.unsplash.com/photo-1448375240586-882707db888b?w=800&q=80',
    span: 'md:col-span-2 md:row-span-2'
  },
  {
    title: 'Night Hiking',
    description: 'Witness bioluminescent fungi and nocturnal wildlife under ancient canopies.',
    icon: Moon,
    image: 'https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?w=600&q=80',
    span: 'md:col-span-1 md:row-span-1'
  },
  {
    title: 'Bio-Tours',
    description: 'Expert-led ecology walks through the living laboratory of the old growth.',
    icon: Leaf,
    image: 'https://images.unsplash.com/photo-1502082553048-f009c37129b9?w=600&q=80',
    span: 'md:col-span-1 md:row-span-1'
  },
  {
    title: 'Photography Expeditions',
    description: 'Golden hour guided shoots in the most photogenic groves on Earth.',
    icon: Camera,
    image: 'https://images.unsplash.com/photo-1476231682828-37e571bc172f?w=600&q=80',
    span: 'md:col-span-1 md:row-span-1'
  },
  {
    title: 'Wilderness Navigation',
    description: 'Master orienteering through unmarked trails in pristine old-growth territory.',
    icon: Compass,
    image: 'https://images.unsplash.com/photo-1425913397330-cf8af2ff40a1?w=600&q=80',
    span: 'md:col-span-1 md:row-span-1'
  },
  {
    title: 'Backcountry Camping',
    description: 'Sleep beneath 2,000-year-old canopies in exclusive primitive campsites.',
    icon: Tent,
    image: 'https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?w=600&q=80',
    span: 'md:col-span-2 md:row-span-1'
  }
]
</script>

<template>
  <section id="expeditions" class="relative py-32 px-6">
    <div class="max-w-7xl mx-auto">
      <!-- Section header -->
      <div class="text-center mb-16">
        <p
          v-motion
          :initial="{ opacity: 0, y: 15 }"
          :visible-once="{ opacity: 1, y: 0, transition: { duration: 600 } }"
          class="text-amber-500/80 text-sm uppercase tracking-[0.25em] mb-4"
        >
          Expeditions
        </p>
        <h2
          v-motion
          :initial="{ opacity: 0, y: 25 }"
          :visible-once="{ opacity: 1, y: 0, transition: { delay: 200, duration: 800 } }"
          class="font-serif text-4xl md:text-5xl lg:text-6xl font-bold"
        >
          Into the <span class="text-gradient-gold">Ancient Grove</span>
        </h2>
        <p
          v-motion
          :initial="{ opacity: 0, y: 20 }"
          :visible-once="{ opacity: 1, y: 0, transition: { delay: 400, duration: 700 } }"
          class="mt-4 text-stone-400 max-w-xl mx-auto"
        >
          Six curated experiences designed to immerse you in the grandeur of the primordial forest.
        </p>
      </div>

      <!-- Bento Grid -->
      <div class="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-5 auto-rows-[220px] md:auto-rows-[200px]">
        <div
          v-for="(exp, index) in expeditions"
          :key="exp.title"
          :class="[exp.span]"
          v-motion
          :initial="{ opacity: 0, y: 30, scale: 0.97 }"
          :visible-once="{
            opacity: 1,
            y: 0,
            scale: 1,
            transition: { delay: 200 + index * 100, duration: 600 }
          }"
        >
          <div class="relative h-full rounded-2xl overflow-hidden group cursor-pointer">
            <!-- Background image -->
            <img
              :src="exp.image"
              :alt="exp.title"
              class="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />

            <!-- Dark overlay -->
            <div class="absolute inset-0 bg-gradient-to-t from-emerald-950 via-emerald-950/60 to-transparent opacity-80 group-hover:opacity-70 transition-opacity duration-500" />

            <!-- Border glow on hover -->
            <div class="absolute inset-0 rounded-2xl border border-emerald-800/30 group-hover:border-amber-600/40 transition-colors duration-500" />

            <!-- Content -->
            <div class="relative z-10 h-full flex flex-col justify-end p-5 md:p-6">
              <component
                :is="exp.icon"
                :size="22"
                class="text-amber-500/80 mb-3 transition-transform duration-300 group-hover:-translate-y-1"
              />
              <h3 class="font-serif text-xl md:text-2xl font-semibold text-stone-100 mb-2">
                {{ exp.title }}
              </h3>
              <p class="text-stone-300/80 text-sm leading-relaxed line-clamp-2">
                {{ exp.description }}
              </p>

              <!-- Hover CTA -->
              <div class="mt-3 flex items-center gap-2 text-amber-500 text-sm font-medium opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                <span>Learn more</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
