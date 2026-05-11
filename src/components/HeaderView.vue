<template>
  <header
    class="w-full fixed top-0 left-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-700"
  >
    <div class="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">

      <!-- Logo + App Name -->
      <div class="flex items-center gap-3">
        <img
          :src="isDark ? '/logos/logo-dark.png' : '/logos/logo-light.png'"
          alt="KeepMyWord Logo"
          class="w-8 h-8 transition-opacity duration-300"
        />
        <span class="text-xl font-semibold text-gray-900 dark:text-white">KeepMyWord</span>
      </div>

      <!-- Desktop Navigation -->
      <nav class="hidden md:flex items-center gap-8 text-base text-gray-700 dark:text-gray-300">
        <a href="#features" class="hover:text-black dark:hover:text-white transition">Features</a>
        <a href="#screenshots" class="hover:text-black dark:hover:text-white transition">Screenshots</a>
        <a href="#war-room" class="hover:text-black dark:hover:text-white transition">War Room</a>
      </nav>

      <div class="flex items-center gap-4">

        <!-- CTA Desktop -->
        <a href="#download" class="hidden md:inline-block bg-black text-white dark:bg-white dark:text-black px-5 py-2 rounded-lg font-medium text-base hover:opacity-80 transition">Télécharger</a>

        <!-- Bouton Light/DarkMode -->
        <button
          @click="toggleTheme"
          class="p-2 rounded-xl border border-gray-300 dark:border-gray-700
                 bg-gray-200 dark:bg-black/40
                 hover:bg-gray-300 dark:hover:bg-gray-800
                 transition-all duration-300 shadow-sm hover:shadow-md
                 ring-1 ring-gray-300/70 dark:ring-gray-600/70
                 flex items-center justify-center"
        >
          <!-- ☀️ Soleil (LightMode) -->
          <svg
            v-if="!isDark"
            xmlns="http://www.w3.org/2000/svg"
            class="w-6 h-6 text-gray-700"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="1.8"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M12 3v2.25M18.364 5.636l-1.591 1.591M21 12h-2.25M18.364 18.364l-1.591-1.591M12 18.75V21M7.227 16.773l-1.59 1.591M5.25 12H3M7.227 7.227L5.636 5.636M12 8.25a3.75 3.75 0 100 7.5 3.75 3.75 0 000-7.5z"
            />
          </svg>

          <!-- 🌙 Lune (DarkMode) -->
          <svg
            v-else
            xmlns="http://www.w3.org/2000/svg"
            class="w-6 h-6 text-gray-700 dark:text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="1.8"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M21 12.79A9 9 0 1111.21 3a7 7 0 009.79 9.79z"
            />
          </svg>
        </button>

        <!-- Mobile Menu Button -->
        <button @click="isMenuOpen = true" class="md:hidden text-gray-700 dark:text-gray-300">
          <svg xmlns="http://www.w3.org/2000/svg" class="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>

      </div>
    </div>
  </header>

  <!-- Mobile Menu Overlay -->
  <transition name="fade">
    <div
      v-if="isMenuOpen"
      class="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 md:hidden"
      @click="isMenuOpen = false"
    ></div>
  </transition>

  <!-- Mobile Menu Panel -->
  <transition name="slide">
    <div
      v-if="isMenuOpen"
      class="fixed top-0 right-0 w-64 h-full bg-white dark:bg-gray-900 shadow-xl z-50 p-6 flex flex-col gap-6"
    >
      <!-- Close Button -->
      <button @click="isMenuOpen = false" class="self-end text-gray-700 dark:text-gray-300">
        <svg xmlns="http://www.w3.org/2000/svg" class="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>

      <!-- Mobile Navigation -->
      <nav class="flex flex-col gap-4 text-xl text-gray-700 dark:text-gray-300">
        <a href="#features" @click="isMenuOpen = false">Features</a>
        <a href="#screenshots" @click="isMenuOpen = false">Screenshots</a>
        <a href="#war-room" @click="isMenuOpen = false">War Room</a>
        <a href="#download" @click="isMenuOpen = false" class="mt-4 bg-black text-white dark:bg-white dark:text-black px-4 py-2 rounded-lg text-center text-base">Télécharger</a>
      </nav>
    </div>
  </transition>
</template>

<script setup>
import { ref } from 'vue'
import { useThemes } from '@/composables/useThemes'

const isMenuOpen = ref(false)
const { isDark, toggleTheme } = useThemes()
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.25s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.slide-enter-active,
.slide-leave-active {
  transition: transform 0.25s ease;
}
.slide-enter-from,
.slide-leave-to {
  transform: translateX(100%);
}
</style>