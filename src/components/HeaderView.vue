<script setup lang="ts">
import { inject } from 'vue'

const theme = inject<'light' | 'dark'>('theme')
const toggleTheme = inject<() => void>('toggleTheme')
</script>

<template>
  <header
    class="flex justify-between items-center px-8 py-4 backdrop-blur-md
           bg-white/40 dark:bg-dark/40 border-b border-white/20 dark:border-dark/20">
    
    <h1 class="text-gold font-bold text-2xl tracking-wide">KeepMyWord</h1>

    <button
      @click="toggleTheme"
      class="px-4 py-2 rounded-lg text-sm font-medium
             bg-brown text-beige hover:bg-gold hover:text-dark transition">
      {{ theme === 'light' ? '🌙 Mode sombre' : '☀️ Mode clair' }}
    </button>
  </header>
</template>
