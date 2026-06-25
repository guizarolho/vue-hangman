<script setup lang="ts">
import {
  DEFEAT_MESSAGE,
  GAME_MANAGER,
  LOSE_EMOJI,
  VICTORY_MESSAGE,
  WIN_EMOJI,
} from '@/utils/consts'
import GameCountdown from './GameCountdown.vue'
import { inject } from 'vue'
import type { GameManager } from '@/game/GameManager.ts'
import { CLOSE_GAMEOVER } from '@/utils/emits.ts'

defineProps<{
  show: boolean
  victory: boolean
}>()

const gameManager = inject<GameManager>(GAME_MANAGER)!
const emit = defineEmits([CLOSE_GAMEOVER])

function copyText(button: HTMLButtonElement) {
  navigator.clipboard.writeText(gameManager.getGameResult())
  const originalText: string = button.textContent || 'Compartilhar Resultado'

  button.textContent = 'Copiado!'
  button.classList.add('btn--success')
  button.disabled = true

  setTimeout(() => {
    button.textContent = originalText
    button.classList.remove('btn--success')
    button.disabled = false
  }, 2000)
}
</script>

<template>
  <Transition name="fade">
    <div v-if="show" class="gameover-overlay" @click.self="emit(CLOSE_GAMEOVER)">
      <div
        class="gameover-container"
        :class="{ 'gameover-container--victory': victory, 'gameover-container--defeat': !victory }"
      >
        <button class="gameover-close-btn" @click="emit(CLOSE_GAMEOVER)">✕</button>

        <div class="gameover-content">
          <div
            class="gameover-icon"
            :class="{ 'animate-bounce-subtle': victory, 'animate-pulse-subtle': !victory }"
          >
            {{ victory ? WIN_EMOJI : LOSE_EMOJI }}
          </div>

          <h1 class="gameover-title">
            {{ victory ? VICTORY_MESSAGE : DEFEAT_MESSAGE }}
          </h1>

          <p class="gameover-subtitle">
            {{
              victory
                ? 'Parabéns! Que tal compartilhar sua vitória?'
                : 'Não foi dessa vez, mais sorte na próxima!'
            }}
          </p>

          <div class="gameover-actions">
            <button
              class="btn-share"
              :class="victory ? 'btn-share--victory' : 'btn-share--defeat'"
              @click="copyText($event.currentTarget as HTMLButtonElement)"
            >
              Compartilhar Resultado
            </button>
          </div>

          <div class="gameover-divider"></div>

          <div class="countdown-card">
            <span class="countdown-label">Próxima palavra em</span>
            <div class="countdown-timer-box">
              <GameCountdown />
            </div>
          </div>
        </div>
      </div>
    </div>
  </Transition>
</template>

<style scoped>
.gameover-overlay {
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

.gameover-container {
  background: var(--color-white);
  width: 90%;
  max-width: 400px;
  border-radius: 28px;
  box-shadow: 0 25px 50px -12px var(--box-shadow-primary);
  position: relative;
  overflow: hidden;
  border-top: 10px solid;
}

.gameover-container--victory {
  border-top-color: var(--color-success-light);
}
.gameover-container--defeat {
  border-top-color: var(--color-error-light);
}

.gameover-close-btn {
  position: absolute;
  top: 1.25rem;
  right: 1.25rem;
  background: var(--bg-primary);
  border: none;
  font-size: 0.85rem;
  color: var(--text-secondary);
  cursor: pointer;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease;
  z-index: 10;
}

.gameover-close-btn:hover {
  color: var(--text-primary);
  background: var(--bg-hover);
}

.gameover-content {
  padding: 3rem 2rem 2rem 2rem;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.gameover-icon {
  font-size: 4.5rem;
  margin-bottom: 1rem;
  line-height: 1;
}

.gameover-title {
  font-size: 1.75rem;
  font-weight: 800;
  color: var(--text-primary);
  margin: 0 0 0.5rem 0;
  letter-spacing: -0.025em;
  line-height: 1.2;
}

.gameover-subtitle {
  font-size: 0.95rem;
  color: var(--text-secondary);
  margin: 0 0 2rem 0;
  line-height: 1.5;
  max-width: 280px;
}

.gameover-actions {
  width: 100%;
}

.btn-share {
  width: 100%;
  padding: 1rem 1.5rem;
  border-radius: 16px;
  font-size: 1.05rem;
  font-weight: 700;
  cursor: pointer;
  border: none;
  transition: all 0.2s ease-in-out;
  display: flex;
  align-items: center;
  justify-content: center;
}

.btn-share--victory {
  background-color: var(--color-success);
  color: var(--color-white);
  box-shadow: 0 10px 15px -3px var(--color-success-shadow);
}
.btn-share--victory:hover {
  background-color: var(--color-success-light);
  transform: translateY(-2px);
  box-shadow: 0 12px 20px -3px var(--color-success-shadow);
}

.btn-share--defeat {
  background-color: var(--color-error);
  color: var(--color-white);
  box-shadow: 0 10px 15px -3px var(--color-error-shadow);
}
.btn-share--defeat:hover {
  background-color: var(--color-error-light);
  transform: translateY(-2px);
  box-shadow: 0 12px 20px -3px var(--color-error-shadow);
}

.btn-share.btn--success {
  background-color: var(--color-black) !important;
  color: var(--color-white) !important;
  box-shadow: none !important;
  transform: translateY(0) !important;
  cursor: default;
}

.btn-share:active {
  transform: translateY(0);
}

.gameover-divider {
  height: 1px;
  background: var(--bg-outline);
  width: 100%;
  margin: 2rem 0;
}

.countdown-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  width: 100%;
}

.countdown-label {
  font-size: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 0.075em;
  color: var(--text-secondary);
  font-weight: 700;
}

.countdown-timer-box {
  background: var(--bg-primary);
  border: 1px solid var(--bg-outline);
  padding: 0.75rem 2rem;
  border-radius: 12px;
  font-weight: 700;
}

.animate-bounce-subtle {
  animation: bounceSubtle 2s infinite ease-in-out;
}

.animate-pulse-subtle {
  animation: pulseSubtle 2s infinite ease-in-out;
}

@keyframes bounceSubtle {
  0%,
  100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-8px);
  }
}

@keyframes pulseSubtle {
  0%,
  100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.06);
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.25s ease;
}

.fade-enter-active .gameover-container,
.fade-leave-active .gameover-container {
  transition: transform 0.25s ease-out;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.fade-enter-from .gameover-container,
.fade-leave-to .gameover-container {
  transform: scale(0.92);
}
</style>
