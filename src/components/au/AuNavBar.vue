<template>
    <header class="au-nav">
        <div class="au-nav__inner">
            <div class="au-nav__left">
                <img :src="logo" alt="Approximately Up" class="au-nav__logo" />
                <span class="au-nav__title">Approximately Up</span>
            </div>

            <div class="au-nav__right">
                <q-btn flat dense no-caps label="Community" class="au-nav__link" @click="$emit('community-click')" />
                <q-btn dense no-caps class="au-nav__cta" label="Wishlist on Steam" @click="$emit('wishlist-click')" />
            </div>
        </div>
    </header>
</template>

<script setup>
const { logo } = defineProps({
    logo: { type: String, required: true },
});

defineEmits(["community-click", "wishlist-click"]);
</script>

<style scoped>
.au-nav {
    position: fixed;
    z-index: 50;
    top: 0;
    left: 0;
    right: 0;
    backdrop-filter: blur(18px);
    background: linear-gradient(to bottom,
            rgba(3, 7, 18, 0.92),
            rgba(3, 7, 18, 0.7),
            transparent);
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
    object-fit: contain;
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
    letter-spacing: 0.09em;
}

.au-nav__cta {
    font-size: 0.78rem;
    font-weight: 600;
    letter-spacing: 0.14em;
    border-radius: 999px;
    padding: 6px 18px;
    background: rgba(15, 23, 42, 0.7);
    color: #e5e7eb;
    border: 1px solid rgba(148, 163, 184, 0.7);

    transition: 0.25s ease;
}

.au-nav__cta:hover {
    background: linear-gradient(135deg, #5f73ff, #7c42ff);
    color: #fff;
}

@media (max-width: 599px) {
    .au-nav__title {
        display: none;
    }
}
</style>
