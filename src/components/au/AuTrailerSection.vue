<template>
  <section id="au-trailer" class="au-trailer">
    <div class="au-trailer__inner">
      <header class="au-trailer__header">
        <h2>Pozri si trailer</h2>
        <p>
          Krátky pohľad na to, ako vyzerá chaos, keď začneš stavať – a rozbíjať –
          svoje vesmírne stroje.
        </p>
      </header>

      <div class="au-trailer__video">
        <q-video :src="videoUrl" :ratio="16 / 9" />
      </div>
    </div>
  </section>
</template>

<script setup>
const { videoUrl } = defineProps({
  videoUrl: {
    type: String,
    required: true,
  },
});
</script>

<style scoped>
.au-trailer {
  background: radial-gradient(circle at top, #020617 0, #020617 60%, #000 100%);
  color: #e5e7eb;
  padding: 40px 0 48px;
}

.au-trailer__inner {
  max-width: 1120px;
  margin: 0 auto;
  padding: 0 16px;
}

.au-trailer__header {
  text-align: center;
  margin-bottom: 20px;
}

.au-trailer__header h2 {
  font-size: 1.6rem;
  text-transform: uppercase;
  letter-spacing: 0.16em;
  margin-bottom: 8px;
}

.au-trailer__header p {
  opacity: 0.8;
  max-width: 520px;
  margin: 0 auto;
}

.au-trailer-video {
  width: 100%;
  max-width: 960px;
  margin: 0 auto;
  border-radius: 22px;
  overflow: hidden;
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.8);
}
</style>
