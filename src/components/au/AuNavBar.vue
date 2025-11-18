<template>
  <header id="app-navbar" :class="['au-nav', { 'au-nav--scrolled': isScrolled }]">
    <div class="au-nav__inner">
      <div class="au-nav__left">
        <img :src="logo" alt="Approximately Up" class="au-nav__logo" />
        <span class="au-nav__title">Approximately Up</span>
      </div>

      <div class="au-nav__right">
        <q-btn
          flat
          dense
          no-caps
          :label="$t('devLogAndComunity')"
          class="au-nav__link"
          @click="$emit('community-click')"
        />

        <q-btn class="btn-wishlist" no-caps @click="$emit('wishlist-click')">
          <q-icon name="mdi-steam" size="20px" />
          <span style="margin-left: 4px;">{{ $t('wishlistOnSteam') }}</span>
        </q-btn>

        <AuLanguageSwitcher />
      </div>
    </div>
  </header>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue"
import AuLanguageSwitcher from "./AuLanguageSwitcher.vue"

defineProps({
  logo: { type: String, required: true }
})

defineEmits(["community-click", "wishlist-click"])

const isScrolled = ref(false)

function onScroll() {
  isScrolled.value = window.scrollY > 32
}

onMounted(() => {
  window.addEventListener("scroll", onScroll, { passive: true })
  onScroll()
})

onBeforeUnmount(() => {
  window.removeEventListener("scroll", onScroll)
})
</script>

<style scoped>
.au-nav {
  position: fixed;
  z-index: 50;
  top: 0;
  left: 0;
  right: 0;
  backdrop-filter: blur(18px);
  background: linear-gradient(
    to bottom,
    rgba(3, 7, 18, 0.92),
    rgba(3, 7, 18, 0.7),
    transparent
  );
  transition: background 0.25s ease, box-shadow 0.25s ease;
}

.au-nav--scrolled {
  background: rgba(3, 7, 18, 0.96);
  box-shadow: 0 10px 30px rgba(15, 23, 42, 0.85);
}

.au-nav__inner {
  max-width: 1160px;
  margin: 0 auto;
  padding: 8px 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.au-nav__left {
  display: flex;
  align-items: center;
  gap: 10px;
}

.au-nav__logo {
  width: 32px;
  height: 32px;
}

.au-nav__title {
  font-weight: 600;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  font-size: 0.8rem;
}

.au-nav__right {
  display: flex;
  align-items: center;
  gap: 10px;
}

.au-nav__link {
  font-size: 0.8rem;
  opacity: 0.85;
}

.au-nav__link:hover {
  opacity: 1;
}

.btn-wishlist {
  display: flex;
  align-items: center;
  padding: 8px 14px;
  border-radius: 12px;
  font-size: 0.78rem;
  font-weight: 600;
  background: #1b2838;
  color: #fff;
  border: 1px solid rgba(255, 255, 255, 0.2);
  transition: 0.2s;
}

.btn-wishlist:hover {
  background: #223142;
  transform: translateY(-1px);
}

@media (max-width: 599px) {
  .au-nav__title {
    display: none;
  }

  .au-nav__inner {
    padding: 8px 12px;
  }

  .btn-wishlist {
    padding: 6px 12px;
    font-size: 0.72rem;
    letter-spacing: 0.1em;
  }
}
</style>
