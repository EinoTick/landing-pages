<script setup>
import { ref } from 'vue'
import { ChevronLeft, ChevronRight, Star, Wifi, Coffee, Mountain } from 'lucide-vue-next'

const lodges = [
  {
    name: 'The Sentinel Suite',
    description: 'Floor-to-ceiling windows framing ancient sequoias. A private balcony suspended among the canopy.',
    price: '$890',
    image: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800&q=80',
    features: ['Canopy View', 'Private Deck', 'Fireplace']
  },
  {
    name: 'Heartwood Cabin',
    description: 'Handcrafted timber lodge nestled at the base of a 1,500-year-old grove. True forest immersion.',
    price: '$650',
    image: 'https://images.unsplash.com/photo-1587061949409-02df41d5e562?w=800&q=80',
    features: ['Grove Access', 'Hot Tub', 'Kitchen']
  },
  {
    name: 'The Canopy Treehouse',
    description: 'Elevated 60 feet into the forest crown. Wake up to sunrise filtering through ancient branches.',
    price: '$1,200',
    image: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=800&q=80',
    features: ['60ft Elevation', 'Stargazing Deck', 'Butler Service']
  },
  {
    name: 'Fern Hollow Cottage',
    description: 'A secluded riverside retreat surrounded by cathedral ferns and moss-draped old growth.',
    price: '$540',
    image: 'https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?w=800&q=80',
    features: ['Riverside', 'Outdoor Bath', 'Guided Trails']
  }
]

const currentIndex = ref(0)

function next() {
  currentIndex.value = (currentIndex.value + 1) % lodges.length
}

function prev() {
  currentIndex.value = (currentIndex.value - 1 + lodges.length) % lodges.length
}

const featureIcons = { 'Canopy View': Mountain, 'Private Deck': Coffee, 'Fireplace': Star, 'Grove Access': Mountain, 'Hot Tub': Star, 'Kitchen': Coffee, '60ft Elevation': Mountain, 'Stargazing Deck': Star, 'Butler Service': Coffee, 'Riverside': Mountain, 'Outdoor Bath': Star, 'Guided Trails': Coffee }
</script>

<template>
  <section id="lodge" class="relative py-32 px-6 overflow-hidden">
    <!-- Background accent -->
    <div class="absolute inset-0 light-rays opacity-30" />

    <div class="relative z-10 max-w-7xl mx-auto">
      <!-- Section header -->
      <div class="text-center mb-16">
        <p
          v-motion
          :initial="{ opacity: 0, y: 15 }"
          :visible-once="{ opacity: 1, y: 0, transition: { duration: 600 } }"
          class="text-amber-500/80 text-sm uppercase tracking-[0.25em] mb-4"
        >
          The Lodge
        </p>
        <h2
          v-motion
          :initial="{ opacity: 0, y: 25 }"
          :visible-once="{ opacity: 1, y: 0, transition: { delay: 200, duration: 800 } }"
          class="font-serif text-4xl md:text-5xl lg:text-6xl font-bold"
        >
          Sleep Beneath the <span class="text-gradient-gold">Canopy</span>
        </h2>
        <p
          v-motion
          :initial="{ opacity: 0 }"
          :visible-once="{ opacity: 1, transition: { delay: 400, duration: 700 } }"
          class="mt-4 text-stone-400 max-w-xl mx-auto"
        >
          Luxury accommodations designed to dissolve the boundary between comfort and wilderness.
        </p>
      </div>

      <!-- Carousel -->
      <div class="relative">
        <!-- Cards container -->
        <div class="overflow-hidden rounded-2xl">
          <div
            class="flex transition-transform duration-700 ease-out"
            :style="{ transform: `translateX(-${currentIndex * 100}%)` }"
          >
            <div
              v-for="lodge in lodges"
              :key="lodge.name"
              class="w-full flex-shrink-0"
            >
              <div class="grid md:grid-cols-2 gap-0 glass-card overflow-hidden">
                <!-- Image -->
                <div class="relative h-64 md:h-[480px] overflow-hidden">
                  <img
                    :src="lodge.image"
                    :alt="lodge.name"
                    class="w-full h-full object-cover"
                  />
                  <div class="absolute inset-0 bg-gradient-to-r from-transparent to-emerald-950/40 hidden md:block" />
                  <div class="absolute inset-0 bg-gradient-to-t from-emerald-950/60 to-transparent md:hidden" />
                </div>

                <!-- Details -->
                <div class="p-8 md:p-12 flex flex-col justify-center">
                  <div class="flex items-center gap-1 mb-4">
                    <Star v-for="i in 5" :key="i" :size="14" class="fill-amber-500 text-amber-500" />
                  </div>

                  <h3 class="font-serif text-2xl md:text-3xl font-bold text-stone-100 mb-4">
                    {{ lodge.name }}
                  </h3>

                  <p class="text-stone-300/80 leading-relaxed mb-6">
                    {{ lodge.description }}
                  </p>

                  <!-- Features -->
                  <div class="flex flex-wrap gap-3 mb-8">
                    <span
                      v-for="feature in lodge.features"
                      :key="feature"
                      class="flex items-center gap-2 px-3 py-1.5 bg-emerald-900/50 border border-emerald-700/30 rounded-full text-xs text-stone-300 uppercase tracking-wider"
                    >
                      <Wifi :size="12" class="text-amber-500/70" />
                      {{ feature }}
                    </span>
                  </div>

                  <!-- Price & CTA -->
                  <div class="flex items-end justify-between">
                    <div>
                      <span class="text-stone-500 text-sm">From</span>
                      <div class="font-serif text-3xl font-bold text-amber-500">
                        {{ lodge.price }}
                        <span class="text-stone-500 text-base font-sans font-normal">/night</span>
                      </div>
                    </div>
                    <a
                      href="#book"
                      class="px-6 py-2.5 bg-amber-600 hover:bg-amber-500 text-emerald-950 text-sm font-semibold rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-amber-600/20"
                    >
                      Reserve
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Navigation arrows -->
        <button
          @click="prev"
          class="absolute left-3 top-1/2 -translate-y-1/2 z-20 w-10 h-10 bg-emerald-950/70 backdrop-blur-sm border border-emerald-700/40 rounded-full flex items-center justify-center text-stone-300 hover:text-amber-400 hover:border-amber-600/50 transition-all duration-300"
        >
          <ChevronLeft :size="20" />
        </button>
        <button
          @click="next"
          class="absolute right-3 top-1/2 -translate-y-1/2 z-20 w-10 h-10 bg-emerald-950/70 backdrop-blur-sm border border-emerald-700/40 rounded-full flex items-center justify-center text-stone-300 hover:text-amber-400 hover:border-amber-600/50 transition-all duration-300"
        >
          <ChevronRight :size="20" />
        </button>

        <!-- Dots -->
        <div class="flex justify-center gap-2 mt-6">
          <button
            v-for="(_, i) in lodges"
            :key="i"
            @click="currentIndex = i"
            :class="[
              'w-2 h-2 rounded-full transition-all duration-300',
              i === currentIndex
                ? 'bg-amber-500 w-6'
                : 'bg-emerald-700 hover:bg-emerald-600'
            ]"
          />
        </div>
      </div>
    </div>
  </section>
</template>
