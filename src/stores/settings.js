import { defineStore } from "pinia";

export const useSettingsStore = defineStore("settings", {
  state: () => ({
    steam: "https://store.steampowered.com/app/3904850/Approximately_Up/",
    discord: "https://discord.gg/vHFa4h56V5",
    twitter: "https://x.com",
    youtube: "https://www.youtube.com/",
    homepage: "https://approximately-up.com",

    languages: [
      { code: "en-US", label: "English", flagCode: "gb" },
      { code: "sk-SK", label: "Slovenčina", flagCode: "sk" },
      { code: "cs-CZ", label: "Čeština", flagCode: "cz" },
      { code: "de-DE", label: "Deutsch", flagCode: "de" },
      { code: "pl-PL", label: "Polski", flagCode: "pl" },
      { code: "hu-HU", label: "Magyar", flagCode: "hu" },
      { code: "uk-UA", label: "Українська", flagCode: "ua" },
    ],
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
