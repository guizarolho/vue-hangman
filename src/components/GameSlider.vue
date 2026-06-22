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

  width: 40px;
  height: 20px;
  margin: 10px;
  border: 0.2rem solid lightgrey;
  border-radius: 100px;
  background: lightgrey;
}

.slider__container-active .slider__spacer {
  width: 50%;
}

.slider__marker {
  width: 50%;
  height: 100%;
  border-radius: 100px;
  background: grey;
}

.slider__spacer {
  width: 0%;
  height: 100%;
  border-radius: 100px;

  transition: width 0.3s ease;
}
</style>
