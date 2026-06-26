<script setup lang="ts">
import { CLOSE_CHAR, CLOVER_EMOJI, LAMP_EMOJI } from '@/utils/consts'
import { CLOSE_HELP } from '@/utils/emits'

defineProps<{
  show: boolean
}>()
const emit = defineEmits([CLOSE_HELP])
</script>

<template>
  <Transition name="fade">
    <div v-if="show" @click.self="emit(CLOSE_HELP)" class="help-overlay">
      <div class="help-container">
        <header class="help-header">
          <h2 class="help-title">Ajuda</h2>
          <button class="help-close-btn" @click="emit(CLOSE_HELP)">{{ CLOSE_CHAR }}</button>
        </header>

        <div class="help-content">
          <div class="help-card">
            <div class="help-icon-wrapper">
              <span class="help-icon">{{ LAMP_EMOJI }}</span>
            </div>
            <div class="help-text-group">
              <h3 class="help-section-title">Objetivo</h3>
              <p class="help-text">
                Adivinhe a palavra secreta <strong>letra por letra</strong>. Cada erro reduz suas
                tentativas restantes.
              </p>
              <p class="help-text">
                Revele todas as letras ocultas antes que as suas chances acabem para vencer!
              </p>
            </div>
          </div>

          <div class="luck-badge">
            <div class="luck-emoji-wrapper">
              <span class="luck-emoji">{{ CLOVER_EMOJI }}</span>
            </div>
            <span class="luck-text">Divirta-se e boa sorte!</span>
          </div>
        </div>
      </div>
    </div>
  </Transition>
</template>

<style scoped>
.help-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: var(--bg-blur);
  backdrop-filter: blur(0.5rem);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
}

.help-container {
  background: var(--color-white);
  border: 1px solid var(--bg-outline);
  width: 90vw;
  max-width: 26.25rem;
  border-radius: 1.5rem;
  box-shadow:
    0 1.25rem 1.625rem -0.25rem var(--box-shadow-primary),
    0 0.625rem 0.625rem -0.25rem var(--box-shadow-secondary);
  overflow: hidden;
}

.help-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem 1.5rem 1rem 1.5rem;
}

.help-title {
  margin: 0;
  font-size: 1.4rem;
  font-weight: 800;
  color: var(--text-primary);
}

.help-close-btn {
  background: var(--bg-primary);
  border: none;
  font-size: 0.9rem;
  color: var(--text-secondary);
  cursor: pointer;
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease;
}

.help-close-btn:hover {
  color: var(--text-primary);
  background: var(--bg-hover);
}

.help-content {
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
}

.help-card {
  background: var(--bg-primary);
  border: 1px solid var(--bg-outline);
  border-radius: 1.25rem;
  padding: 1.25rem;
  display: flex;
  gap: 1rem;
  align-items: flex-start;
}

.help-icon-wrapper {
  width: 2.5rem;
  height: 2.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.help-icon {
  font-size: 1.2rem;
}

.help-text-group {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.help-section-title {
  margin: 0;
  font-size: 1.05rem;
  font-weight: 700;
  color: var(--text-primary);
}

.help-text {
  margin: 0;
  font-size: 0.92rem;
  line-height: 1.5;
  color: var(--text-secondary);
}

.help-text strong {
  color: var(--text-primary);
  font-weight: 600;
}

.luck-badge {
  background: var(--slider-on);
  border: 1px solid var(--color-success-light);
  border-radius: 1rem;
  padding: 0.85rem 1.25rem;
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.luck-emoji-wrapper {
  width: 2.5rem;
  height: 2.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.luck-emoji {
  font-size: 1.3rem;
}

.luck-text {
  font-size: 0.88rem;
  font-weight: 600;
  color: var(--text-luck);
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.25s ease;
}

.fade-enter-active .help-container,
.fade-leave-active .help-container {
  transition: transform 0.25s ease-out;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.fade-enter-from .help-container,
.fade-leave-to .help-container {
  transform: scale(0.92);
}
</style>
