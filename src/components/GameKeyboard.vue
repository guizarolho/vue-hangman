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
      <button class="keyboard__enter" v-if="index === 2" @click="guess">ENTER</button>

      <button
        v-for="char in row"
        :key="char"
        @click="selectChar(char)"
        :class="`keyboard__button--${gameManager.GuessedLetters.has(char) ? 'invisible' : 'visible'}`"
      >
        {{ char }}
      </button>

      <button v-if="index === 2" @click="selectChar('')">⌫</button>
    </div>
  </div>
</template>

<style scoped>
.keyboard__container {
  display: flex;
  flex-direction: column;
  gap: 8px;
  align-items: center;
  width: 100%;
  margin-top: 1rem;
}

.keyboard__row {
  display: flex;
  gap: 6px;
}

.keyboard__row > button {
  width: 44px;
  height: 58px;

  border: none;
  border-radius: 4px;

  background: #818384;
  color: white;

  font-size: 1rem;
  font-weight: 700;

  cursor: pointer;

  transition:
    background-color 0.15s ease,
    transform 0.1s ease;
}

.keyboard__row > button.keyboard__enter {
  font-size: 0.6rem;
  background-color: black;
}

.keyboard__row button:hover {
  background: #9a9c9d;
}

.keyboard__row button:active {
  transform: scale(0.95);
}

.keyboard__button--visible {
  background: #818384;
}

.keyboard__button--invisible {
  background: #3a3a3c;
  color: #6b6b6b;
  cursor: default;
}

.keyboard__button--invisible:hover {
  background: #3a3a3c;
}

.keyboard__container > button:hover {
  background: #9a9c9d;
}

.keyboard__container > button:active {
  transform: scale(0.95);
}
</style>
