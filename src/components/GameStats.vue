<script setup lang="ts">
import type { GameManager } from '@/game/GameManager'
import { inject } from 'vue'

defineProps<{
  show: boolean
}>()
const emit = defineEmits(['close-stats'])
const gameManager = inject<GameManager>('game')!
const gameStats = gameManager.getStats()
</script>

<template>
  <Transition name="fade">
    <div v-if="show" @click.self="emit('close-stats')" class="stats__overlay">
      <div class="stats__container">
        <div class="stats__header">
          <div class="stats__title">Estatísticas</div>
          <button class="stats__close-btn" @click.self="emit('close-stats')">✕</button>
        </div>
        <div class="stats__content">
          <div class="stats__option">
            <span class="stats__option-text">Partidas Jogadas: {{ gameStats.gamesPlayed }}</span>
          </div>
          <div class="stats__option">
            <span class="stats__option-text">Vitórias: {{ gameStats.wins }}</span>
          </div>
          <div class="stats__option">
            <span class="stats__option-text">Derrotas: {{ gameStats.losses }}</span>
          </div>
          <div class="stats__option">
            <span class="stats__option-text">Maior Sequência: {{ gameStats.bestStreak }}</span>
          </div>
          <div class="stats__option">
            <span class="stats__option-text">Sequência Atual: {{ gameStats.currentStreak }}</span>
          </div>
        </div>
      </div>
    </div>
  </Transition>
</template>

<style>
.stats__overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(4px);

  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
}

.stats__container {
  background: white;
  width: 100%;
  max-width: 400px;
  border-radius: 16px;
  box-shadow:
    0 10px 25px -5px rgba(0, 0, 0, 0.1),
    0 8px 10px -6px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  animation: scaleUp 0.25s cubic-bezier(0.34, 1.56, 0.64, 1);
}

.stats__content {
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.stats__header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.25rem 1.5rem;
  border-bottom: 1px solid lightgray;
}

.stats__title {
  margin: 0;
  font-size: 1.25rem;
  font-weight: 700;
  color: black;
}

.stats__close-btn {
  background: none;
  border: none;
  font-size: 1.1rem;
  color: lightgrey;
  cursor: pointer;
  padding: 0.25rem;
  transition: color 0.2s;
}

.stats__close-btn:hover {
  color: darkslategrey;
}

.stats__option {
  width: 100%;
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 0.85rem 1rem;
  background: transparent;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  text-align: left;
  transition: background-color 0.15s ease;
}

.stats__option-text {
  font-size: 1rem;
  font-weight: 500;
  color: #374151;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

@keyframes scaleUp {
  from {
    transform: scale(0.95);
  }
  to {
    transform: scale(1);
  }
}
</style>
