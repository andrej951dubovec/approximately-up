<template>
  <section class="au-strip">
    <div class="au-strip__inner">
      <div v-for="item in items" :key="item.title" class="au-strip__item">
        <q-icon :name="item.icon" size="22px" class="au-strip__icon" />
        <div class="au-strip__body">
          <h3 class="au-strip__title">
            {{ item.title }}
          </h3>
          <p class="au-strip__text">
            {{ item.text }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const items = [
  {
    icon: 'mdi-wrench',
    title: 'Modulárne vesmírne lode',
    text: 'Rámy, panely, nádrže, thrustre, káble a senzory. Viac než dvesto komponentov, ktoré môžeš skladať do geniálnych strojov – alebo lietajúcich šrotov.'
  },
  {
    icon: 'mdi-flash',
    title: 'Živá simulácia systémov',
    text: 'Elektrina, logika, prietoky, senzory a automatizácia. Prepoj kontroléry, displeje a poistky – ak to zapojíš zle, iskry a výpadky ti to veľmi rýchlo vysvetlia.'
  },
  {
    icon: 'mdi-rocket-launch-outline',
    title: 'Planéty, misie & crash & rebuild',
    text: 'Preskúmaj množstvo rôznych planét, plň misie s doručovaním a špeciálnymi cieľmi a po každom páde zober trosky, vylepši loď a skús šialenejšiu konfiguráciu.'
  }
];
</script>

<style scoped>
.au-strip {
  background: radial-gradient(circle at top, #020617 0, #020617 45%, #020617);
  padding: 28px 0 24px;
}

.au-strip__inner {
  max-width: 1120px;
  margin: 0 auto;
  padding: 0 16px;
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 16px;
}

.au-strip__item {
  display: flex;
  align-items: flex-start;
  gap: 14px;
  padding: 16px 20px;
  background:
    radial-gradient(circle at top left, rgba(56, 189, 248, 0.18), transparent 55%),
    rgba(15, 23, 42, 0.96);
  border-radius: 999px;
  border: 1px solid rgba(148, 163, 184, 0.24);
  box-shadow: 0 16px 36px rgba(15, 23, 42, 0.9);
  backdrop-filter: blur(18px);
  transition: transform 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease,
    background 0.2s ease;
}

.au-strip__item:hover {
  transform: translateY(-3px);
  box-shadow: 0 22px 48px rgba(15, 23, 42, 0.95);
  border-color: rgba(129, 140, 248, 0.7);
  background:
    radial-gradient(circle at top left, rgba(96, 165, 250, 0.24), transparent 55%),
    rgba(15, 23, 42, 0.98);
}

.au-strip__icon {
  flex-shrink: 0;
  color: #e5e7eb;
}

.au-strip__body {
  min-width: 0;
}

.au-strip__title {
  font-size: 0.95rem;
  font-weight: 600;
  margin-bottom: 4px;
  color: #e5e7eb;
}

.au-strip__text {
  font-size: 0.8rem;
  line-height: 1.5;
  opacity: 0.85;
  color: #cbd5f5;
}

@media (max-width: 959px) {
  .au-strip__inner {
    grid-template-columns: minmax(0, 1fr);
  }

  .au-strip__item {
    border-radius: 20px;
  }
}
</style>
