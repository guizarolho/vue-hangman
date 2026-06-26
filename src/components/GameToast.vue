<script setup lang="ts">
defineProps<{
  show: boolean
  text: string
}>()
</script>

<template>
  <Transition name="toast">
    <div v-if="show" class="warning-container">
      <div class="warning-content">
        <span class="warning-text">Palavra: {{ text }}</span>
      </div>
    </div>
  </Transition>
</template>

<style scoped>
.warning-container {
  position: fixed;
  top: 6rem;
  left: 50%;
  transform: translateX(-50%);

  width: max-content;
  max-width: 90vw;

  pointer-events: none;
  z-index: 9999;
}

.warning-content {
  background: var(--color-success);
  color: var(--color-white);

  padding: 0.75rem 1.5rem;
  border-radius: 3.125rem;

  font-weight: 600;
  font-size: 0.95rem;

  display: flex;
  align-items: center;
  justify-content: center;
}

.toast-enter-from,
.toast-leave-to {
  opacity: 0;
  transform: translate(-50%, -1.25rem);
}

.toast-enter-to,
.toast-leave-from {
  opacity: 1;
  transform: translate(-50%, 0);
}

.toast-enter-active,
.toast-leave-active {
  transition:
    opacity 0.3s ease-in-out,
    transform 0.3s ease-in-out;
}
</style>
