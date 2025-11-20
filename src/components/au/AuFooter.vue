<template>
  <footer class="au-footer">
    <div class="au-footer__inner">
      <div class="au-footer__brand">
        <div class="au-footer__brand-logo">
          <q-img class="au-footer__logo" :src="logo" alt="Approximately Up logo" width="60" height="60" />
        </div>
        <div class="au-footer__brand-text">
          <h3>Approximately Up</h3>
          <p>{{ $t('sandBoxBouildSpacecraft') }}</p>
        </div>
      </div>

      <div class="au-footer__cols">
        <div class="au-footer__col">
          <h4>{{ $t('footerGame') }}</h4>
          <ul>
            <li><a @click.prevent="scrollToSection('trailer')">{{ $t('footerTrailer') }}</a></li>
            <li><a @click.prevent="scrollToSection('features')">{{ $t('footerHowToPlay') }}</a></li>
            <li><a @click.prevent="scrollToSection('gallery')">{{ $t('footerGallery') }}</a></li>
          </ul>
        </div>

        <div class="au-footer__col">
          <h4>{{ $t('devLogAndComunity') }}</h4>
          <ul>
            <li>
              <a :href="steamLink" target="_blank" rel="noopener">{{ $t('footerSteam') }}</a>
            </li>
            <li>
              <a :href="discordLink" target="_blank" rel="noopener">{{ $t('footerDiscord') }}</a>
            </li>
          </ul>
        </div>

        <div class="au-footer__col au-footer__col--cta">
          <h4>{{ $t('wishlistOnSteam') }}</h4>
          <p>{{ $t('wishListOnSteamWithEarlyAccess') }}</p>

          <q-btn class="au-footer__cta" no-caps @click="$emit('wishlist-click')">
            <q-icon name="mdi-steam" size="18px" />
            <span style="margin-left: 4px;">{{ $t('wishlistOnSteam') }}</span>
          </q-btn>
        </div>
      </div>
    </div>

    <div class="au-footer__bottom">
      <div class="au-footer__bottom-inner">
        <span class="au-footer__copy">© {{ year }} Approximately Games</span>

        <div class="au-footer__social">
          <a :href="steamLink" target="_blank">
            <q-icon name="mdi-steam" size="24px" />
          </a>
          <a :href="discordLink" target="_blank">
            <q-icon name="mdi-discord" size="24px" />
          </a>
          <a href="https://x.com" target="_blank">
            <q-icon name="mdi-twitter" size="24px" />
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { useSettingsStore } from 'src/stores/settings';
import { computed, onMounted } from 'vue';

const settings = useSettingsStore();
const year = new Date().getFullYear();
const steamLink = computed(() => settings.steam);
const discordLink = computed(() => settings.discord);

let nav = null;

defineProps({
  logo: { type: String, required: true }
});

onMounted(() => {
  nav = document.getElementById('navbar');
});

function scrollToSection(id) {
  const el = document.getElementById(id);
  if (!el) return;

  const height = nav?.offsetHeight || 0;

  const top =
    el.getBoundingClientRect().top +
    window.scrollY -
    height;

  window.scrollTo({
    top,
    behavior: 'smooth'
  });
}
</script>

<style scoped>
.au-footer {
  position: relative;
  background: radial-gradient(circle at top, var(--color-primary-deep) 0, #000 60%, #000);
  color: var(--color-surface-light);
  padding-top: 40px;
  opacity: 0;
  animation: footer-fade 0.7s ease 0.2s forwards;
}

.au-footer::before {
  content: "";
  position: absolute;
  top: 0;
  left: 10%;
  right: 10%;
  height: 1px;
  background: linear-gradient(90deg,
      transparent,
      rgba(var(--color-accent-soft-rgb), 0.7),
      transparent);
  opacity: 0.5;
}

/* MAIN LAYOUT */
.au-footer__inner {
  max-width: 1120px;
  margin: 0 auto;
  padding: 0 16px 32px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: flex-start;
  gap: 32px;
}

/* BRAND BLOCK */
.au-footer__brand {
  display: flex;
  align-items: center;
  gap: 14px;
  flex: 1 1 220px;
  min-width: 0;
}

.au-footer__brand-logo {
  position: relative;
  display: inline-flex;
}

.au-footer__brand-logo::before {
  content: "";
  position: absolute;
  inset: -8px;
  border-radius: 22px;
  background: radial-gradient(circle at 30% 0,
      rgba(var(--color-accent-rgb), 0.4),
      transparent 60%);
  filter: blur(6px);
  opacity: 0.9;
  z-index: -1;
}

.au-footer__logo {
  width: 60px;
  height: 60px;
  border-radius: 18px;
  object-fit: cover;
  box-shadow: 0 18px 50px rgba(var(--color-base-rgb), 0.9);
}

.au-footer__brand-text h3 {
  font-size: 1.1rem;
  margin-bottom: 4px;
}

.au-footer__brand-text p {
  font-size: 0.85rem;
  color: var(--color-surface);
}

/* COLUMNS */
.au-footer__cols {
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
  flex: 2 1 360px;
}

.au-footer__col {
  flex: 1 1 160px;
}

.au-footer__col h4 {
  font-size: 0.9rem;
  text-transform: uppercase;
  letter-spacing: 0.16em;
  margin-bottom: 8px;
}

.au-footer__col ul {
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  gap: 4px;
  font-size: 0.85rem;
}

.au-footer__col a {
  color: var(--color-surface);
  text-decoration: none;
  opacity: 0.85;
}

.au-footer__col a:hover {
  opacity: 1;
  text-decoration: underline;
}

.au-footer__col--cta p {
  font-size: 0.84rem;
  margin-bottom: 18px;
}

.au-footer__cta {
  width: 100%;
  justify-content: center;
  display: flex;
  align-items: center;
  padding: 8px 16px;
  border-radius: 12px;
  font-size: 0.78rem;
  font-weight: 600;
  letter-spacing: 0.08em;
  background: var(--color-secondary);
  color: var(--color-surface-light);
  border: 1px solid rgba(255, 255, 255, 0.2);
  box-shadow: 0 10px 28px rgba(var(--color-base-rgb), 0.6);
  transition: all 0.25s ease;
}

.au-footer__cta:hover {
  background: var(--color-primary);
  transform: translateY(-1px);
  box-shadow: 0 14px 36px rgba(var(--color-base-rgb), 0.75);
}

/* BOTTOM BAR */
.au-footer__bottom {
  border-top: 1px solid rgba(var(--color-base-rgb), 0.9);
  background: radial-gradient(circle at top, rgba(var(--color-base-rgb), 0.9), #000);
  padding: 14px 0 16px;
}

.au-footer__bottom-inner {
  max-width: 1120px;
  margin: 0 auto;
  padding: 8px 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  gap: 12px;
}

.au-footer__copy {
  font-size: 0.8rem;
  opacity: 0.9;
}

.au-footer__social {
  display: flex;
  gap: 12px;
}

.au-footer__social a {
  color: var(--color-surface-light);
  opacity: 0.85;
}

.au-footer__social a:hover {
  opacity: 1;
}

@keyframes footer-fade {
  to {
    opacity: 1;
  }
}

@media (max-width: 960px) {
  .au-footer__inner {
    gap: 24px;
  }
}

@media (max-width: 640px) {
  .au-footer {
    padding-top: 28px;
  }

  .au-footer__inner {
    flex-direction: column;
    align-items: flex-start;
    padding: 0 16px 24px;
  }

  .au-footer__brand {
    flex-direction: row;
    justify-content: flex-start;
  }

  .au-footer__logo {
    width: 46px;
    height: 46px;
  }

  .au-footer__brand-text p {
    font-size: 0.8rem;
  }

  .au-footer__cols {
    flex-direction: column;
    width: 100%;
  }

  .au-footer__col {
    flex: 1 1 auto;
  }

  .au-footer__cta {
    width: 100%;
    padding: 8px 14px;
    font-size: 0.76rem;
  }
}
</style>
