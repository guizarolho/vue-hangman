<script setup lang="ts">
defineProps<{
  show: boolean
}>()
const emit = defineEmits(['close-help'])
</script>

<template>
  <Transition name="fade">
    <div v-if="show" @click.self="emit('close-help')" class="help__overlay">
      <div class="help__container">
        <header class="help__header">
          <h2 class="help__title">Help</h2>
          <button class="help__close-btn" @click="emit('close-help')">✕</button>
        </header>
        <div class="help__content">
          <h3>Objetivo</h3>
          <p>
            Adivinhe a palavra secreta letra por letra. Cada erro reduz suas tentativas restantes.
            Revele todas as letras antes que elas acabem para vencer. Boa sorte! 🍀
          </p>
        </div>
      </div>
    </div>
  </Transition>
</template>

<style scoped>
.help__overlay {
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

.help__header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.25rem 1.5rem;
  border-bottom: 1px solid lightgrey;
}

.help__container {
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

.help__title {
  margin: 0;
  font-size: 1.25rem;
  font-weight: 700;
  color: #111827;
}

.help__close-btn {
  background: none;
  border: none;
  font-size: 1.1rem;
  color: lightgrey;
  cursor: pointer;
  padding: 0.25rem;
  transition: color 0.2s;
}

.help__close-btn:hover {
  color: #111827;
}

.help__content {
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
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
