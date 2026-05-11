<template>
  <section id="war-room" class="pt-12 pb-6 px-6 bg-gray-50 dark:bg-gray-900" style="scroll-margin-top: 80px;">
    <div class="max-w-3xl mx-auto">

      <!-- Title -->
      <h2 class="text-3xl font-bold text-center text-gray-900 dark:text-white mb-8">
        War Room — Vue d'ensemble stratégique
      </h2>

      <!-- Images -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-10">
        <div class="warroom-wrapper">
          <img
            src="/screenshots/WarRoom-1.png"
            alt="WarRoom Screenshot 1"
            class="w-full transition-all duration-500 hover:scale-[1.02]"
          />
        </div>

        <div class="warroom-wrapper">
          <img
            src="/screenshots/WarRoom-2.png"
            alt="WarRoom Screenshot 2"
            class="w-full transition-all duration-500 hover:scale-[1.02]"
          />
        </div>
      </div>

    </div>
  </section>
</template>

<script setup>
</script>

<style scoped>
.warroom-wrapper img {
  filter: drop-shadow(0 0 0px transparent);
  transition: filter 0.5s ease, transform 0.3s ease;
}

.warroom-wrapper:hover img {
  filter: drop-shadow(0 0 28px #8B0000) drop-shadow(0 0 12px #cc000088);
}
</style>