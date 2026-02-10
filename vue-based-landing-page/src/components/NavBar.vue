<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { Trees, Menu, X } from 'lucide-vue-next'

const scrolled = ref(false)
const mobileOpen = ref(false)

const links = [
  { label: 'The Forest', href: '#scale' },
  { label: 'Expeditions', href: '#expeditions' },
  { label: 'The Lodge', href: '#lodge' },
  { label: 'Location', href: '#map' }
]

function handleScroll() {
  scrolled.value = window.scrollY > 60
}

onMounted(() => window.addEventListener('scroll', handleScroll))
onUnmounted(() => window.removeEventListener('scroll', handleScroll))
</script>

<template>
  <nav
    :class="[
      'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
      scrolled
        ? 'bg-emerald-950/90 backdrop-blur-lg border-b border-emerald-800/30 py-3'
        : 'bg-transparent py-5'
    ]"
  >
    <div class="max-w-7xl mx-auto px-6 flex items-center justify-between">
      <!-- Logo -->
      <a href="#" class="flex items-center gap-3 group">
        <Trees
          :size="28"
          class="text-amber-500 transition-transform duration-300 group-hover:scale-110"
        />
        <span class="font-serif text-lg font-semibold tracking-wide text-stone-100">
          Aethelgard
        </span>
      </a>

      <!-- Desktop links -->
      <div class="hidden md:flex items-center gap-8">
        <a
          v-for="link in links"
          :key="link.href"
          :href="link.href"
          class="text-sm text-stone-400 hover:text-amber-400 transition-colors duration-300 tracking-wide uppercase"
        >
          {{ link.label }}
        </a>
        <a
          href="#book"
          class="ml-4 px-5 py-2 bg-amber-600 hover:bg-amber-500 text-emerald-950 text-sm font-semibold rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-amber-600/20"
        >
          Book Now
        </a>
      </div>

      <!-- Mobile toggle -->
      <button
        class="md:hidden text-stone-300 hover:text-amber-400 transition-colors"
        @click="mobileOpen = !mobileOpen"
      >
        <Menu v-if="!mobileOpen" :size="24" />
        <X v-else :size="24" />
      </button>
    </div>

    <!-- Mobile menu -->
    <Transition
      enter-active-class="transition-all duration-300 ease-out"
      enter-from-class="opacity-0 -translate-y-4"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition-all duration-200 ease-in"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 -translate-y-4"
    >
      <div
        v-if="mobileOpen"
        class="md:hidden bg-emerald-950/95 backdrop-blur-lg border-b border-emerald-800/30 px-6 pb-6 pt-2"
      >
        <a
          v-for="link in links"
          :key="link.href"
          :href="link.href"
          class="block py-3 text-stone-300 hover:text-amber-400 transition-colors text-sm uppercase tracking-wide border-b border-emerald-800/20"
          @click="mobileOpen = false"
        >
          {{ link.label }}
        </a>
        <a
          href="#book"
          class="mt-4 block text-center px-5 py-3 bg-amber-600 hover:bg-amber-500 text-emerald-950 text-sm font-semibold rounded-full transition-all"
          @click="mobileOpen = false"
        >
          Book Your Journey
        </a>
      </div>
    </Transition>
  </nav>
</template>
