<script setup lang="ts">
import { OPEN_HELP, OPEN_PREFERENCES, OPEN_STATS } from '@/utils/emits'
const emit = defineEmits([OPEN_PREFERENCES, OPEN_HELP, OPEN_STATS])
</script>

<template>
  <header class="header__container">
    <div class="header__content">
      <nav class="header__group header__group--left">
        <a class="header__button" @click="emit(OPEN_HELP)">Ajuda</a>
        <a class="header__button" @click="emit(OPEN_STATS)">Estatísticas</a>
        <a class="header__button" @click="emit(OPEN_PREFERENCES)">Preferências</a>
      </nav>

      <div class="header__center">
        <h1 class="header__title">HANG</h1>
      </div>

      <div class="header__group header__group--right">
        <RouterLink to="/about" class="header__button">Sobre</RouterLink>
      </div>
    </div>
  </header>
</template>

<style scoped>
.header__container {
  width: 100%;
  background: var(--bg-primary);
  border-bottom: 1px solid var(--bg-outline);
  box-shadow: 0 1px 3px var(--box-shadow-primary);
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
  color: var(--text-primary);
  text-transform: uppercase;
}

.header__button {
  cursor: pointer;
  padding: 0.5rem 1.25rem;
  border-radius: 8px;

  background: var(--bg-secondary);
  color: var(--text-secondary);

  font-size: 0.9rem;
  font-weight: 600;
  text-decoration: none;

  transition: transform 0.2s ease-in-out;
  user-select: none;
}

.header__button:hover {
  color: var(--text-primary);
  background: var(--bg-hover);
  transform: translateY(-1px);
}

.header__button:active {
  transform: translateY(0) scale(0.98);
}
</style>
