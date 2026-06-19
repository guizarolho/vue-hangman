<script setup lang="ts">
import { provide, ref, watch } from 'vue'
import GameHeader from './GameHeader.vue'
import GameTile from './GameTile.vue'
import GameKeyboard from './GameKeyboard.vue'
import GameModal from './GameModal.vue'
import GamePreferences from './GamePreferences.vue'
import GameHelp from './GameHelp.vue'
import GameStats from './GameStats.vue'
import { GameManager } from '../game/GameManager.ts'

const showGameover = ref(false)
const showPreferences = ref(false)
const showHelp = ref(false)
const showStats = ref(false)

const secrets = ['KING', 'QUEEN', 'JACK', 'JOKER']
const secretWord = secrets[3]
const gameManager = new GameManager(secretWord ?? '')

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
        v-for="(char, index) in [...(secretWord ?? '')]"
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

  font-family:
    'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
}

.game__container {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  width: 100%;
  margin-top: 30px;
  margin-bottom: 30px;
}

.word__container {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 40%;

  margin-top: 30px;
  margin-bottom: 30px;
}
</style>
