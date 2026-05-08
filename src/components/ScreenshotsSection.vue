<script setup lang="ts">
import { inject, Ref, watch } from 'vue'

type Theme = 'light' | 'dark'

interface Screenshot {
  id: number
  title: string
  light: string
  dark: string
}

const theme = inject<Ref<Theme>>('theme')!

const screenshots: Screenshot[] = [
  { id: 1, title: 'Dashboard', light: '/assets/screens/dashboard-light.png', dark: '/assets/screens/dashboard-dark.png' },
  { id: 2, title: 'Statistiques', light: '/assets/screens/stats-light.png', dark: '/assets/screens/stats-dark.png' },
  { id: 3, title: 'Engagements', light: '/assets/screens/engagements-light.png', dark: '/assets/screens/engagements-dark.png' },
  { id: 4, title: 'Rappels', light: '/assets/screens/reminders-light.png', dark: '/assets/screens/reminders-dark.png' },
  { id: 5, title: 'Vue quotidienne', light: '/assets/screens/daily-light.png', dark: '/assets/screens/daily-dark.png' },
  { id: 6, title: 'Vue hebdomadaire', light: '/assets/screens/weekly-light.png', dark: '/assets/screens/weekly-dark.png' },
  { id: 7, title: 'Paramètres', light: '/assets/screens/settings-light.png', dark: '/assets/screens/settings-dark.png' },
  { id: 8, title: 'Notifications', light: '/assets/screens/notifications-light.png', dark: '/assets/screens/notifications-dark.png' },
]

watch(
  theme,
  (newTheme) => {
    const opposite: Theme = newTheme === 'light' ? 'dark' : 'light'
    screenshots.forEach((sc) => {
      const img = new Image()
      img.src = sc[opposite]
    })
  },
  { immediate: true }
)
</script>

<template>
  <section class="px-6 md:px-12 py-16 md:py-20">
    <h3 class="text-2xl md:text-3xl font-semibold text-gold mb-12 text-center">
      Aperçu de l’application
    </h3>

    <div class="hidden md:grid grid-cols-2 lg:grid-cols-3 gap-8">
      <figure v-for="sc in screenshots" :key="sc.id" class="flex flex-col items-center gap-3">
        <transition name="fade">
          <img
            :key="theme.value + '-' + sc.id"
            :src="theme.value === 'light' ? sc.light : sc.dark"
            :alt="sc.title"
            loading="lazy"
            class="w-full rounded-2xl shadow-lg"
          />
        </transition>
        <figcaption class="text-sm text-dark/80 dark:text-beige/70 text-center">{{ sc.title }}</figcaption>
      </figure>
    </div>

    <div class="md:hidden flex gap-6 overflow-x-auto snap-x snap-mandatory pb-4">
      <figure v-for="sc in screenshots" :key="'m-' + sc.id" class="flex-shrink-0 w-64 snap-center flex flex-col items-center gap-3">
        <transition name="fade">
          <img
            :key="'m-' + theme.value + '-' + sc.id"
            :src="theme.value === 'light' ? sc.light : sc.dark"
            :alt="sc.title"
            loading="lazy"
            class="w-full rounded-2xl shadow-lg"
          />
        </transition>
        <figcaption class="text-xs text-dark/80 dark:text-beige/70 text-center">{{ sc.title }}</figcaption>
      </figure>
    </div>
  </section>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
