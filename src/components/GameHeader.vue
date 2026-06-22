<script setup lang="ts">
const emit = defineEmits(['open-pref', 'open-help', 'open-stats'])
</script>

<template>
  <header class="header__container">
    <div class="header__content">
      <nav class="header__group header__group--left">
        <a class="header__button" @click="emit('open-help')">Ajuda</a>
        <a class="header__button" @click="emit('open-stats')">Estatísticas</a>
        <a class="header__button" @click="emit('open-pref')">Preferências</a>
      </nav>

      <div class="header__center">
        <h1 class="header__title">HANG</h1>
      </div>

      <div class="header__group header__group--right">
        <RouterLink to="/about" class="header__button">About</RouterLink>
      </div>
    </div>
  </header>
</template>

<style scoped>
.header__container {
  width: 100%;
  background: #ffffff;
  border-bottom: 1px solid #e5e7eb;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
}

.header__content {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0.75rem 2rem;

  display: flex;
  align-items: center;
  justify-content: space-between;
}

.header__group {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  flex: 1;
}

.header__group--left {
  justify-content: flex-start;
}

.header__group--right {
  justify-content: flex-end;
}

.header__center {
  display: flex;
  justify-content: center;
  align-items: center;
}

.header__title {
  margin: 0;
  font-size: 1.75rem;
  font-weight: 900;
  letter-spacing: 0.3rem;
  color: #111827;
  text-transform: uppercase;
}

.header__button {
  cursor: pointer;
  padding: 0.5rem 1.25rem;
  border-radius: 8px;

  background: #f3f4f6;
  color: #4b5563;

  font-size: 0.9rem;
  font-weight: 600;
  text-decoration: none;

  transition: transform 0.2s ease-in-out;
  user-select: none;
}

.header__button:hover {
  color: #111827;
  background: #e5e7eb;
  transform: translateY(-1px);
}

.header__button:active {
  transform: translateY(0) scale(0.98);
}
</style>
