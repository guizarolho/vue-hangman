<script setup lang="ts">
import type { GameManager } from '@/game/GameManager'
import { inject, ref } from 'vue'
const selected = ref('')
const gameManager = inject<GameManager>('game')!
const emit = defineEmits(['open-gameover'])

const keyboardRows: string[][] = [
  ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'],
  ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'],
  ['Z', 'X', 'C', 'V', 'B', 'N', 'M'],
]

function selectChar(char: string) {
  checkGameover()
  selected.value = char
}

function guess() {
  if (!gameManager || !selected.value) return
  checkGameover()
  gameManager.guess(selected.value)
}

function checkGameover() {
  if (gameManager.GameOver.value) {
    emit('open-gameover')
    return
  }
}
</script>

<template>
  <div class="keyboard__container">
    <div v-for="(row, index) in keyboardRows" :key="`row-${index}`" class="keyboard__row">
      <button
        v-for="char in row"
        :key="char"
        @click="selectChar(char)"
        :class="`keyboard__button--${gameManager.GuessedLetters.has(char) ? 'invisible' : 'visible'}`"
      >
        {{ char }}
      </button>
    </div>
    <button @click="guess">Enter</button>
    <button @click="selectChar('')">Backspace</button>
  </div>
</template>
