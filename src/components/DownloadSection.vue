<!-- <template>
  <section
    id="download"
    class="py-48 px-6 text-center"
    :class="isDark ? 'bg-dark' : 'bg-beige'"
    style="scroll-margin-top: 80px; min-height: 100vh;"
  >
    <div class="max-w-2xl mx-auto">

      <!-- Logo -->
      <img
        :src="isDark ? '/logos/logo-dark.png' : '/logos/logo-light.png'"
        alt="KeepMyWord"
        class="w-20 h-20 mx-auto mb-8"
      />

      <!-- Titre -->
      <h2 class="text-4xl md:text-5xl font-semibold mb-6 tracking-tight"
          :class="isDark ? 'text-white' : 'text-gray-900'">
        Bientôt disponible
      </h2>

      <!-- Sous-titre -->
      <p class="text-xl leading-relaxed mb-4"
         :class="isDark ? 'text-gray-300' : 'text-gray-700'">
        KeepMyWord arrive très prochainement sur l'App Store.
      </p>

      <p class="text-lg italic mb-12"
         :class="isDark ? 'text-gray-400' : 'text-gray-600'">
        « Si quelqu'un m'aime, il gardera ma parole. » — Jean 14:23
      </p>

      <!-- Badge App Store désactivé -->
      <div class="inline-flex items-center gap-3 px-8 py-4 rounded-xl border-2 opacity-50 cursor-not-allowed"
           :class="isDark ? 'border-white/20 text-white' : 'border-gray-300 text-gray-700'">
        <svg xmlns="http://www.w3.org/2000/svg" class="w-7 h-7" viewBox="0 0 24 24" fill="currentColor">
          <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
        </svg>
        <div class="text-left">
          <div class="text-xs opacity-70">Disponible prochainement sur</div>
          <div class="text-lg font-semibold">l'App Store</div>
        </div>
      </div>

    </div>
  </section>
</template>

<script setup lang="ts">
import { inject, computed } from 'vue'
import type { Ref } from 'vue'

const theme = inject<Ref<string>>('theme')
const isDark = computed(() => theme?.value === 'dark')
</script>

<style scoped>
</style> -->