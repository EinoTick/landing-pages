<script setup>
import { Trees } from 'lucide-vue-next'
</script>

<template>
  <footer class="relative border-t border-emerald-800/30 py-16 px-6">
    <div class="max-w-7xl mx-auto">
      <div class="grid md:grid-cols-4 gap-10 mb-12">
        <!-- Brand -->
        <div class="md:col-span-1">
          <a href="#" class="flex items-center gap-3 mb-4">
            <Trees :size="24" class="text-amber-500" />
            <span class="font-serif text-lg font-semibold text-stone-200">Aethelgard</span>
          </a>
          <p class="text-stone-500 text-sm leading-relaxed">
            Preserving and sharing the grandeur of Earth's most ancient living monuments since 1934.
          </p>
        </div>

        <!-- Explore -->
        <div>
          <h4 class="text-stone-300 font-semibold text-sm uppercase tracking-wider mb-4">Explore</h4>
          <ul class="space-y-2.5">
            <li><a href="#scale" class="text-stone-500 hover:text-amber-400 text-sm transition-colors">The Forest</a></li>
            <li><a href="#expeditions" class="text-stone-500 hover:text-amber-400 text-sm transition-colors">Expeditions</a></li>
            <li><a href="#lodge" class="text-stone-500 hover:text-amber-400 text-sm transition-colors">Accommodations</a></li>
            <li><a href="#map" class="text-stone-500 hover:text-amber-400 text-sm transition-colors">Getting Here</a></li>
          </ul>
        </div>

        <!-- Information -->
        <div>
          <h4 class="text-stone-300 font-semibold text-sm uppercase tracking-wider mb-4">Information</h4>
          <ul class="space-y-2.5">
            <li><a href="#" class="text-stone-500 hover:text-amber-400 text-sm transition-colors">Park Guidelines</a></li>
            <li><a href="#" class="text-stone-500 hover:text-amber-400 text-sm transition-colors">Conservation</a></li>
            <li><a href="#" class="text-stone-500 hover:text-amber-400 text-sm transition-colors">Accessibility</a></li>
            <li><a href="#" class="text-stone-500 hover:text-amber-400 text-sm transition-colors">FAQ</a></li>
          </ul>
        </div>

        <!-- Newsletter -->
        <div>
          <h4 class="text-stone-300 font-semibold text-sm uppercase tracking-wider mb-4">Stay Connected</h4>
          <p class="text-stone-500 text-sm mb-4">Seasonal updates and exclusive offers.</p>
          <div class="flex gap-2">
            <input
              type="email"
              placeholder="your@email.com"
              class="flex-1 px-4 py-2.5 bg-emerald-900/50 border border-emerald-700/40 rounded-lg text-stone-200 text-sm placeholder:text-stone-600 focus:outline-none focus:border-amber-600/60 transition-colors"
            />
            <button class="px-4 py-2.5 bg-amber-600 hover:bg-amber-500 text-emerald-950 text-sm font-semibold rounded-lg transition-all">
              Join
            </button>
          </div>
        </div>
      </div>

      <!-- Bottom bar -->
      <div class="pt-8 border-t border-emerald-800/20 flex flex-col md:flex-row items-center justify-between gap-4">
        <p class="text-stone-600 text-xs">
          &copy; 2026 Aethelgard Giant Forest Park. All rights reserved.
        </p>
        <div class="flex gap-6">
          <a href="#" class="text-stone-600 hover:text-stone-400 text-xs transition-colors">Privacy</a>
          <a href="#" class="text-stone-600 hover:text-stone-400 text-xs transition-colors">Terms</a>
          <a href="#" class="text-stone-600 hover:text-stone-400 text-xs transition-colors">Cookies</a>
        </div>
      </div>
    </div>
  </footer>
</template>
