<script setup>
import { ref, onMounted } from 'vue'
import { useIntersectionObserver } from '@vueuse/core'
import { Ruler, Clock, TreePine, Mountain } from 'lucide-vue-next'

const stats = [
  { icon: Clock, value: 2000, suffix: '+', unit: 'Years Old', description: 'Ancient sentinels predating empires' },
  { icon: Ruler, value: 300, suffix: 'ft', unit: 'Tall', description: 'Towering above the forest floor' },
  { icon: TreePine, value: 26, suffix: 'ft', unit: 'Diameter', description: 'Trunks wider than a house' },
  { icon: Mountain, value: 48000, suffix: '', unit: 'Acres', description: 'Of protected ancient woodland' }
]

const sectionRef = ref(null)
const isVisible = ref(false)
const animatedValues = ref(stats.map(() => 0))

function animateCounter(index, target) {
  const duration = 2000
  const startTime = performance.now()

  function tick(now) {
    const elapsed = now - startTime
    const progress = Math.min(elapsed / duration, 1)
    const eased = 1 - Math.pow(1 - progress, 3)
    animatedValues.value[index] = Math.floor(eased * target)
    if (progress < 1) requestAnimationFrame(tick)
  }

  requestAnimationFrame(tick)
}

useIntersectionObserver(sectionRef, ([{ isIntersecting }]) => {
  if (isIntersecting && !isVisible.value) {
    isVisible.value = true
    stats.forEach((stat, i) => {
      setTimeout(() => animateCounter(i, stat.value), i * 150)
    })
  }
}, { threshold: 0.3 })

function formatNumber(n) {
  return n.toLocaleString()
}
</script>

<template>
  <section id="scale" ref="sectionRef" class="relative py-32 px-6">
    <!-- Subtle light rays from top -->
    <div class="absolute inset-0 light-rays opacity-50" />

    <div class="relative z-10 max-w-6xl mx-auto">
      <!-- Section header -->
      <div class="text-center mb-20">
        <p
          v-motion
          :initial="{ opacity: 0, y: 15 }"
          :visible-once="{ opacity: 1, y: 0, transition: { duration: 600 } }"
          class="text-amber-500/80 text-sm uppercase tracking-[0.25em] mb-4"
        >
          The Scale
        </p>
        <h2
          v-motion
          :initial="{ opacity: 0, y: 25 }"
          :visible-once="{ opacity: 1, y: 0, transition: { delay: 200, duration: 800 } }"
          class="font-serif text-4xl md:text-5xl lg:text-6xl font-bold"
        >
          Numbers That
          <span class="text-gradient-gold">Humble</span>
        </h2>
      </div>

      <!-- Stats grid -->
      <div class="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
        <div
          v-for="(stat, index) in stats"
          :key="stat.unit"
          v-motion
          :initial="{ opacity: 0, y: 40 }"
          :visible-once="{
            opacity: 1,
            y: 0,
            transition: { delay: 300 + index * 150, duration: 700 }
          }"
          class="glass-card p-6 md:p-8 text-center group hover:border-amber-700/30 transition-all duration-500"
        >
          <component
            :is="stat.icon"
            :size="28"
            class="mx-auto mb-4 text-amber-500/70 group-hover:text-amber-400 transition-colors duration-300"
          />
          <div class="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-stone-100 mb-1">
            {{ formatNumber(animatedValues[index]) }}<span class="text-amber-500">{{ stat.suffix }}</span>
          </div>
          <div class="text-sm uppercase tracking-widest text-amber-600/80 mb-3">
            {{ stat.unit }}
          </div>
          <p class="text-stone-400 text-sm leading-relaxed hidden md:block">
            {{ stat.description }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
