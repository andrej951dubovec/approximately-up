<template>
  <section class="au-hero">
    <div class="hero-bg">
      <img :src="heroImage" alt="Hero" />
    </div>

    <div class="hero-overlay"></div>

    <div class="hero-inner">
      <div class="hero-badge">
        <span class="dot"></span>
        {{ $t('heroBadge') }}
      </div>

      <h1 class="hero-title">
        APPROXIMATELY<br />UP
      </h1>

      <p class="hero-sub">
        {{ $t('heroSubTitle') }}
      </p>

      <!-- CTA -->
      <div class="hero-actions">
        <q-btn class="btn-wishlist" @click="$emit('wishlist-click')">
          <q-icon name="mdi-steam" size="24px" />
          <span style="margin-left: 10px;">{{ $t('wishlistOnSteam') }}</span>
        </q-btn>

        <q-btn class="btn-trailer" @click="$emit('trailer-click')">
          <q-icon name="mdi-play-circle" size="26px" />
          <span style="margin-left: 10px;">{{ $t('watchTrailer') }}</span>
        </q-btn>
      </div>

      <div class="hero-tags">
        {{ $t('heroTags') }}
      </div>
    </div>
  </section>
</template>

<script setup>
defineProps({
  heroImage: { type: String, required: true }
});
</script>

<style scoped>
.au-hero {
  position: relative;
  width: 100%;
  min-height: 85vh;
  padding: 160px 0 160px;
  display: flex;
  align-items: center;
  color: #fff;
  overflow: hidden;
}

.hero-bg img {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: brightness(0.9) contrast(1.05) saturate(1.1);
  transform: translateY(-12px);
  transition: transform 0.6s ease-out;
}

.au-hero:hover .hero-bg img {
  transform: translateY(0);
}

.hero-overlay {
  position: absolute;
  inset: 0;
  background:
    linear-gradient(180deg,
      rgba(0, 0, 0, 0.7) 0%,
      rgba(0, 0, 0, 0.45) 40%,
      rgba(0, 0, 0, 0.2) 70%,
      rgba(0, 0, 0, 0) 100%),
    linear-gradient(90deg,
      rgba(0, 0, 0, 0.85) 0%,
      rgba(0, 0, 0, 0.55) 35%,
      rgba(0, 0, 0, 0.15) 65%,
      rgba(0, 0, 0, 0) 100%);
}

.hero-inner {
  position: relative;
  z-index: 5;
  max-width: 760px;
  padding: 0 24px 0 80px;
}

.hero-badge {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 6px 14px;
  font-size: 0.75rem;
  font-weight: 600;
  letter-spacing: 0.13em;
  background: rgba(255, 255, 255, 0.08);
  border: 1px solid rgba(255, 255, 255, 0.18);
  backdrop-filter: blur(6px);
  border-radius: 18px;
  margin-bottom: 28px;
  opacity: 0;
  transform: translateY(15px);
  animation: hero-fade 0.65s ease forwards 0.12s;
}

.hero-badge .dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #22c55e;
}

.hero-title {
  font-size: 4.6rem;
  font-weight: 800;
  line-height: 1.05;
  letter-spacing: 0.06em;
  margin-bottom: 26px;
  text-shadow: 0 4px 18px rgba(0, 0, 0, 0.55);
  opacity: 0;
  transform: translateY(15px);
  animation: hero-fade 0.7s ease forwards 0.22s;
}

.hero-sub {
  font-size: 1.15rem;
  line-height: 1.55;
  opacity: 0.92;
  max-width: 520px;
  margin-bottom: 32px;
  text-shadow: 0 2px 12px rgba(0, 0, 0, 0.35);
  opacity: 0;
  transform: translateY(15px);
  animation: hero-fade 0.7s ease forwards 0.35s;
}

.hero-actions {
  display: flex;
  gap: 16px;
  margin-bottom: 16px;
  opacity: 0;
  transform: translateY(15px);
  animation: hero-fade 0.7s ease forwards 0.48s;
}

.btn-wishlist,
.btn-trailer {
  display: flex;
  align-items: center;
  border-radius: 14px;
  padding: 12px 24px;
  font-weight: 600;
  color: #fff;
}

.btn-wishlist {
  background: #1b2838;
  border: 1px solid rgba(255, 255, 255, 0.2);
  transition: 0.25s ease;
}

.btn-wishlist:hover {
  background: #223142;
}

.btn-trailer {
  background: rgba(255, 255, 255, 0.08);
  border: 1px solid rgba(255, 255, 255, 0.18);
  backdrop-filter: blur(4px);
  transition: 0.25s ease;
}

.btn-trailer:hover {
  background: rgba(255, 255, 255, 0.14);
}

.hero-tags {
  font-size: 0.84rem;
  opacity: 0.6;
  margin-top: 10px;
  opacity: 0;
  transform: translateY(15px);
  animation: hero-fade 0.7s ease forwards 0.6s;
}

@keyframes hero-fade {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@media (max-width: 768px) {
  .au-hero {
    padding: 110px 0 120px;
  }

  .hero-inner {
    padding: 0 20px;
  }

  .hero-title {
    font-size: 2.8rem;
  }

  .hero-sub {
    font-size: 1rem;
  }
}

@media (max-width: 480px) {
  .hero-actions {
    flex-direction: column;
  }

  .hero-title {
    font-size: 2.2rem;
  }
}
</style>
