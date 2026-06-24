<script setup lang="ts">
import type { GameManager } from '@/game/GameManager'
import { FIRE_EMOJI, GAME_MANAGER, TROPHY_EMOJI } from '@/utils/consts'
import { CLOSE_STATS } from '@/utils/emits'
import { inject } from 'vue'

defineProps<{
  show: boolean
}>()

const emit = defineEmits([CLOSE_STATS])
const gameManager = inject<GameManager>(GAME_MANAGER)!
const gameStats = gameManager.getStats()
</script>

<template>
  <Transition name="fade">
    <div v-if="show" @click.self="emit(CLOSE_STATS)" class="stats-overlay">
      <div class="stats-container">
        <div class="stats-header">
          <h2 class="stats-title">Estatísticas</h2>
          <button class="stats-close-btn" @click="emit(CLOSE_STATS)">✕</button>
        </div>

        <div class="stats-content">
          <div class="stats-grid">
            <div class="stat-box">
              <span class="stat-number">{{ gameStats.gamesPlayed }}</span>
              <span class="stat-label">Jogadas</span>
            </div>
            <div class="stat-box">
              <span class="stat-number">{{ gameStats.wins }}</span>
              <span class="stat-label">Vitórias</span>
            </div>
            <div class="stat-box">
              <span class="stat-number">{{ gameStats.losses }}</span>
              <span class="stat-label">Derrotas</span>
            </div>
          </div>

          <div class="stats-divider"></div>

          <div class="streaks-container">
            <div class="streak-box">
              <span class="streak-label">Sequência Atual</span>
              <span class="streak-number">{{ FIRE_EMOJI }} {{ gameStats.currentStreak }}</span>
            </div>
            <div class="streak-box">
              <span class="streak-label">Melhor Sequência</span>
              <span class="streak-number">{{ TROPHY_EMOJI }} {{ gameStats.bestStreak }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Transition>
</template>

<style scoped>
.stats-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: var(--bg-blur);
  backdrop-filter: blur(8px);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
}

.stats-container {
  background: #ffffff;
  width: 90%;
  max-width: 420px;
  border-radius: 24px;
  box-shadow:
    0 20px 25px -5px rgba(0, 0, 0, 0.1),
    0 10px 10px -5px rgba(0, 0, 0, 0.04);
  overflow: hidden;
}

.stats-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem 1.5rem 1rem 1.5rem;
}

.stats-title {
  margin: 0;
  font-size: 1.4rem;
  font-weight: 800;
  color: var(--text-primary);
}

.stats-close-btn {
  background: #f8fafc;
  border: none;
  font-size: 0.9rem;
  color: #64748b;
  cursor: pointer;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease;
}

.stats-close-btn:hover {
  color: #111827;
  background: #e5e7eb;
}

.stats-content {
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
}

.stat-box {
  background: #f8fafc;
  border: 1px solid #f1f5f9;
  padding: 1rem 0.5rem;
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
}

.stat-number {
  font-size: 1.8rem;
  font-weight: 800;
  color: var(--text-primary);
  line-height: 1;
  margin-bottom: 0.25rem;
}

.stat-label {
  font-size: 0.9rem;
  font-weight: 600;
  color: var(--text-secondary);
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.stats-divider {
  height: 1px;
  background: #f1f5f9;
  width: 100%;
}

.streaks-container {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.streak-box {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #f8fafc;
  padding: 0.85rem 1.25rem;
  border-radius: 14px;
  border: 1px solid #f1f5f9;
}

.streak-label {
  font-size: 0.95rem;
  font-weight: 600;
  color: var(--text-primary);
}

.streak-number {
  font-size: 1.1rem;
  font-weight: 700;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.25s ease;
}

.fade-enter-active .stats-container,
.fade-leave-active .stats-container {
  transition: transform 0.25s ease-out;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.fade-enter-from .stats-container,
.fade-leave-to .stats-container {
  transform: scale(0.92);
}
</style>
