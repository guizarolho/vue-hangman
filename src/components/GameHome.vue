<script setup lang="ts">
import { provide, ref, watch } from 'vue'
import { GAME_MANAGER, GAME_SETTINGS } from '@/utils/consts.ts'
import { getDailyWord, normalizeText } from '@/utils/text.ts'
import { GameManager } from '../game/GameManager.ts'
import { GameSettingsManager } from '@/game/GameSettingsManager.ts'
import GameHeader from './GameHeader.vue'
import GameTile from './GameTile.vue'
import GameKeyboard from './GameKeyboard.vue'
import GameModal from './GameModal.vue'
import GamePreferences from './GamePreferences.vue'
import GameHelp from './GameHelp.vue'
import GameStats from './GameStats.vue'
import GameAttempts from './GameAttempts.vue'
import GameToast from './GameToast.vue'

// const secretWord = 'SABOR'
const secretWord = getDailyWord()
const gameManager = new GameManager(secretWord ?? '')
const settingsManager = new GameSettingsManager(document.documentElement)

const showGameover = ref(false)
const showPreferences = ref(false)
const showHelp = ref(false)
const showStats = ref(false)
const showWarning = ref(false)

// https://vuejs.org/guide/essentials/watchers
watch(
  () => gameManager.GameOver.value,
  (value) => {
    if (value) {
      activateGameoverModals()
      console.log('game over')
    }
  },
)

if (gameManager.GameOver.value) {
  activateGameoverModals()
}

function activateGameoverModals() {
  showGameover.value = true
  if (!gameManager.Victory.value) showWarning.value = true
}

provide(GAME_MANAGER, gameManager)
provide(GAME_SETTINGS, settingsManager)
</script>

<template>
  <div class="game__container">
    <GameHeader
      @open-pref="showPreferences = true"
      @open-help="showHelp = true"
      @open-stats="showStats = true"
    />
    <GameToast :show="showWarning" :text="secretWord" />
    <div class="word__container">
      <GameTile
        v-for="(char, index) in [...(secretWord ?? '')]"
        :key="index"
        :letter="char"
        :hidden="!gameManager.GuessedLetters.value.has(normalizeText(char))"
      />
    </div>

    <GameAttempts />
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
.game__container {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;

  background-color: var(--color-white);
  width: 100vw;
  height: 100vh;

  min-height: 100vh;
  min-width: 100vw;
}

.word__container {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  padding: 3rem 1rem 0;
  gap: 0.75rem;
  width: 100%;
  max-width: 40rem;
}
</style>
