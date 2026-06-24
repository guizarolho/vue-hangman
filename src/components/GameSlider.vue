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
  border: 0.2rem solid rgb(236, 179, 179);
  border-radius: 100px;
  background: rgb(236, 179, 179);
  transition: all 0.3s ease-in-out;
}

.slider__container-active {
  border: 0.2rem solid rgb(179, 236, 179);
  background: rgb(179, 236, 179);
}

.slider__container-active .slider__spacer {
  width: 50%;
}

.slider__marker {
  width: 50%;
  height: 100%;
  border-radius: 100px;
  background: #f8fafc;
}

.slider__spacer {
  width: 0%;
  height: 100%;
  border-radius: 100px;

  transition: width 0.3s ease;
}
</style>
