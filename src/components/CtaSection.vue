<template>
  <section
    id="download"
    class="py-20 px-6 text-center max-w-3xl mx-auto"
    style="scroll-margin-top: 80px;"
  >
    <!-- Title -->
    <h2 class="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-8">
      Passe à l'action.
    </h2>

    <!-- Subtitle -->
    <p class="text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed mb-12">
      La Parole que tu portes en toi ne peut pas t'être enlevée.
      Commence aujourd'hui — 5 minutes suffisent.
    </p>

    <!-- Badge App Store officiel Apple -->
    <a
      href="https://apps.apple.com/fr/app/keepmyword/id6760440935"
      target="_blank"
      rel="noopener noreferrer"
      class="inline-block mb-16 hover:opacity-80 transition"
    >
      <img
        :src="`${base}Download_on_the_App_Store_Badge_FR_RGB_wht_100217.svg`"
        alt="Télécharger KeepMyWord sur l'App Store"
        class="h-14"
      />
    </a>

    <!-- Decorative Phone -->
    <div class="flex justify-center">
      <img
        :src="`${base}screenshots/light-2.png`"
        alt="Mockup KeepMyWord"
        class="w-64 md:w-80 drop-shadow-2xl rounded-3xl"
      />
    </div>

  </section>
</template>

<script setup>
const base = import.meta.env.BASE_URL
</script>

<style scoped>
</style>