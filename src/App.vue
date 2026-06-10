<script setup lang="ts">
import GameHeader from './components/GameHeader.vue'
import GameTile from './components/GameTile.vue'
import GameKeyboard from './components/GameKeyboard.vue'
import GameModal from './components/GameModal.vue'
import GamePreferences from './components/GamePreferences.vue'

import { GameManager } from './game/GameManager.ts'
import { provide, ref, watch } from 'vue'
import GameHelp from './components/GameHelp.vue'

const secrets = ['KING', 'QUEEN', 'JACK', 'JOKER']
const gameManager = new GameManager(secrets[0] ?? '')

const showGameover = ref(false)
const showPreferences = ref(false)
const showHelp = ref(false)

// https://vuejs.org/guide/essentials/watchers
watch(
  () => gameManager.GameOver.value,
  (value) => {
    if (value) {
      showGameover.value = true
      console.log('game over')
    }
  },
)
provide('game', gameManager)
</script>

<template>
  <GameHeader @open-pref="showPreferences = true" @open-help="showHelp = true" />
  <div class="game__container">
    <div class="word__container" style="display: flex; flex-direction: row">
      <GameTile
        v-for="(char, index) in [...(secrets[0] ?? '')]"
        :key="index"
        :letter="char"
        :hidden="!gameManager.GuessedLetters.has(char)"
      />
    </div>
    <GameModal
      :show="showGameover"
      :victory="gameManager.Victory.value"
      @close-gameover="showGameover = false"
    />
    <GameKeyboard @open-gameover="showGameover = true" />
    <GamePreferences :show="showPreferences" @close-pref="showPreferences = false" />
    <GameHelp :show="showHelp" @close-help="showHelp = false" />
  </div>
</template>

<style scoped></style>
