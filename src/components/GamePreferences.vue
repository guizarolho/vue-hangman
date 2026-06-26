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
    <div v-if="show" class="preferences-overlay" @click.self="emit(CLOSE_PREFERENCES)">
      <div class="preferences-container">
        <header class="preferences-header">
          <h2 class="preferences-title">Preferências</h2>
          <button class="preferences-close-btn" @click="emit(CLOSE_PREFERENCES)">✕</button>
        </header>

        <div class="preferences-content">
          <button
            class="preferences-option"
            @click="updateSettings(false, !settingsManager?.ContrastMode.value)"
          >
            <div class="option-left">
              <span class="option-icon-wrapper contrast-icon">
                {{ ECLIPSE_EMOJI }}
              </span>
              <span class="option-text">Alto Contraste</span>
            </div>
            <GameSlider :checked="settingsManager.ContrastMode.value" />
          </button>

          <button
            class="preferences-option"
            @click="updateSettings(true, !settingsManager?.DarkMode.value)"
          >
            <div class="option-left">
              <span class="option-icon-wrapper dark-icon">
                {{ SUN_EMOJI }}
              </span>
              <span class="option-text">Modo Escuro</span>
            </div>
            <GameSlider :checked="settingsManager.DarkMode.value" />
          </button>

          <button @click="sendemail" class="preferences-option feedback-option">
            <div class="option-left">
              <span class="option-icon-wrapper feedback-icon">
                {{ CHAT_EMOJI }}
              </span>
              <span class="option-text">Sugestões e Feedback</span>
            </div>
          </button>
        </div>
      </div>
    </div>
  </Transition>
</template>

<style scoped>
.preferences-overlay {
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

.preferences-container {
  background: var(--color-white);
  border: 1px solid var(--bg-outline);
  width: 90%;
  max-width: 420px;
  border-radius: 24px;
  box-shadow:
    0 20px 25px -5px var(--box-shadow-primary),
    0 10px 10px -5px var(--box-shadow-secondary);
  overflow: hidden;
}

.preferences-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem 1.5rem 1rem 1.5rem;
}

.preferences-title {
  margin: 0;
  font-size: 1.4rem;
  font-weight: 800;
  color: var(--text-primary);
}

.preferences-close-btn {
  background: var(--bg-primary);
  border: none;
  font-size: 0.9rem;
  color: var(--text-secondary);
  cursor: pointer;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease;
}

.preferences-close-btn:hover {
  color: var(--text-primary);
  background: var(--bg-hover);
}

.preferences-content {
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.85rem;
}

.preferences-option {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.85rem 1.15rem;
  background: var(--bg-secondary);
  border: 1px solid var(--bg-outline);
  border-radius: 16px;
  cursor: pointer;
  text-align: left;
  transition: all 0.2s ease-in-out;
}

.preferences-option:hover {
  color: var(--text-primary);
  background: var(--bg-hover);
  transform: translateY(-1px);
}

.preferences-option:active {
  background-color: var(--bg-hover);
  transform: translateY(1px);
}

.option-left {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.option-icon-wrapper {
  width: 38px;
  height: 38px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.15rem;
  flex-shrink: 0;
}

.option-text {
  font-size: 0.95rem;
  font-weight: 600;
  color: var(--text-primary);
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.25s ease;
}

.fade-enter-active .preferences-container,
.fade-leave-active .preferences-container {
  transition: transform 0.25s ease-out;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.fade-enter-from .preferences-container,
.fade-leave-to .preferences-container {
  transform: scale(0.92);
}
</style>
