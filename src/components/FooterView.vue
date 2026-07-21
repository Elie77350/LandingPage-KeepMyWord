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
        <a href="#features" class="hover:text-black dark:hover:text-white transition">Features</a>
        <a href="#screenshots" class="hover:text-black dark:hover:text-white transition">Screenshots</a>
        <a href="#why" class="hover:text-black dark:hover:text-white transition">Pourquoi</a>
        <a href="#download" class="hover:text-black dark:hover:text-white transition">Télécharger</a>
      </nav>

      <!-- Réseaux sociaux -->
      <div class="flex items-center gap-6">

        <!-- Facebook -->
        <a href="https://www.facebook.com/profile.php?id=61591122015923" target="_blank" rel="noopener noreferrer" aria-label="KeepMyWord sur Facebook" class="text-gray-400 dark:text-gray-500 hover:text-[#1877F2] dark:hover:text-[#1877F2] transition-colors">
          <svg xmlns="http://www.w3.org/2000/svg" class="w-7 h-7" viewBox="0 0 24 24" fill="currentColor">
            <path d="M22 12.06C22 6.5 17.52 2 12 2S2 6.5 2 12.06c0 5.02 3.66 9.18 8.44 9.94v-7.03H7.9v-2.91h2.54V9.84c0-2.5 1.49-3.89 3.78-3.89 1.1 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56v1.87h2.78l-.45 2.91h-2.33V22c4.78-.76 8.44-4.92 8.44-9.94z"/>
          </svg>
        </a>

        <!-- Instagram -->
        <a href="https://www.instagram.com/PLACEHOLDER_INSTAGRAM" target="_blank" rel="noopener noreferrer" aria-label="KeepMyWord sur Instagram" class="text-gray-400 dark:text-gray-500 hover:text-[#E1306C] dark:hover:text-[#E1306C] transition-colors">
          <svg xmlns="http://www.w3.org/2000/svg" class="w-7 h-7" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2.16c3.2 0 3.58.01 4.85.07 1.17.05 1.8.24 2.22.41.56.21.96.47 1.38.89.42.42.68.82.89 1.38.17.42.36 1.05.41 2.22.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.24 1.8-.41 2.22-.21.56-.47.96-.89 1.38-.42.42-.82.68-1.38.89-.42.17-1.05.36-2.22.41-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.8-.24-2.22-.41-.56-.21-.96-.47-1.38-.89-.42-.42-.68-.82-.89-1.38-.17-.42-.36-1.05-.41-2.22C2.17 15.58 2.16 15.2 2.16 12s.01-3.58.07-4.85c.05-1.17.24-1.8.41-2.22.21-.56.47-.96.89-1.38.42-.42.82-.68 1.38-.89.42-.17 1.05-.36 2.22-.41C8.42 2.17 8.8 2.16 12 2.16zm0 1.62c-3.15 0-3.5.01-4.74.07-1.03.05-1.59.21-1.96.36-.49.19-.84.42-1.21.79-.37.37-.6.72-.79 1.21-.15.37-.31.93-.36 1.96-.06 1.24-.07 1.59-.07 4.74s.01 3.5.07 4.74c.05 1.03.21 1.59.36 1.96.19.49.42.84.79 1.21.37.37.72.6 1.21.79.37.15.93.31 1.96.36 1.24.06 1.59.07 4.74.07s3.5-.01 4.74-.07c1.03-.05 1.59-.21 1.96-.36.49-.19.84-.42 1.21-.79.37-.37.6-.72.79-1.21.15-.37.31-.93.36-1.96.06-1.24.07-1.59.07-4.74s-.01-3.5-.07-4.74c-.05-1.03-.21-1.59-.36-1.96-.19-.49-.42-.84-.79-1.21-.37-.37-.72-.6-1.21-.79-.37-.15-.93-.31-1.96-.36-1.24-.06-1.59-.07-4.74-.07zm0 4.27a5.95 5.95 0 110 11.9 5.95 5.95 0 010-11.9zm0 1.62a4.33 4.33 0 100 8.66 4.33 4.33 0 000-8.66zm6.07-3.4a1.4 1.4 0 110 2.8 1.4 1.4 0 010-2.8z"/>
          </svg>
        </a>

        <!-- TikTok -->
        <a href="https://www.tiktok.com/@PLACEHOLDER_TIKTOK" target="_blank" rel="noopener noreferrer" aria-label="KeepMyWord sur TikTok" class="text-gray-400 dark:text-gray-500 hover:text-black dark:hover:text-white transition-colors">
          <svg xmlns="http://www.w3.org/2000/svg" class="w-7 h-7" viewBox="0 0 24 24" fill="currentColor">
            <path d="M16.6 5.82c-.7-.77-1.1-1.77-1.1-2.82h-3.4v13.6c0 1.5-1.21 2.71-2.71 2.71s-2.71-1.21-2.71-2.71 1.21-2.71 2.71-2.71c.3 0 .59.05.86.13V10.7a6.2 6.2 0 00-.86-.06A6.18 6.18 0 003.3 16.82a6.18 6.18 0 006.18 6.18 6.18 6.18 0 006.18-6.18V9.4a8.5 8.5 0 004.94 1.58V7.55c-1.1 0-2.13-.36-2.94-1.04a4.85 4.85 0 01-1.06-.69z"/>
          </svg>
        </a>

      </div>

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