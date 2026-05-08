<script setup lang="ts">
import { ref, provide } from 'vue'

import HeaderView from './HeaderView.vue'
import HeroSection from './HeroSection.vue'
import FeaturesSection from './FeaturesSection.vue'
import ScreenshotsSection from './ScreenshotsSection.vue'
import CitationSection from './CitationSection.vue'
import CtaSection from './CtaSection.vue'
import WarRoomSection from './WarRoomSection.vue'
import FooterView from './FooterView.vue'

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
    <HeroSection />
    <FeaturesSection />
    <ScreenshotsSection />
    <CitationSection />
    <CtaSection />
    <WarRoomSection />
    <FooterView />
  </div>
</template>
