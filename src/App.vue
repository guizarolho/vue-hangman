<script setup lang="ts">
import GameHeader from './components/GameHeader.vue'
import GameTile from './components/GameTile.vue'
import GameKeyboard from './components/GameKeyboard.vue'
import GameModal from './components/GameModal.vue'

import { GameManager } from './game/GameManager.ts'
import { provide } from 'vue'

const secrets = ['KING', 'QUEEN', 'JACK', 'JOKER']
const gameManager = new GameManager(secrets[0] ?? '')
provide('game', gameManager)
</script>

<template>
  <GameHeader />
  <div class="main__container" style="display: flex; flex-direction: row">
    <GameTile
      v-for="(char, index) in [...(secrets[0] ?? '')]"
      :key="index"
      :letter="char"
      :hidden="!gameManager.GuessedLetters.has(char)"
    />
  </div>
  <GameModal :show="gameManager.GameOver.value" :victory="gameManager.Victory.value" />
  <GameKeyboard />
</template>

<style scoped></style>
