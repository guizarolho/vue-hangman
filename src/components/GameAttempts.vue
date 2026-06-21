<script setup lang="ts">
import { MAX_ERRORS } from '@/utils/consts'
import GameRadial from './GameRadial.vue'

const radials: HTMLElement[] = []
</script>
<template>
  <div class="main__container">
    <div class="attempts__container">
      <span>Tentativas restantes:</span>
      <template v-for="value in MAX_ERRORS" :key="value">
        <GameRadial :ref="(e) => radials.push(e as HTMLElement)" />
      </template>
    </div>
  </div>
</template>
<style scoped>
.main__container {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;

  margin: 20px;
}

.attempts__container {
  display: flex;
  flex-direction: row;
  gap: 10px;
}
</style>
