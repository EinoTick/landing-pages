<script setup>
import { MapPin, Phone, Mail, Clock } from 'lucide-vue-next'
</script>

<template>
  <section id="map" class="relative py-32 px-6">
    <div class="max-w-7xl mx-auto">
      <!-- Section header -->
      <div class="text-center mb-16">
        <p
          v-motion
          :initial="{ opacity: 0, y: 15 }"
          :visible-once="{ opacity: 1, y: 0, transition: { duration: 600 } }"
          class="text-amber-500/80 text-sm uppercase tracking-[0.25em] mb-4"
        >
          Find Us
        </p>
        <h2
          v-motion
          :initial="{ opacity: 0, y: 25 }"
          :visible-once="{ opacity: 1, y: 0, transition: { delay: 200, duration: 800 } }"
          class="font-serif text-4xl md:text-5xl lg:text-6xl font-bold"
        >
          Deep in the <span class="text-gradient-gold">Heart</span> of the Forest
        </h2>
      </div>

      <div class="grid md:grid-cols-5 gap-8">
        <!-- SVG Map -->
        <div
          v-motion
          :initial="{ opacity: 0, x: -30 }"
          :visible-once="{ opacity: 1, x: 0, transition: { delay: 300, duration: 800 } }"
          class="md:col-span-3 glass-card p-6 md:p-8 flex items-center justify-center min-h-[400px]"
        >
          <svg viewBox="0 0 600 400" class="w-full h-full max-h-[380px]" xmlns="http://www.w3.org/2000/svg">
            <!-- Stylized topographic map -->
            <defs>
              <radialGradient id="glow" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stop-color="#d97706" stop-opacity="0.15" />
                <stop offset="100%" stop-color="#d97706" stop-opacity="0" />
              </radialGradient>
              <filter id="blur">
                <feGaussianBlur stdDeviation="2" />
              </filter>
            </defs>

            <!-- Topo lines -->
            <ellipse cx="300" cy="200" rx="250" ry="160" fill="none" stroke="#065f46" stroke-width="0.8" opacity="0.4" />
            <ellipse cx="300" cy="200" rx="210" ry="130" fill="none" stroke="#065f46" stroke-width="0.8" opacity="0.5" />
            <ellipse cx="300" cy="200" rx="170" ry="105" fill="none" stroke="#065f46" stroke-width="0.8" opacity="0.6" />
            <ellipse cx="300" cy="200" rx="130" ry="80" fill="none" stroke="#047857" stroke-width="1" opacity="0.7" />
            <ellipse cx="300" cy="200" rx="90" ry="55" fill="none" stroke="#047857" stroke-width="1" opacity="0.8" />
            <ellipse cx="300" cy="200" rx="50" ry="30" fill="none" stroke="#059669" stroke-width="1.2" opacity="0.9" />

            <!-- Glow around pin -->
            <circle cx="300" cy="195" r="60" fill="url(#glow)" />

            <!-- Trail lines -->
            <path d="M120 320 Q200 250 280 210" fill="none" stroke="#065f46" stroke-width="1.5" stroke-dasharray="6 4" opacity="0.6" />
            <path d="M480 300 Q400 240 320 210" fill="none" stroke="#065f46" stroke-width="1.5" stroke-dasharray="6 4" opacity="0.6" />
            <path d="M300 210 L300 100" fill="none" stroke="#065f46" stroke-width="1.5" stroke-dasharray="6 4" opacity="0.5" />

            <!-- Tree icons scattered -->
            <g opacity="0.3" fill="#059669">
              <polygon points="150,180 155,165 160,180" />
              <polygon points="420,160 425,145 430,160" />
              <polygon points="200,280 205,265 210,280" />
              <polygon points="380,270 385,255 390,270" />
              <polygon points="250,130 255,115 260,130" />
              <polygon points="350,310 355,295 360,310" />
              <polygon points="170,240 175,225 180,240" />
              <polygon points="440,220 445,205 450,220" />
            </g>

            <!-- Location pin -->
            <g transform="translate(300, 175)">
              <circle cx="0" cy="0" r="16" fill="#d97706" opacity="0.2" filter="url(#blur)">
                <animate attributeName="r" values="16;22;16" dur="2s" repeatCount="indefinite" />
                <animate attributeName="opacity" values="0.2;0.1;0.2" dur="2s" repeatCount="indefinite" />
              </circle>
              <circle cx="0" cy="0" r="6" fill="#d97706" />
              <circle cx="0" cy="0" r="3" fill="#fbbf24" />
            </g>

            <!-- Label -->
            <text x="300" y="240" text-anchor="middle" fill="#d6d3d1" font-size="11" font-family="Inter, sans-serif" letter-spacing="3" opacity="0.8">
              AETHELGARD
            </text>
            <text x="300" y="258" text-anchor="middle" fill="#a8a29e" font-size="9" font-family="Inter, sans-serif" letter-spacing="2" opacity="0.6">
              GIANT FOREST PARK
            </text>

            <!-- Compass -->
            <g transform="translate(530, 60)" opacity="0.5">
              <circle cx="0" cy="0" r="18" fill="none" stroke="#065f46" stroke-width="1" />
              <text x="0" y="-24" text-anchor="middle" fill="#a8a29e" font-size="9" font-family="Inter, sans-serif">N</text>
              <line x1="0" y1="-14" x2="0" y2="-8" stroke="#d97706" stroke-width="1.5" />
              <line x1="0" y1="8" x2="0" y2="14" stroke="#065f46" stroke-width="1" />
              <line x1="-14" y1="0" x2="-8" y2="0" stroke="#065f46" stroke-width="1" />
              <line x1="8" y1="0" x2="14" y2="0" stroke="#065f46" stroke-width="1" />
            </g>
          </svg>
        </div>

        <!-- Contact info -->
        <div
          v-motion
          :initial="{ opacity: 0, x: 30 }"
          :visible-once="{ opacity: 1, x: 0, transition: { delay: 500, duration: 800 } }"
          class="md:col-span-2 flex flex-col gap-5"
        >
          <div class="glass-card p-6 group hover:border-amber-700/30 transition-all duration-500">
            <div class="flex items-start gap-4">
              <div class="w-10 h-10 rounded-xl bg-amber-600/10 flex items-center justify-center flex-shrink-0">
                <MapPin :size="18" class="text-amber-500" />
              </div>
              <div>
                <h4 class="font-semibold text-stone-200 mb-1">Address</h4>
                <p class="text-stone-400 text-sm leading-relaxed">
                  Aethelgard Giant Forest Park<br />
                  Old Growth Valley Road<br />
                  Sierra Nevada, CA 93271
                </p>
              </div>
            </div>
          </div>

          <div class="glass-card p-6 group hover:border-amber-700/30 transition-all duration-500">
            <div class="flex items-start gap-4">
              <div class="w-10 h-10 rounded-xl bg-amber-600/10 flex items-center justify-center flex-shrink-0">
                <Clock :size="18" class="text-amber-500" />
              </div>
              <div>
                <h4 class="font-semibold text-stone-200 mb-1">Park Hours</h4>
                <p class="text-stone-400 text-sm leading-relaxed">
                  Dawn to Dusk, Year Round<br />
                  Visitor Center: 8 AM – 6 PM<br />
                  Lodge: 24/7 Guest Access
                </p>
              </div>
            </div>
          </div>

          <div class="glass-card p-6 group hover:border-amber-700/30 transition-all duration-500">
            <div class="flex items-start gap-4">
              <div class="w-10 h-10 rounded-xl bg-amber-600/10 flex items-center justify-center flex-shrink-0">
                <Phone :size="18" class="text-amber-500" />
              </div>
              <div>
                <h4 class="font-semibold text-stone-200 mb-1">Contact</h4>
                <p class="text-stone-400 text-sm leading-relaxed">
                  +1 (559) 555-TREE<br />
                  reservations@aethelgard.com
                </p>
              </div>
            </div>
          </div>

          <a
            href="#book"
            class="mt-2 block text-center px-6 py-3.5 bg-amber-600 hover:bg-amber-500 text-emerald-950 font-semibold rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-amber-600/20"
          >
            Plan Your Visit
          </a>
        </div>
      </div>
    </div>
  </section>
</template>
