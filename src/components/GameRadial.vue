<script setup lang="ts">
defineProps<{
  checked: boolean
}>()
</script>

<template>
  <div class="radial__container">
    <div class="radial__inner" :class="checked && 'radial__inner-empty'" />
  </div>
</template>

<style scoped>
.radial__container {
  display: flex;
  justify-content: center;
  align-items: center;

  height: 1.25rem;
  width: 1.25rem;
  border-radius: 1.25rem;

  background: var(--color-black);
}

.radial__inner {
  display: flex;
  justify-content: center;
  align-items: center;

  height: 100%;
  width: 100%;
  border-radius: 1.25rem;

  background: var(--color-black);
  transition: background 0.3s ease-in-out;
}

.radial__inner-empty {
  background: var(--color-white);
}
</style>
