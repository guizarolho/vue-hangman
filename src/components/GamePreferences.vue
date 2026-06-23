<script setup lang="ts">
import { CHAT_EMOJI, ECLIPSE_EMOJI, GAME_SETTINGS, SUN_EMOJI, SUPPORT_EMAIL } from '@/utils/consts'
import { CLOSE_PREFERENCES } from '@/utils/emits.ts'
import { inject } from 'vue'
import GameSlider from './GameSlider.vue'
import type { GameSettingsManager } from '@/game/GameSettingsManager.ts'

defineProps<{
  show: boolean
}>()
const emit = defineEmits([CLOSE_PREFERENCES])
const settingsManager = inject<GameSettingsManager>(GAME_SETTINGS)!

function sendemail() {
  const subject = encodeURIComponent('Hang')
  const body = encodeURIComponent('Deixe aqui seu comentário, sugestão ou bug encontrado:\n\n')

  const mailtoUrl = `mailto:${SUPPORT_EMAIL}?subject=${subject}&body=${body}`

  const link = document.createElement('a')
  link.href = mailtoUrl
  link.click()
}

function updateSettings(mode: boolean, value: boolean) {
  settingsManager?.setMode(mode, value)
}
</script>

<template>
  <Transition name="fade">
    <div v-if="show" class="modal__overlay" @click.self="emit(CLOSE_PREFERENCES)">
      <div class="modal__container">
        <header class="modal__header">
          <h2 class="modal__title">Preferences</h2>
          <button class="modal__close-btn" @click="emit(CLOSE_PREFERENCES)">✕</button>
        </header>

        <div class="modal__content">
          <button
            class="modal__option"
            @click="updateSettings(false, !settingsManager?.ContrastMode.value)"
          >
            <span class="modal__option-icon">{{ ECLIPSE_EMOJI }}</span>
            <span class="modal__option-text">Contraste</span>
            <GameSlider :checked="settingsManager.ContrastMode.value" />
          </button>

          <button
            class="modal__option"
            @click="updateSettings(true, !settingsManager?.DarkMode.value)"
          >
            <span class="modal__option-icon">{{ SUN_EMOJI }}</span>
            <span class="modal__option-text">Modo (Escuro/Claro)</span>
            <GameSlider :checked="settingsManager.DarkMode.value" />
          </button>

          <button @click="sendemail" class="modal__option">
            <span class="modal__option-icon">{{ CHAT_EMOJI }}</span>
            <span class="modal__option-text">Comentários</span>
          </button>
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
  background: white;
  width: 100%;
  max-width: 400px;
  border-radius: 16px;
  box-shadow:
    0 10px 25px -5px rgba(0, 0, 0, 0.4),
    0 8px 10px -6px rgba(0, 0, 0, 0.4);
  overflow: hidden;
  animation: scaleUp 0.25s cubic-bezier(0.34, 1.56, 0.64, 1);
}

.modal__header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.25rem 1.5rem;
  border-bottom: 1px solid lightgrey;
}

.modal__title {
  margin: 0;
  font-size: 1.25rem;
  font-weight: 700;
  color: #111827;
}

.modal__close-btn {
  background: none;
  border: none;
  font-size: 1.1rem;
  color: #9ca3af;
  cursor: pointer;
  padding: 0.25rem;
  transition: color 0.2s;
}

.modal__close-btn:hover {
  color: #111827;
}

.modal__content {
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.modal__option {
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

.modal__option:hover {
  background-color: grey;
}

.modal__option:active {
  background-color: aliceblue;
}

.modal__option-icon {
  font-size: 1.2rem;
  width: 24px;
  display: inline-flex;
  justify-content: center;
}

.modal__option-text {
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
