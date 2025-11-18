<template>
  <footer class="au-footer">
    <div class="au-footer__inner">
      <div class="au-footer__brand">
        <div class="au-footer__brand-logo">
          <q-img class="au-footer__logo" :src="logo" alt="Approximately Up logo" width="60" height="60" />
        </div>
        <div class="au-footer__brand-text">
          <h3>Approximately Up</h3>
          <p>
            Sandbox, kde z rozbitého chaosu staviaš funkčné vesmírne stroje –
            a testuješ, čo všetko ešte uletí.
          </p>
        </div>
      </div>

      <div class="au-footer__cols">
        <div class="au-footer__col">
          <h4>Hra</h4>
          <ul>
            <li><a href="#au-trailer">Trailer</a></li>
            <li><a href="#features">Ako sa hrá</a></li>
            <li><a href="#gallery">Galéria</a></li>
          </ul>
        </div>

        <div class="au-footer__col">
          <h4>Komunita</h4>
          <ul>
            <li>
              <a :href="steamLink" target="_blank" rel="noopener">
                Steam stránka
              </a>
            </li>
            <li>
              <a href="https://discord.gg/" target="_blank" rel="noopener">
                Discord (čoskoro)
              </a>
            </li>
          </ul>
        </div>

        <div class="au-footer__col au-footer__col--cta">
          <h4>Wishlist na Steame</h4>
          <p>
            Pridaj si hru do wishlistu a dostaneš info, keď bude k dispozícii
            Early Access.
          </p>

          <q-btn class="au-footer__cta" no-caps @click="$emit('wishlist-click')">
            <q-icon name="mdi-steam" size="18px" />
            <span style="margin-left: 4px;">Wishlist on Steam</span>
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
          <a href="https://discord.gg/" target="_blank">
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
import { computed } from 'vue';

const settings = useSettingsStore();
const year = new Date().getFullYear();
const steamLink = computed(() => settings.steam);

defineProps({
  logo: { type: String, required: true }
});

</script>

<style scoped>
.au-footer {
  position: relative;
  background: radial-gradient(circle at top, #020617 0, #000 60%, #000);
  color: #f9fafb;
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
  background: linear-gradient(90deg, transparent, rgba(129, 140, 248, 0.7), transparent);
  opacity: 0.5;
}

.au-footer__inner {
  max-width: 1120px;
  margin: 0 auto;
  padding: 0 16px 28px;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 32px;
}

.au-footer__brand {
  display: flex;
  align-items: center;
  gap: 14px;
  flex: 0 0 320px;
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
  background: radial-gradient(circle at 30% 0, rgba(96, 165, 250, 0.4), transparent 60%);
  filter: blur(6px);
  opacity: 0.9;
  z-index: -1;
}

.au-footer__logo {
  width: 60px;
  height: 60px;
  border-radius: 18px;
  object-fit: cover;
  box-shadow: 0 18px 50px rgba(15, 23, 42, 0.9);
}

.au-footer__brand-text h3 {
  font-size: 1.1rem;
  margin-bottom: 4px;
}

.au-footer__brand-text p {
  font-size: 0.85rem;
  color: #e5e7eb;
}

.au-footer__cols {
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
  flex: 1 1 auto;
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
  color: #e5e7eb;
  text-decoration: none;
  opacity: 0.85;
}

.au-footer__col a:hover {
  opacity: 1;
  text-decoration: underline;
}

.au-footer__col--cta p {
  font-size: 0.84rem;
  margin-bottom: 10px;
}

.au-footer__cta {
  width: 100%;
  justify-content: center;
  display: flex;
  align-items: center;
  padding: 6px 14px;
  border-radius: 12px;
  font-size: 0.78rem;
  font-weight: 600;
  letter-spacing: 0.08em;
  background: #1b2838;
  color: #f9fafb;
  border: 1px solid rgba(255, 255, 255, 0.2);
  box-shadow: 0 10px 28px rgba(15, 23, 42, 0.6);
  transition: all 0.25s ease;
}

.au-footer__cta:hover {
  background: #223142;
  transform: translateY(-1px);
  box-shadow: 0 14px 36px rgba(15, 23, 42, 0.75);
}

.au-footer__bottom {
  border-top: 1px solid rgba(15, 23, 42, 0.9);
  background: radial-gradient(circle at top, rgba(15, 23, 42, 0.9), #000);
  padding: 14px 0 16px;
}

.au-footer__bottom-inner {
  max-width: 1120px;
  margin: 0 auto;
  padding: 8px 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  text-align: center;
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
  color: #f9fafb;
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
    flex-direction: column;
    align-items: center;
  }

  .au-footer__brand,
  .au-footer__cols {
    width: 100%;
    max-width: 640px;
  }

  .au-footer__brand {
    justify-content: center;
  }
}

@media (max-width: 640px) {
  .au-footer__logo {
    width: 46px;
    height: 46px;
  }

  .au-footer__brand-text p {
    font-size: 0.8rem;
  }

  .au-footer__cols {
    flex-direction: column;
  }

  .au-footer__cta {
    padding: 6px 12px;
    font-size: 0.76rem;
  }
}
</style>
