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

  height: 20px;
  width: 20px;
  border-radius: 20px;

  background: var(--color-black);
}

.radial__inner {
  display: flex;
  justify-content: center;
  align-items: center;

  height: 100%;
  width: 100%;
  border-radius: 20px;

  background: var(--color-black);
  transition: background 0.3s ease-in-out;
}

.radial__inner-empty {
  background: var(--color-white);
}
</style>
