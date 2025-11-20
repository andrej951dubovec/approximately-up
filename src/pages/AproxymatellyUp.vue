<template>
  <q-page class="au-page">
    <AuNavBar id="navbar" :logo="logoIcon" @wishlist-click="openSteam" @community-click="openDiscord" />

    <div class="au-page__content">
      <AuHero :hero-image="heroHeader" @wishlist-click="openSteam" @trailer-click="scrollToTrailer" />

      <au-feature-strip />

      <au-story-sections id="features" :images="storyImages" />
      <au-gallery id="gallery" :shots="galleryShots" />

      <AuTrailerSection id="trailer" :video-url="trailerUrl" />

      <AuShowcaseRow :image="cockpit" title="Komplexné systémy, jasné rozhranie"
        text="Riadiace panely, prepínače, displeje, telemetria – všetko navrhnuté tak, aby si presne vedel, prečo to tentoraz nefunguje."
        :bullets="[
          'Prepojená elektrina, logika a thrustre',
          'Čitateľná spätná väzba pri chybe',
          'Pohľad z kokpitu, hangáru aj exteriéru'
        ]" />

      <AuShowcaseRow :image="jungleCrash" :reverse="true" title="Každý pád rozpráva príbeh"
        text="Rozsypané rámy, odtrhnuté motory a trosky všade navôkol. Game over? Skôr nový materiál na ďalší pokus."
        :bullets="[
          'Simulované poškodenie a rozpad konštrukcií',
          'Možnosť znovu využiť trosky',
          'Rozličné planéty a podmienky prostredia'
        ]" />

      <AuFooter :logo="logoIcon" @wishlist-click="openSteam" />
    </div>

    <q-page-scroller position="bottom-right" :scroll-offset="300" :duration="300">
      <q-btn class="au-scroll-top" round dense icon="keyboard_arrow_up" />
    </q-page-scroller>
  </q-page>
</template>

<script setup>
import AuNavBar from "src/components/au/AuNavBar.vue";
import AuHero from "src/components/au/AuHero.vue";
import AuGallery from "src/components/au/AuGallery.vue";
import AuShowcaseRow from "src/components/au/AuShowcaseRow.vue";
import AuFooter from "src/components/au/AuFooter.vue";
import AuTrailerSection from "src/components/au/AuTrailerSection.vue";
import AuFeatureStrip from 'src/components/au/AuFeatureStrip.vue';
import AuStorySections from "src/components/au/AuStorySections.vue";


import heroHeader from "src/assets/Artwork_Záhlaví-v-knihovně.png";
import logoIcon from "src/assets/Artwork_Unity-Icon.png";

import cockpit from "src/assets/014.png";
import jungleCrash from "src/assets/015.png";

//images
import img1 from 'src/assets/Artwork_Pozadí-stránky.png'
import img2 from 'src/assets/015.png'
import img3 from 'src/assets/016.png'
import img4 from 'src/assets/017.png'
import img5 from 'src/assets/018.png'
import img6 from 'src/assets/019.png'

import imgBuild from 'src/assets/011.png'
import imgMissions from 'src/assets/014.png'
import imgPlanets from 'src/assets/012.png'
import imgCoop from 'src/assets/019.png'
import { useSettingsStore } from "src/stores/settings";

/*const pillItems = [
    {
        key: "sandbox",
        icon: "grid_view",
        label: "Modulárny sandbox",
        desc: "Rámy, panely, rúry, elektronika – všetko zapadne do seba.",
    },
    {
        key: "simulation",
        icon: "bolt",
        label: "Systémová simulácia",
        desc: "Elektrina, logika, thrustre, senzory – jeden glitch a letíš dolu.",
    },
    {
        key: "rebuild",
        icon: "replay",
        label: "Crash & rebuild",
        desc: "Z trosiek vznikajú ďalšie stroje. Fail je súčasť designu.",
    },
];*/
const links = useSettingsStore();

const storyImages = {
  build: imgBuild,
  missions: imgMissions,
  planets: imgPlanets,
  coop: imgCoop
};

const galleryShots = [
  { src: img1, alt: 'Orbit nad planétou', caption: 'Prílet na planétu, kde sa ešte nič nepokazilo – zatiaľ.' },
  { src: img2, alt: 'Prevrátená loď', caption: 'Stav, keď ti thrustre síce fungujú, ale gravitácia tiež.' },
  { src: img3, alt: 'Ťažký náklad', caption: 'Náklad, ktorý má pravdepodobne väčšiu hmotnosť než zvyšok lode.' },
  { src: img4, alt: 'Výbuch pri veži', caption: 'Presný dopad. Žiaľ, nie tam, kde si pôvodne chcel pristáť.' },
  { src: img5, alt: 'Trosky pri baobabe', caption: 'Trosky rozmetané po savane – perfektný set na ďalší pokus.' },
  { src: img6, alt: 'Trosky pri baobabe', caption: 'Trosky rozmetané po savane – perfektný set na ďalší pokus.' }
];

const trailerUrl =
  "https://www.youtube.com/embed/L_jWHffIx5E?rel=0&modestbranding=1";

function openSteam() {
  links.open('steam');
}

function openDiscord() {
  window.open("https://discord.com", "_blank");
}

function scrollToTrailer() {
  const el = document.getElementById("trailer");
  if (el) {
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}


</script>

<style scoped>
.au-page {
  background: radial-gradient(circle at top, var(--color-primary-deep) 0, #000 70%);
  color: var(--color-surface-light);
  font-family: "Rajdhani", system-ui, -apple-system, BlinkMacSystemFont,
    "Segoe UI", sans-serif;
}

.au-page__content {
  padding-top: 60px;
}

.au-scroll-top {
  background: var(--color-secondary);
  color: #ffffff;

  border-radius: 999px;
  width: 44px;
  height: 44px;

  box-shadow: 0 12px 28px rgba(10, 20, 35, 0.9);
  transition: transform 0.2s ease, box-shadow 0.2s ease, opacity 0.2s ease;
}

.au-scroll-top:hover {
  transform: translateY(-2px);
  background: var(--color-primary);
  box-shadow: 0 18px 40px rgba(15, 30, 50, 0.8);
}
</style>
