<script setup lang="ts">
const emit = defineEmits(['open-pref', 'open-help', 'open-stats'])
</script>

<template>
  <header class="header__container">
    <h1 class="header__title">HANG</h1>
    <nav>
      <!-- Adicionar função que ativa slide da barra superior -->
      <a class="header__button">Home</a>
      <a class="header__button" @click="emit('open-help')">Help</a>
      <a class="header__button" @click="emit('open-stats')">Statistics</a>
      <a class="header__button" @click="emit('open-pref')">Preferences</a>
    </nav>
    <!-- Adicionar link para Bio -->
  </header>
</template>

<style scoped>
.header__container {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
}
</style>
