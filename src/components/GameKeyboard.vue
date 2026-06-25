<script setup lang="ts">
import type { GameManager } from '@/game/GameManager'
import { GAME_MANAGER } from '@/utils/consts'
import { OPEN_GAMEOVER } from '@/utils/emits'
import { inject, onMounted, onUnmounted, ref } from 'vue'

const selected = ref<string>('')
const gameManager = inject<GameManager>(GAME_MANAGER)!
const keyTiles: { [key: string]: HTMLButtonElement } = {}
const emit = defineEmits([OPEN_GAMEOVER])

const keyboardRows: string[][] = [
  ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'],
  ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'],
  ['Z', 'X', 'C', 'V', 'B', 'N', 'M'],
]

function selectChar(char: string) {
  checkGameover()

  if (selected.value === char) return
  if (keyTiles[char]?.disabled) return

  keyTiles[selected.value]?.classList.remove('highlight')
  selected.value = char
  keyTiles[selected.value]?.classList.add('highlight')
}

function guess() {
  if (!gameManager || !selected.value) return
  checkGameover()

  const result = gameManager.guess(selected.value)
  if (result === undefined) return

  const targetTile = keyTiles[selected.value]!
  targetTile.classList.remove('highlight')
  targetTile.classList.add(result ? 'right' : 'wrong')
  targetTile.disabled = true

  selected.value = ''
}

function checkGameover() {
  if (gameManager.GameOver.value) {
    emit(OPEN_GAMEOVER)
    return
  }
}

function handleKeydown(event: KeyboardEvent) {
  const key = event.key.toUpperCase()
  if (/^[A-Z]$/.test(key)) {
    selectChar(key)
  }

  if (event.key === 'Backspace') {
    clear()
  }

  if (event.key === 'Enter') {
    guess()
  }
}

function clear() {
  keyTiles[selected.value]?.classList.remove('highlight')
  selected.value = ''
}

onMounted(() => {
  window.addEventListener('keydown', handleKeydown)

  for (const element of gameManager.GuessedLetters.value) {
    const targetTile = keyTiles[element]!
    if (gameManager.RightLetters.value.has(element)) {
      targetTile.classList.add('right')
    } else {
      targetTile.classList.add('wrong')
    }
    targetTile.disabled = true
  }
})

onUnmounted(() => {
  window.removeEventListener('keydown', handleKeydown)
})
</script>

<template>
  <div class="keyboard__container">
    <div v-for="(row, index) in keyboardRows" :key="`row-${index}`" class="keyboard__row">
      <button class="keyboard__enter" v-if="index === 2" @click="guess">ENTER</button>
      <button
        v-for="char in row"
        :key="char"
        :ref="
          (e) => {
            keyTiles[char] = e as HTMLButtonElement
          }
        "
        @click="selectChar(char)"
        class="keyboard__button"
        :value="char"
      >
        {{ char }}
      </button>

      <button class="keyboard__clear" v-if="index === 2" @click="clear()">⌫</button>
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

  background: var(--keyboard);
  color: var(--color-white);

  font-size: 1rem;
  font-weight: 700;

  cursor: pointer;

  transition:
    background-color 0.15s ease,
    transform 0.1s ease;
}

.keyboard__row > button.keyboard__enter {
  font-size: 0.6rem;
  background-color: var(--color-black);
}

.keyboard__row button:hover {
  background: var(--keyboard-hover);
  transform: translateY(-1px);
}

.keyboard__row button:active {
  transform: scale(0.95) translateY(0px);
}

.keyboard__button.right {
  background: var(--color-success);
  cursor: not-allowed;
  transition: background-color 0.6s ease;
}

.keyboard__button.right:hover {
  background: var(--color-success-light);
}

.keyboard__button.wrong {
  background: var(--color-error);
  cursor: not-allowed;
  transition: background-color 0.6s ease;
}

.keyboard__button.wrong:hover {
  background: var(--color-error-light);
}

.keyboard__button.highlight {
  background: var(--color-selection) !important;
  color: var(--color-black) !important;
  transition: background-color 0.1 ease;
}
</style>
