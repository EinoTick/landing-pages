<script setup>
import NavBar from './components/NavBar.vue'
import HeroSection from './components/HeroSection.vue'
import ScaleSection from './components/ScaleSection.vue'
import ExpeditionsSection from './components/ExpeditionsSection.vue'
import LodgeSection from './components/LodgeSection.vue'
import MapSection from './components/MapSection.vue'
import BookingCTA from './components/BookingCTA.vue'
import FooterSection from './components/FooterSection.vue'
</script>

<template>
  <div class="min-h-screen bg-emerald-950">
    <NavBar />
    <main>
      <HeroSection />
      <!-- Divider: fog transition -->
      <div class="h-24 bg-gradient-to-b from-emerald-950/0 to-emerald-950 -mt-24 relative z-10" />
      <ScaleSection />
      <!-- Subtle section divider -->
      <div class="max-w-xs mx-auto border-t border-emerald-800/30" />
      <ExpeditionsSection />
      <div class="max-w-xs mx-auto border-t border-emerald-800/30" />
      <LodgeSection />
      <div class="max-w-xs mx-auto border-t border-emerald-800/30" />
      <MapSection />
      <BookingCTA />
    </main>
    <FooterSection />
  </div>
</template>
