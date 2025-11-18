<template>
    <section class="au-hero">
        <div class="hero-bg">
            <img :src="heroImage" alt="Hero" />
        </div>

        <div class="hero-overlay"></div>
        <div class="hero-inner">

            <div class="hero-badge">
                <span class="dot"></span>
                SANDBOX SCI-FI BUILDER
            </div>

            <h1 class="hero-title">
                APPROXIMATELY
                <br />
                UP
            </h1>

            <p class="hero-sub">
                Sandbox, kde z rozbitého chaosu staviaš funkčné vesmírne stroje.
                Sleduj, čo je už takmer hotové – a čo sa ti ešte rozsype.
            </p>

            <div class="hero-actions">
                <q-btn class="btn-wishlist" label="Wishlist on Steam" @click="$emit('wishlist-click')" />

                <q-btn class="btn-trailer" @click="$emit('trailer-click')">
                    <span class="play-icon">▶</span>
                    Watch trailer
                </q-btn>
            </div>

            <div class="hero-tags">
                Early in development · Single-player sandbox · PC
            </div>
        </div>
    </section>
</template>

<script setup>
defineProps({
    heroImage: { type: String, required: true }
});
</script>

<style scoped>
.au-hero {
    position: relative;
    width: 100%;
    min-height: 80vh;
    padding: 120px 0 140px;
    display: flex;
    align-items: center;
    color: #fff;
}

.hero-bg img {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.hero-overlay {
    position: absolute;
    inset: 0;
    background: linear-gradient(90deg,
            rgba(0, 0, 0, 0.85) 0%,
            rgba(0, 0, 0, 0.68) 35%,
            rgba(0, 0, 0, 0.25) 60%,
            rgba(0, 0, 0, 0) 100%);
    pointer-events: none;
}

.hero-inner {
    position: relative;
    z-index: 5;
    max-width: 760px;
    padding: 0 24px 0 80px;
}

.hero-badge {
    display: inline-flex;
    align-items: center;
    gap: 8px;

    padding: 6px 14px;
    font-size: 0.72rem;
    font-weight: 600;
    letter-spacing: 0.13em;

    background: rgba(255, 255, 255, 0.06);
    border: 1px solid rgba(255, 255, 255, 0.12);
    backdrop-filter: blur(6px);
    border-radius: 18px;

    margin-bottom: 24px;
}

.hero-badge .dot {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: #22c55e;
}

.hero-title {
    font-size: 4.2rem;
    font-weight: 800;
    line-height: 1.05;
    letter-spacing: 0.06em;
    margin-bottom: 26px;
}

.hero-sub {
    font-size: 1.1rem;
    opacity: 0.82;
    max-width: 520px;
    margin-bottom: 30px;
}

.hero-actions {
    display: flex;
    gap: 16px;
    margin-bottom: 16px;
}

.btn-wishlist {
    padding: 12px 24px;
    font-weight: 600;
    border-radius: 14px;
    color: #fff;
    background: linear-gradient(135deg, #5f73ff, #7c42ff);
    transition: 0.25s ease;
}

.btn-wishlist:hover {
    filter: brightness(1.15);
}

.btn-trailer {
    padding: 12px 24px;
    font-weight: 600;
    border-radius: 14px;

    background: rgba(255, 255, 255, 0.08);
    border: 1px solid rgba(255, 255, 255, 0.18);
    backdrop-filter: blur(4px);
    transition: 0.25s ease;
    color: #fff;
}

.btn-trailer:hover {
    background: rgba(255, 255, 255, 0.14);
}

.play-icon {
    margin-right: 6px;
    font-size: 1.05rem;
}

.hero-tags {
    font-size: 0.84rem;
    opacity: 0.55;
    margin-top: 6px;
}

@media (max-width: 768px) {
    .au-hero {
        padding: 80px 0 100px;
        overflow: visible;
    }

    .hero-inner {
        padding: 0 18px;
    }

    .hero-title {
        font-size: 2.1rem;
        letter-spacing: 0.08em;
        word-break: break-word;
    }

    .hero-sub {
        font-size: 1rem;
    }


}

@media (max-width: 480px) {
    .hero-actions {
        flex-direction: column;
    }
}
</style>
