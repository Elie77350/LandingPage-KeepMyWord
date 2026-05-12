<template>
  <footer
    class="py-20 px-6 border-t border-gray-200 dark:border-gray-800 mt-32"
  >
    <div class="max-w-6xl mx-auto flex flex-col items-center gap-6">

      <!-- Logo -->
      <div class="flex items-center gap-3">
        <img :src="`${base}logos/logo-light.png`" alt="KeepMyWord Logo" class="w-8 h-8" />
        <span class="text-xl font-semibold text-gray-900 dark:text-white">
          KeepMyWord
        </span>
      </div>

      <!-- Navigation -->
      <nav class="flex items-center gap-8 text-gray-600 dark:text-gray-400 text-lg">
        <a href="#features" class="hover:text-black dark:hover:text-white transition">
          Features
        </a>
        <a href="#screenshots" class="hover:text-black dark:hover:text-white transition">
          Screenshots
        </a>
        <a href="#why" class="hover:text-black dark:hover:text-white transition">
          Pourquoi
        </a>
        <a href="#download" class="hover:text-black dark:hover:text-white transition">
          Télécharger
        </a>
      </nav>

      <!-- Divider -->
      <div class="w-full h-px bg-gray-200 dark:bg-gray-800 my-6"></div>

      <!-- Copyright -->
      <p class="text-gray-500 dark:text-gray-400 text-sm text-center">
        © 2026 KeepMyWord — Tous droits réservés.
      </p>
    </div>
  </footer>
</template>

<script setup>
const base = import.meta.env.BASE_URL
</script>

<style scoped>
</style>