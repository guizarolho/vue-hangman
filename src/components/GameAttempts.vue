<script setup lang="ts">
import { GAME_MANAGER, MAX_ERRORS } from '@/utils/consts'
import GameRadial from './GameRadial.vue'
import { inject } from 'vue'
import type { GameManager } from '@/game/GameManager.ts'

const gameManager = inject<GameManager>(GAME_MANAGER)
</script>

<template>
  <div class="main__container">
    <div class="attempts__container">
      <span>Tentativas restantes:</span>
      <template v-for="(_, index) in MAX_ERRORS" :key="index">
        <GameRadial :checked="index >= gameManager!.UserLife.value" />
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
