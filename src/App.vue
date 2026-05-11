<script setup lang="ts">
import { ref, provide } from 'vue'

import HeaderView from './components/HeaderView.vue'
import HeroSection from './components/HeroSection.vue'
import ScreenshotsSection from './components/ScreenshotsSection.vue'
import WarRoomSection from './components/WarRoomSection.vue'
import CtaSection from './components/CtaSection.vue'
import FooterView from './components/FooterView.vue'

type Theme = 'light' | 'dark'

const theme = ref<Theme>('light')

const toggleTheme = () => {
  theme.value = theme.value === 'light' ? 'dark' : 'light'
}

provide('theme', theme)
provide('toggleTheme', toggleTheme)
</script>

<template>
  <div :class="theme" class="min-h-screen transition-colors duration-500 bg-beige dark:bg-dark">
    <HeaderView />

    <main>
      <HeroSection />
      <ScreenshotsSection />
      <WarRoomSection />
      <CtaSection />
    </main>

    <FooterView />
  </div>
</template>