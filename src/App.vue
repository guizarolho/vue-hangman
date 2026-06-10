<script setup lang="ts">
import GameHeader from './components/GameHeader.vue'
import GameTile from './components/GameTile.vue'
import GameKeyboard from './components/GameKeyboard.vue'
import GameModal from './components/GameModal.vue'

import { GameManager } from './game/GameManager.ts'
import { provide, ref, watch } from 'vue'

const secrets = ['KING', 'QUEEN', 'JACK', 'JOKER']
const gameManager = new GameManager(secrets[0] ?? '')
const showModal = ref(false)

// https://vuejs.org/guide/essentials/watchers
watch(
  () => gameManager.GameOver.value,
  (value) => {
    if (value) {
      showModal.value = true
      console.log('game over')
    }
  },
)
provide('game', gameManager)
</script>

<template>
  <GameHeader />
  <div class="game__container">
    <div class="word__container" style="display: flex; flex-direction: row">
      <GameTile
        v-for="(char, index) in [...(secrets[0] ?? '')]"
        :key="index"
        :letter="char"
        :hidden="!gameManager.GuessedLetters.has(char)"
      />
    </div>
    <GameModal :show="showModal" :victory="gameManager.Victory.value" @close="showModal = false" />
    <GameKeyboard @popup="showModal = true" />
  </div>
</template>

<style scoped></style>
