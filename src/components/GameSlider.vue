<script setup lang="ts">
defineProps<{
  checked: boolean
}>()
</script>

<template>
  <div class="slider__container" :class="checked && 'slider__container-active'">
    <div class="slider__spacer"></div>
    <div class="slider__marker"></div>
  </div>
</template>

<style scoped>
.slider__container {
  display: flex;
  justify-content: flex-start;

  width: 2.5rem;
  height: 1.25rem;
  margin: 0.625rem;
  border: 0.2rem solid var(--slider-off);
  border-radius: 6.25rem;
  background: var(--slider-off);
  transition: all 0.3s ease-in-out;
}

.slider__container-active {
  border: 0.2rem solid var(--slider-on);
  background: var(--slider-on);
}

.slider__container-active .slider__spacer {
  width: 50%;
}

.slider__marker {
  width: 50%;
  height: 100%;
  border-radius: 6.25rem;
  background: var(--bg-primary);
}

.slider__spacer {
  width: 0%;
  height: 100%;
  border-radius: 6.25rem;

  transition: width 0.3s ease;
}
</style>
