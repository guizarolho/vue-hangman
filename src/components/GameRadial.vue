<script setup lang="ts">
import { ref } from 'vue'

const inner = ref<HTMLElement>()
function emptyfill() {
  inner.value?.classList.add('empty')
}
</script>

<template>
  <div @click="emptyfill()" class="radial__container">
    <div class="radial__inner" :ref="(e) => (inner = e as HTMLElement)" />
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

  background: black;
}

.radial__inner {
  display: flex;
  justify-content: center;
  align-items: center;

  height: 80%;
  width: 80%;
  border-radius: 20px;

  background: black;
  transition: background 0.3s ease-in-out;
}

.radial__inner.empty {
  background: white;
}
</style>
