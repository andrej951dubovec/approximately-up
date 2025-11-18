import { defineStore } from "pinia";

export const useSettingsStore = defineStore("settings", {
  state: () => ({
    steam: "https://store.steampowered.com/app/3904850/Approximately_Up/",
    discord: "https://discord.gg/",
    twitter: "https://x.com",
    youtube: "https://www.youtube.com/",
    homepage: "https://approximately-up.com",
  }),

  actions: {
    open(linkName) {
      const url = this[linkName];
      if (url) {
        window.open(url, "_blank");
      }
    },
  },
});
