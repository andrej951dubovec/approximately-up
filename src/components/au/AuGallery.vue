<template>
  <section class="au-gallery">
    <div class="au-gallery__inner">
      <header class="au-section-header">
        <p class="au-section-header__eyebrow">Moments from the chaos</p>
        <h2>Build, crash, repeat</h2>
        <p>Krátky výber momentov, kde to letelo… alebo práve prestalo letieť.</p>
      </header>

      <div class="au-gallery__grid">
        <q-img v-for="(shot, i) in shots" :key="i" :src="shot.src" :alt="shot.alt" loading="lazy"
          :class="['au-gallery__item', itemClass(i)]" @click="openZoom(shot)">
          <div class="au-gallery__overlay">
            <div class="au-gallery__caption">{{ shot.caption }}</div>
          </div>
        </q-img>
      </div>
    </div>

    <q-dialog v-model="zoomOpen" maximized>
      <div class="au-zoom">
        <q-btn flat round icon="mdi-close" class="au-zoom__close" @click="zoomOpen = false" />
        <img :src="zoomData.src" class="au-zoom__img" />
        <div class="au-zoom__caption">{{ zoomData.caption }}</div>
      </div>
    </q-dialog>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const { shots } = defineProps({
  shots: { type: Array, required: true }
})

const zoomOpen = ref(false)
const zoomData = ref({ src: '', caption: '' })

const openZoom = (shot) => {
  zoomData.value = shot
  zoomOpen.value = true
}

const itemClass = () => 'au-gallery__item--hero'
</script>

<style scoped>
.au-gallery {
  background: radial-gradient(circle at top, var(--color-primary-deep) 0, var(--color-primary-deep) 65%, #000);
  color: var(--color-surface);
  padding: 52px 0 60px;
}

.au-gallery__inner {
  max-width: 1120px;
  margin: 0 auto;
  padding: 0 16px;
}

.au-section-header {
  text-align: center;
  margin-bottom: 26px;
}

.au-section-header__eyebrow {
  text-transform: uppercase;
  letter-spacing: 0.18em;
  font-size: 0.78rem;
  color: var(--color-accent-medium);
  margin-bottom: 6px;
}

.au-section-header h2 {
  font-size: 1.7rem;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  margin-bottom: 8px;
}

.au-section-header p {
  opacity: 0.8;
}

.au-gallery__grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  grid-auto-rows: 130px;
  gap: 16px;
}

.au-gallery__item {
  height: 100%;
  border-radius: 22px;
  overflow: hidden;
  position: relative;
  box-shadow: 0 20px 60px rgba(var(--color-base-rgb), 0.9);
  border: 1px solid rgba(var(--color-slate-mid-rgb), 0.18);
  transform-origin: center;
  transition: transform 220ms ease, box-shadow 220ms ease;
  cursor: zoom-in;
}

.au-gallery__item--hero {
  grid-column: span 2;
  grid-row: span 2;
}

.au-gallery__item:hover {
  transform: translateY(-4px) scale(1.015);
  box-shadow: 0 26px 80px rgba(var(--color-accent-mid-rgb), 0.55);
}

.au-gallery__overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(to top, rgba(var(--color-base-rgb), 0.95), rgba(var(--color-base-rgb), 0.1) 55%);
  display: flex;
  align-items: flex-end;
  padding: 10px 14px;
}

.au-gallery__caption {
  font-size: 0.84rem;
  opacity: 0.95;
}

.au-zoom {
  position: relative;
  width: 100%;
  height: 100%;
  background: radial-gradient(circle at top, var(--color-primary-deep) 0, #000 70%);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 24px;
  overflow: hidden;
}

.au-zoom__close {
  position: absolute;
  top: 18px;
  right: 22px;
  z-index: 20;
  background: rgba(var(--color-base-rgb), 0.9);
  color: var(--color-surface);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.6);
}

.au-zoom__img {
  max-width: 100%;
  max-height: 100%;
  border-radius: 22px;
  overflow: hidden;
  box-shadow: 0 30px 120px rgba(var(--color-base-rgb), 0.9);
  z-index: 5;
}

.au-zoom__caption {
  position: absolute;
  left: 50%;
  bottom: 24px;
  transform: translateX(-50%);
  padding: 8px 14px;
  border-radius: 999px;
  background: rgba(var(--color-base-rgb), 0.9);
  font-size: 0.85rem;
  color: var(--color-surface);
  backdrop-filter: blur(10px);
  z-index: 10;
}

@media (max-width: 959px) {
  .au-gallery__grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    grid-auto-rows: 120px;
  }

  .au-gallery__item--hero {
    grid-column: span 2;
  }
}

@media (max-width: 599px) {
  .au-gallery__grid {
    grid-template-columns: minmax(0, 1fr);
    grid-auto-rows: 160px;
  }

  .au-gallery__item--hero {
    grid-column: span 1;
    grid-row: span 1;
  }
}
</style>
