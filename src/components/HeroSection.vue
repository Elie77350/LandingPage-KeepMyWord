<template>
  <!-- INTRO -->
  <section
    id="intro"
    class="max-w-4xl mx-auto px-6 pt-48 pb-36 text-center"
  >
    <h1 class="text-6xl md:text-7xl font-semibold text-gray-900 dark:text-white mb-10 tracking-tight">
      Pourquoi KeepMyWord
    </h1>

    <p class="text-2xl md:text-3xl text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
      La Parole ne s'oublie pas.<br />
      Elle se grave.
    </p>

    <p class="text-gray-700 dark:text-gray-300 text-xl leading-relaxed mb-12">
      Des millions de croyants lisent la Bible chaque jour. Pourtant, combien peuvent citer un seul verset au moment où ils en ont le plus besoin ?<br />
      <strong>KeepMyWord est né de cette question.</strong>
    </p>

    <blockquote class="text-3xl md:text-4xl italic text-gray-900 dark:text-white font-light mb-16">
      « Ta parole est une lampe à mes pieds, et une lumière sur mon sentier. »<br />
      <span class="text-gray-600 dark:text-gray-400 text-lg">Psaume 119:105</span>
    </blockquote>
  </section>

  <!-- FEATURES -->
  <section
    id="features"
    class="max-w-7xl mx-auto px-6 pb-44 grid grid-cols-1 md:grid-cols-4 gap-8"
    style="scroll-margin-top: 120px;"
  >
    <div class="feature-card">
      <span class="feature-number">01</span>
      <h3 class="feature-title">La science au service de la foi</h3>
      <p class="feature-desc">
        La répétition espacée est la méthode de mémorisation la plus efficace prouvée par la neuroscience.
        KeepMyWord l'applique à la Parole de Dieu — pour qu'elle s'ancre profondément, durablement.
      </p>
    </div>

    <div class="feature-card">
      <span class="feature-number">02</span>
      <h3 class="feature-title">Combat spirituel, arme prête</h3>
      <p class="feature-desc">
        War Room te plonge dans des combats spirituels réels, avec une voix qui t'accompagne,
        des prières profondes et des versets qui deviennent des armes — pas des souvenirs flous.
      </p>
    </div>

    <div class="feature-card">
      <span class="feature-number">03</span>
      <h3 class="feature-title">La Bible entière, toujours là</h3>
      <p class="feature-desc">
        66 livres. 30 309 versets. Louis Segond 1910.
        Cherche par référence, par mot-clé, par thème. Surligne. Mémorise. Partage.
        Ta Bible de poche, enfin vivante.
      </p>
    </div>

    <div class="feature-card">
      <span class="feature-number">04</span>
      <h3 class="feature-title">Conçu pour tous</h3>
      <p class="feature-desc">
        Que tu commences tout juste ou que tu mémorises depuis des années,
        KeepMyWord s'adapte à ton niveau, à ton rythme, à ta vie — 5 minutes par jour suffisent.
      </p>
    </div>
  </section>
</template>

<style scoped>
.feature-card {
  padding: 2.5rem;
  border-radius: 28px;
  background: white;
  border: 1px solid rgba(0, 0, 0, 0.08);
  box-shadow: 0 2px 20px rgba(0, 0, 0, 0.06);
  display: flex;
  flex-direction: column;
  gap: 1rem;
  transition: all 0.4s ease;
}

:global(.dark) .feature-card {
  background: #111827;
  border-color: rgba(255, 255, 255, 0.08);
  box-shadow: 0 2px 20px rgba(0, 0, 0, 0.3);
}

.feature-card:hover {
  transform: translateY(-6px);
  box-shadow:
    0 0 40px rgba(201, 168, 76, 0.12),
    0 12px 40px rgba(0, 0, 0, 0.1);
}

:global(.dark) .feature-card:hover {
  box-shadow:
    0 0 40px rgba(201, 168, 76, 0.15),
    0 12px 40px rgba(0, 0, 0, 0.4);
}

.feature-number {
  font-size: 3.5rem;
  font-weight: 800;
  line-height: 1;
  background: linear-gradient(135deg, #C9A84C, #8B5E2A);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  letter-spacing: -0.02em;
}

.feature-title {
  font-size: 1.2rem;
  font-weight: 700;
  color: #111827;
  line-height: 1.3;
  letter-spacing: -0.01em;
}

:global(.dark) .feature-title {
  color: #f9fafb;
}

.feature-desc {
  font-size: 1rem;
  color: #6b7280;
  line-height: 1.75;
}

:global(.dark) .feature-desc {
  color: #9ca3af;
}
</style>