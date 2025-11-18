<template>
    <section class="au-row">
        <div class="au-row__inner" :class="{ 'au-row__inner--reverse': reverse }">
            <div class="au-row__image">
                <q-img :src="image" :alt="title" ratio="16/9" class="au-row__img" />
            </div>

            <div class="au-row__content">
                <h2>{{ title }}</h2>
                <p class="au-row__text">
                    {{ text }}
                </p>
                <ul v-if="bullets?.length" class="au-row__list">
                    <li v-for="b in bullets" :key="b">
                        {{ b }}
                    </li>
                </ul>
            </div>
        </div>
    </section>
</template>

<script setup>
const { title, text, bullets, image, reverse } = defineProps({
    title: { type: String, required: true },
    text: { type: String, required: true },
    bullets: { type: Array, default: () => [] },
    image: { type: String, required: true },
    reverse: { type: Boolean, default: false },
});
</script>

<style scoped>
.au-row {
    background: #020617;
    color: #e5e7eb;
}

.au-row__inner {
    max-width: 1120px;
    margin: 0 auto;
    padding: 40px 16px;
    display: grid;
    grid-template-columns: minmax(0, 1.1fr) minmax(0, 1fr);
    gap: 28px;
    align-items: center;
}

.au-row__inner--reverse {
    direction: rtl;
}

.au-row__inner--reverse>* {
    direction: ltr;
}

.au-row__image {
    height: 100%;
}

.au-row__img {
    height: 100%;
    border-radius: 22px;
    box-shadow: 0 20px 50px rgba(0, 0, 0, 0.7);
    transition: transform 200ms ease, box-shadow 200ms ease;
}

.au-row__img:hover {
    transform: translateY(-4px) scale(1.01);
    box-shadow: 0 26px 60px rgba(59, 130, 246, 0.45);
}

.au-row__content h2 {
    font-size: 1.6rem;
    margin-bottom: 10px;
}

.au-row__text {
    opacity: 0.9;
    margin-bottom: 10px;
}

.au-row__list {
    list-style: disc;
    padding-left: 18px;
    opacity: 0.9;
    font-size: 0.95rem;
}

@media (max-width: 767px) {
    .au-row__inner {
        grid-template-columns: minmax(0, 1fr);
        padding-block: 28px;
    }

    .au-row__inner--reverse {
        direction: ltr;
    }

    .au-row__content h2 {
        text-align: center;
    }
}
</style>
