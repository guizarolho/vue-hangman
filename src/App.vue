<script setup lang="ts">
import { provide, ref, watch } from 'vue'
import GameHeader from './components/GameHeader.vue'
import GameTile from './components/GameTile.vue'
import GameKeyboard from './components/GameKeyboard.vue'
import GameModal from './components/GameModal.vue'
import GamePreferences from './components/GamePreferences.vue'
import GameHelp from './components/GameHelp.vue'
import GameStats from './components/GameStats.vue'
import { GameManager } from './game/GameManager.ts'

const showGameover = ref(false)
const showPreferences = ref(false)
const showHelp = ref(false)
const showStats = ref(false)

const secrets = ['KING', 'QUEEN', 'JACK', 'JOKER']
const gameManager = new GameManager(secrets[0] ?? '')
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
  <GameHeader
    @open-pref="showPreferences = true"
    @open-help="showHelp = true"
    @open-stats="showStats = true"
  />
  <div class="game__container">
    <div class="word__container">
      <GameTile
        v-for="(char, index) in [...(secrets[0] ?? '')]"
        :key="index"
        :letter="char"
        :hidden="!gameManager.GuessedLetters.has(char)"
      />
    </div>
    <GameKeyboard @open-gameover="showGameover = true" />
    <GameModal
      :show="showGameover"
      :victory="gameManager.Victory.value"
      @close-gameover="showGameover = false"
    />
    <GameStats :show="showStats" @close-stats="showStats = false" />
    <GamePreferences :show="showPreferences" @close-pref="showPreferences = false" />
    <GameHelp :show="showHelp" @close-help="showHelp = false" />
  </div>
</template>

<style scoped>
*,
*::before,
*::after {
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
}
.word__container {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}
</style>
