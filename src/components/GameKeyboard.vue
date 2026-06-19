<script setup lang="ts">
import type { GameManager } from '@/game/GameManager'
import { inject, ref } from 'vue'
const selected = ref<HTMLButtonElement | null>(null)
const gameManager = inject<GameManager>('game')!
const emit = defineEmits(['open-gameover'])

const keyboardRows: string[][] = [
  ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'],
  ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'],
  ['Z', 'X', 'C', 'V', 'B', 'N', 'M'],
]

function selectChar(element: HTMLButtonElement) {
  checkGameover()
  selected.value = element
  selected.value.classList.add('highlight')
}

function guess() {
  if (!gameManager || !selected.value) return
  checkGameover()

  const result = gameManager.guess(selected.value.value)
  if (result === undefined) return

  selected.value.classList.add(result ? 'right' : 'wrong')
  selected.value.classList.remove('highlight')
  selected.value = null
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
        @click="selectChar($event.currentTarget as HTMLButtonElement)"
        class="keyboard__button"
        :value="char"
      >
        {{ char }}
      </button>

      <button v-if="index === 2" @click="null">⌫</button>
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

.keyboard__button.right {
  background: green;
  cursor: initial;
  transition: background-color 0.6s ease;
}

.keyboard__button.wrong {
  background: red;
  cursor: initial;
  transition: background-color 0.6s ease;
}

.keyboard__button.highlight {
  background: yellow;
  color: black;
  transition: background-color 0.6 ease;
}

.keyboard__button {
  background: #818384;
}

.keyboard__container > button:hover {
  background: #9a9c9d;
}

.keyboard__container > button:active {
  transform: scale(0.95);
}
</style>
