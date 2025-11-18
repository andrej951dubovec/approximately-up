// src/stores/useDeviceStore.js
import { defineStore } from "pinia";
import { useQuasar } from "quasar";
import { ref, computed, onMounted, onBeforeUnmount } from "vue";

export const useDeviceStore = defineStore("device", () => {
  const $q = useQuasar();
  const width = ref($q.screen.width);

  const isMobile = computed(() => $q.screen.lt.md);

  const onResize = () => {
    width.value = $q.screen.width;
  };

  onMounted(() => window.addEventListener("resize", onResize));
  onBeforeUnmount(() => window.removeEventListener("resize", onResize));

  return { width, isMobile };
});
