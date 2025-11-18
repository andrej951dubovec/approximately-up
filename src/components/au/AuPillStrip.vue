<template>
    <section class="au-strip">
        <div class="au-strip__inner">
            <div v-for="item in items" :key="item.key" class="au-strip__pill">
                <q-icon :name="item.icon" size="20px" class="q-mr-sm" />
                <div class="au-strip__text">
                    <div class="au-strip__label">{{ item.label }}</div>
                    <div class="au-strip__desc">{{ item.desc }}</div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
const { items } = defineProps({
    items: { type: Array, required: true },
});
</script>

<style scoped>
.au-strip {
    background: radial-gradient(circle at top, #020617 0, #020617 60%, #020617);
    padding: 18px 0 6px;
}

.au-strip__inner {
    max-width: 1120px;
    margin: 0 auto;
    padding: 0 16px 10px;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
    gap: 10px;
}

.au-strip__pill {
    display: flex;
    align-items: center;
    padding: 10px 14px;
    border-radius: 999px;
    border: 1px solid rgba(148, 163, 184, 0.4);
    background: radial-gradient(circle at top left, #0b1120, #020617);
    font-size: 0.86rem;
}

.au-strip__label {
    font-weight: 600;
}

.au-strip__desc {
    opacity: 0.8;
    font-size: 0.78rem;
}
</style>
