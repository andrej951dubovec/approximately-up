<template>
    <footer class="au-footer">
        <div class="au-footer__inner">
            <div class="au-footer__brand">
                <q-img class="au-footer__logo" src="@/assets/Artwork_Unity-Icon.png" alt="Approximately Up logo"
                    width="52" height="52" />
                <div>
                    <h3>Approximately Up</h3>
                    <p>
                        Sandbox, kde z rozbitého chaosu staviaš funkčné vesmírne stroje
                        – a testuješ, čo všetko ešte uletí.
                    </p>
                </div>
            </div>

            <div class="au-footer__cols">
                <div class="au-footer__col">
                    <h4>Hra</h4>
                    <ul>
                        <li><a href="#trailer">Trailer</a></li>
                        <li><a href="#features">Ako sa hrá</a></li>
                        <li><a href="#gallery">Galéria</a></li>
                    </ul>
                </div>

                <div class="au-footer__col">
                    <h4>Komunita</h4>
                    <ul>
                        <li>
                            <a href="https://store.steampowered.com/app/3904850/Approximately_Up/" target="_blank"
                                rel="noopener">
                                Steam stránka
                            </a>
                        </li>
                        <li>
                            <a href="https://discord.gg/" target="_blank" rel="noopener">
                                Discord (čoskoro)
                            </a>
                        </li>
                    </ul>
                </div>

                <div class="au-footer__col au-footer__col--cta">
                    <h4>Wishlist na Steame</h4>
                    <p>
                        Pridaj si hru do wishlistu a dostaneš info, keď bude k dispozícii
                        Early Access.
                    </p>
                    <q-btn class="au-footer__cta" label="Wishlist on Steam" @click="$emit('wishlist-click')" />
                </div>
            </div>
        </div>

        <div class="au-footer__bottom">
            <div class="au-footer__bottom-inner">
                <span>© {{ year }} Approximately Games</span>
                <div class="au-footer__social">
                    <q-icon name="mdi-steam" size="24px" />
                    <q-icon name="mdi-discord" size="24px" />
                    <q-icon name="mdi-twitter" size="24px" />
                </div>
            </div>
        </div>
    </footer>
</template>

<script setup>
const year = new Date().getFullYear();
</script>

<style scoped>
.au-footer {
    background: radial-gradient(circle at top, #020617 0, #000 60%, #000);
    color: #e5e7eb;
    padding-top: 40px;
}

.au-footer__inner {
    max-width: 1120px;
    margin: 0 auto;
    padding: 0 16px 28px;
    display: grid;
    grid-template-columns: minmax(0, 1.3fr) minmax(0, 2fr);
    gap: 40px;
    align-items: flex-start;
}

.au-footer__brand {
    display: flex;
    gap: 16px;
    align-items: flex-start;
}

.au-footer__logo {
    border-radius: 18px;
    box-shadow: 0 18px 50px rgba(15, 23, 42, 0.9);
}

.au-footer__brand h3 {
    font-size: 1.1rem;
    margin-bottom: 6px;
}

.au-footer__brand p {
    font-size: 0.85rem;
    color: #cbd5f5;
}

.au-footer__cols {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 24px;
}

.au-footer__col h4 {
    font-size: 0.9rem;
    text-transform: uppercase;
    letter-spacing: 0.16em;
    margin-bottom: 8px;
    color: #a5b4fc;
}

.au-footer__col ul {
    list-style: none;
    padding: 0;
    margin: 0;
    display: grid;
    gap: 4px;
    font-size: 0.85rem;
}

.au-footer__col a {
    color: #e5e7eb;
    text-decoration: none;
    opacity: 0.85;
}

.au-footer__col a:hover {
    opacity: 1;
    text-decoration: underline;
}

.au-footer__col--cta p {
    font-size: 0.84rem;
    margin-bottom: 10px;
    color: #cbd5f5;
}

.au-footer__cta {
    border-radius: 999px;
    padding: 8px 20px;
    font-size: 0.86rem;
    font-weight: 600;
    background: linear-gradient(135deg, #5f73ff, #7c42ff);
    color: #f9fafb;
    box-shadow: 0 14px 40px rgba(88, 80, 236, 0.8);
}

.au-footer__bottom {
    border-top: 1px solid rgba(15, 23, 42, 0.9);
    background: radial-gradient(circle at top, rgba(15, 23, 42, 0.9), #000);
    padding: 10px 0;
}

.au-footer__bottom-inner {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 10px;
    max-width: 1120px;
    margin: 0 auto;
    padding: 8px 16px;
    font-size: 0.8rem;
    opacity: 0.8;
}

.au-footer__social {
    display: flex;
    gap: 8px;
}

/*@media (max-width: 959px) {
    .au-footer__inner {
        grid-template-columns: minmax(0, 1fr);
    }

    .au-footer__cols {
        grid-template-columns: repeat(2, minmax(0, 1fr));
    }
}*/
</style>
