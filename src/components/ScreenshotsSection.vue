<template>
  <section
    id="screenshots"
    class="py-32 px-6 max-w-6xl mx-auto"
  >
    <h2 class="text-4xl md:text-5xl font-bold text-center text-gray-900 dark:text-white mb-16">
      Aperçu de l'application
    </h2>

    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-16">
      <div
        v-for="(shot, index) in activeScreenshots"
        :key="index"
        class="iphone-wrapper"
        :style="{ '--glow-color': glowColors[index] }"
      >
        <img
          :src="shot"
          class="w-full rounded-4xl transition-all duration-500 hover:scale-[1.02]"
          alt="Screenshot KeepMyWord"
        />
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed } from 'vue'
import { useThemes } from '@/composables/useThemes'

const { isDark } = useThemes()

const base = import.meta.env.BASE_URL

const screenshotsLight = [
  `${base}screenshots/light-1.png`,
  `${base}screenshots/light-2.png`,
  `${base}screenshots/light-3.png`,
  `${base}screenshots/light-4.png`,
  `${base}screenshots/light-5.png`,
  `${base}screenshots/light-6.png`,
  `${base}screenshots/light-7.png`,
  `${base}screenshots/light-8.png`,
]

const screenshotsDark = [
  `${base}screenshots/dark-1.png`,
  `${base}screenshots/dark-2.png`,
  `${base}screenshots/dark-3.png`,
  `${base}screenshots/dark-4.png`,
  `${base}screenshots/dark-5.png`,
  `${base}screenshots/dark-6.png`,
  `${base}screenshots/dark-7.png`,
  `${base}screenshots/dark-8.png`,
]

const glowColors = [
  '#C9A84C',
  '#A0845C',
  '#F5E6C8',
  '#C9A84C',
  '#8B5E2A',
  '#D4B483',
  '#F5E6C8',
  '#C9A84C',
]

const activeScreenshots = computed(() =>
  isDark.value ? screenshotsDark : screenshotsLight
)
</script>

<style scoped>
.iphone-wrapper {
  position: relative;
  display: flex;
  justify-content: center;
}

.iphone-wrapper img {
  filter: drop-shadow(0 0 0px transparent);
  transition: filter 0.5s ease, transform 0.3s ease;
}

.iphone-wrapper:hover img {
  filter: drop-shadow(0 0 18px var(--glow-color));
}
</style>