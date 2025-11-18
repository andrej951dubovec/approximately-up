<template>
  <q-btn flat dense round class="au-lang-btn">
    <q-icon name="mdi-earth" size="22px" />

    <q-menu anchor="bottom right" self="top right">
      <q-list dense>
        <q-item
          v-for="lang in languages"
          :key="lang.code"
          clickable
          v-close-popup
          :active="locale === lang.code"
          active-class="lang-active"
          @click="setLang(lang.code)"
        >
          <q-item-section avatar>
            <i :class="['lang-flag', `fi fi-${lang.flagCode}`]"></i>
          </q-item-section>

          <q-item-section>
            {{ lang.label }}
          </q-item-section>

          <q-item-section side v-if="locale === lang.code">
            <q-icon name="mdi-check" size="20px" />
          </q-item-section>
        </q-item>
      </q-list>
    </q-menu>
  </q-btn>
</template>

<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { useSettingsStore } from 'src/stores/settings'

const { locale } = useI18n()
const settings = useSettingsStore()
const languages = computed(() => settings.languages)

function setLang(code) {
  locale.value = code
}
</script>

<style scoped>
@import "flag-icons/css/flag-icons.min.css";

.au-lang-btn {
  color: #e5e7eb;
  padding: 4px;
}

:deep(.q-menu__content) {
  background: radial-gradient(circle at top, #0f172a 0, #020617 40%, #000 100%);
  border-radius: 12px;
  box-shadow: 0 18px 45px rgba(0, 0, 0, 0.7);
  padding: 4px 0;
}


.lang-flag {
  width: 28px;
  height: 20px;
  display: inline-block;
  border-radius: 5px;
  background-size: cover;
  background-position: center;
  transition: transform 0.2s ease, opacity 0.2s ease;
}

.q-item:hover {
  background: rgba(255, 255, 255, 0.08);
}

.q-item:hover .lang-flag {
  transform: scale(1.12);
  opacity: 0.95;
}

.lang-active {
  background: rgba(255, 255, 255, 0.18) !important;
  font-weight: 800;
  color: #1b2838;
}

.lang-active .lang-flag {
  transform: scale(1.18);
  opacity: 1;
}
</style>
