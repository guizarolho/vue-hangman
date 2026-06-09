<script setup lang="ts">
import GameHeader from './components/GameHeader.vue'
import GameTile from './components/GameTile.vue'
import GameKeyboard from './components/GameKeyboard.vue'
import { GameManager } from './game/GameManager.ts'
import { provide } from 'vue'

const secrets = ['king', 'queen', 'jack', 'joker']
const game = new GameManager(secrets[0] ?? '')
provide('game', game)
</script>

<template>
  <GameHeader />
  <div class="main__container" style="display: flex; flex-direction: row">
    <GameTile
      v-for="(char, index) in [...(secrets[0] ?? '')]"
      :key="index"
      :letter="char"
      :hidden="false"
    />
  </div>
  <GameKeyboard />
</template>

<style scoped></style>
