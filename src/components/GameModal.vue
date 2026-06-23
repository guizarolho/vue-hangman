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
import { CLOSE_GAMEOVER, SHARE } from '@/utils/emits.ts'

defineProps<{
  show: boolean
  victory: boolean
}>()

const gameManager = inject<GameManager>(GAME_MANAGER)!
function copyText() {
  navigator.clipboard.writeText(gameManager.getGameResult())
  emit(SHARE)
}

const emit = defineEmits([SHARE, CLOSE_GAMEOVER])
</script>

<template>
  <Transition name="fade">
    <div v-if="show" class="modal__overlay" @click.self="emit(CLOSE_GAMEOVER)">
      <div
        class="modal__container"
        :class="{ 'modal__container--victory': victory, 'modal__container--defeat': !victory }"
      >
        <button class="modal__close-btn" @click="emit(CLOSE_GAMEOVER)">&times;</button>

        <div class="modal__content">
          <div class="modal__icon">
            {{ victory ? WIN_EMOJI : LOSE_EMOJI }}
          </div>

          <h1 class="modal__title">
            {{ victory ? VICTORY_MESSAGE : DEFEAT_MESSAGE }}
          </h1>

          <p class="modal__subtitle">
            {{
              victory
                ? 'Parabéns! Que tal compartilhar sua vitória?'
                : 'Não foi dessa vez, mais sorte na próxima!'
            }}
          </p>

          <div class="modal__actions">
            <button class="btn btn--primary" @click="copyText">Compartilhar Resultado</button>
          </div>
          <div class="modal__countdown-wrapper">
            <span class="modal__countdown-label">Próxima palavra em</span>
            <GameCountdown />
          </div>
        </div>
      </div>
    </div>
  </Transition>
</template>

<style scoped>
.modal__overlay {
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

.modal__container {
  background: #ffffff;
  width: 100%;
  max-width: 380px;
  border-radius: 24px;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
  position: relative;
  overflow: hidden;
  border-top: 8px solid;
  animation: scaleUp 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
}

.modal__container--victory {
  border-top-color: green;
}
.modal__container--defeat {
  border-top-color: red;
}

.modal__close-btn {
  position: absolute;
  top: 12px;
  right: 16px;
  background: none;
  border: none;
  font-size: 28px;
  color: #94a3b8;
  cursor: pointer;
  transition: color 0.2s;
  line-height: 1;
}

.modal__close-btn:hover {
  color: #64748b;
}

.modal__content {
  padding: 32px 24px 24px 24px;
  text-align: center;
}

.modal__icon {
  font-size: 48px;
  margin-bottom: 12px;
}

.modal__title {
  font-family: sans-serif;
  font-size: 24px;
  font-weight: 800;
  color: #1e293b;
  margin: 0 0 8px 0;
  letter-spacing: -0.5px;
}

.modal__subtitle {
  font-family: sans-serif;
  font-size: 14px;
  color: #64748b;
  margin: 0 0 24px 0;
  line-height: 1.5;
}

.modal__actions {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.btn {
  font-family: sans-serif;
  width: 100%;
  padding: 12px 24px;
  border-radius: 12px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
  border: none;
}

.btn--primary {
  background-color: #10b981;
  color: white;
  box-shadow: 0 4px 6px -1px rgba(16, 185, 129, 0.2);
}

.btn--primary:hover {
  background-color: #059669;
  transform: translateY(-1px);
}

.btn--primary:active {
  transform: translateY(0);
}

.btn--secondary {
  background-color: #f1f5f9;
  color: #475569;
}

.btn--secondary:hover {
  background-color: #e2e8f0;
  color: #334155;
}

.modal__countdown-wrapper {
  margin-top: 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;
}

.modal__countdown-label {
  font-family: sans-serif;
  font-size: 12px;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  color: #94a3b8;
  font-weight: 600;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.25s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

@keyframes scaleUp {
  from {
    transform: scale(0.9) translateY(10px);
    opacity: 0;
  }
  to {
    transform: scale(1) translateY(0);
    opacity: 1;
  }
}
</style>
