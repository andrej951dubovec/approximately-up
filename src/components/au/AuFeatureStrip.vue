<template>
    <section class="au-strip">
        <div class="au-strip__inner">
            <div v-for="item in items" :key="item.title" class="au-strip__item">
                <q-icon :name="item.icon" size="22px" />
                <div class="au-strip__body">
                    <h3 class="au-strip__title">
                        {{ item.title }}
                    </h3>
                    <p class="au-strip__text">
                        {{ item.text }}
                    </p>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
const items = [
    {
        icon: 'build',
        title: 'Modulárne vesmírne lode',
        text: 'Rámy, panely, káble, senzory a stovky dielov, ktoré môžeš ľubovoľne poskladať do jednej šialenej lode.'
    },
    {
        icon: 'bolt',
        title: 'Simulácia systémov',
        text: 'Elektrina, logika, thrustre, nádrže, senzory – ak to zapojíš zle, hra ti to veľmi rýchlo pripomenie.'
    },
    {
        icon: 'restart_alt',
        title: 'Crash & rebuild',
        text: 'Každý pád zanechá trosky. Zober, čo ostalo, a postav ďalšiu, ešte šialenejšiu loď. Fail je súčasť dizajnu.'
    }
];
</script>

<style scoped>
.au-strip {
    background: radial-gradient(circle at top, #020617 0, #020617 45%, #020617);
    padding: 22px 0 18px;
}

.au-strip__inner {
    max-width: 1120px;
    margin: 0 auto;
    padding: 0 16px;
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 14px;
}

.au-strip__item {
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 14px 18px;
    background: radial-gradient(circle at top left, rgba(56, 189, 248, 0.16), transparent 55%),
        rgba(15, 23, 42, 0.92);
    border-radius: 999px;
    border: 1px solid rgba(148, 163, 184, 0.24);
    box-shadow: 0 14px 32px rgba(15, 23, 42, 0.85);
    backdrop-filter: blur(18px);
}

.au-strip__body {
    min-width: 0;
}

.au-strip__title {
    font-size: 0.9rem;
    font-weight: 600;
    margin-bottom: 2px;
    color: #e5e7eb;
}

.au-strip__text {
    font-size: 0.8rem;
    opacity: 0.8;
    color: #cbd5f5;
}

@media (max-width: 959px) {
    .au-strip__inner {
        grid-template-columns: minmax(0, 1fr);
    }

    .au-strip__item {
        border-radius: 18px;
    }
}
</style>
