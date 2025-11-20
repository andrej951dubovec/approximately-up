<template>
  <section class="au-story">
    <div class="au-story__inner">

      <article class="au-story__block">
        <div class="au-story__media">
          <q-img height="280px" :src="images.build" alt="Stavanie lodí z modulárnych dielov" ratio="16/9"
            loading="lazy" />
        </div>
        <div class="au-story__content">
          <p class="au-story__eyebrow">Build spaceships</p>
          <h2 class="au-story__title">Od jedného rámu k obrovskej lodi</h2>
          <p class="au-story__text">
            Začínaš s jediným kusom konštrukcie a pár skrutkami. Postupne
            poskladáš loď z&nbsp;stoviek dielov – od automatizovaných systémov
            cez logiku až po šialené thrustre.
          </p>
          <ul class="au-story__list">
            <li>Viac ako 250 komponentov na stavbu a automatizáciu</li>
            <li>Elektrina, logické obvody, senzory a merače</li>
            <li>Spustíš to, zatiahneš páku a uvidíš, čo sa pokazí ako prvé</li>
          </ul>
        </div>
      </article>

      <article class="au-story__block au-story__block--reverse">
        <div class="au-story__media">
          <q-img height="280px" :src="images.missions" alt="Šialené misie a náklady" ratio="16/9" loading="lazy" />
        </div>
        <div class="au-story__content">
          <p class="au-story__eyebrow">Complete missions</p>
          <h2 class="au-story__title">Bláznivé náklady, ešte bláznivejšie lodě</h2>
          <p class="au-story__text">
            Experimentalne reaktory, preťažené generátory, náklady ťažšie než samotná loď.
            Viac ako 30 misií ti skúša, kde je hranica toho, čo ešte uletí.
          </p>
          <ul class="au-story__list">
            <li>Dodávky experimentálnych zdrojov na vzdialené stanice</li>
            <li>Náklady, ktoré ti vypínajú elektrinu uprostred letu</li>
            <li>Zber balíkov a odmien pre ďalšie upgrady lode</li>
          </ul>
        </div>
      </article>

      <article class="au-story__block">
        <div class="au-story__media">
          <q-img height="280px" :src="images.planets" alt="Pristávanie na nových planétach" ratio="16/9"
            loading="lazy" />
        </div>
        <div class="au-story__content">
          <p class="au-story__eyebrow">Explore planets</p>
          <h2 class="au-story__title">17 planét, každý let je iný</h2>
          <p class="au-story__text">
            Husté atmosféry, nekonečné oceány, planéty zaliate pieskom. Každý
            svet má vlastnú vizuálnu identitu a dynamický soundtrack, ktorý
            reaguje na to, čo práve vyvádzaš.
          </p>
          <ul class="au-story__list">
            <li>17 unikátnych planét s vlastnou náladou</li>
            <li>Dynamická hudba meniacá sa počas letu a prieskumu</li>
            <li>Objavovanie nových dielov a výziev na každom svete</li>
          </ul>
        </div>
      </article>

      <article class="au-story__block au-story__block--reverse">
        <div class="au-story__media">
          <q-img height="280px" :src="images.coop" alt="Spolupráca posádky a kooperácia" ratio="16/9" loading="lazy" />
        </div>
        <div class="au-story__content">
          <p class="au-story__eyebrow">Co-op chaos</p>
          <h2 class="au-story__title">Kto zabudol ten kábel?</h2>
          <p class="au-story__text">
            Hraj v koope až so štyrmi hráčmi, hádaj sa, kto otočil thruster
            opačne a prečo tentoraz nefungujú solárne panely. Na konci letu je
            vždy jasné len jedno – niekto je na vine.
          </p>
          <ul class="au-story__list">
            <li>Kooperácia až pre 4 hráčov</li>
            <li>Spoločná stavba lodí a delenie zodpovednosti (a viny)</li>
            <li>Ideálne na hlasový chat a legendárne momenty</li>
          </ul>
        </div>
      </article>

    </div>
  </section>
</template>

<script setup>
const { images } = defineProps({
  images: {
    type: Object,
    required: true
  }
});
</script>

<style scoped>
.au-story {
  background: radial-gradient(circle at top, var(--color-primary-deep) 0, var(--color-primary-deep) 45%, #000);
  color: var(--color-surface);
  padding: 56px 0 64px;
}

.au-story__inner {
  max-width: 1120px;
  margin: 0 auto;
  padding: 0 16px;
  display: flex;
  flex-direction: column;
  gap: 60px;
}

.au-story__block {
  display: grid;
  grid-template-columns: minmax(0, 1.15fr) minmax(0, 1fr);
  gap: 40px;
  align-items: center;
}

.au-story__block--reverse {
  grid-template-columns: minmax(0, 1fr) minmax(0, 1.15fr);
}

.au-story__media :deep(img) {
  border-radius: 28px;
  box-shadow: 0 24px 70px rgba(var(--color-base-rgb), 0.9);
  display: block;
}

.au-story__media {
  height: 100%;
}

.au-story__content {
  max-width: 520px;
}

.au-story__eyebrow {
  text-transform: uppercase;
  letter-spacing: 0.16em;
  font-size: 0.8rem;
  color: var(--color-accent-medium);
  margin-bottom: 6px;
}

.au-story__title {
  font-size: 1.8rem;
  margin-bottom: 12px;
}

.au-story__text {
  margin-bottom: 14px;
  color: var(--color-accent-light);
}

.au-story__list {
  padding-left: 1.1rem;
  display: grid;
  gap: 4px;
  font-size: 0.95rem;
  color: var(--color-surface);
}

@media (max-width: 1023px) {
  .au-story {
    padding: 48px 0 56px;
  }

  .au-story__inner {
    gap: 48px;
  }

  .au-story__block,
  .au-story__block--reverse {
    grid-template-columns: minmax(0, 1fr);
    gap: 24px;
  }

  .au-story__block--reverse .au-story__media {
    order: 1;
  }

  .au-story__block--reverse .au-story__content {
    order: 2;
  }

  .au-story__content {
    max-width: none;
  }

  .au-story__title {
    font-size: 1.5rem;
  }
}

@media (max-width: 599px) {
  .au-story {
    padding: 40px 0 48px;
  }

  .au-story__inner {
    gap: 40px;
  }

  .au-story__title {
    font-size: 1.3rem;
  }

  .au-story__text {
    font-size: 0.95rem;
  }

  .au-story__list {
    font-size: 0.9rem;
  }

  .au-story__media :deep(img) {
    border-radius: 22px;
    box-shadow: 0 18px 50px rgba(var(--color-base-rgb), 0.85);
  }
}
</style>
