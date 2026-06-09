<script setup lang="ts">
import { ref } from 'vue'
const selected = ref('')
const keyboardRows: string[][] = [
  ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'],
  ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'],
  ['Z', 'X', 'C', 'V', 'B', 'N', 'M'],
]

function selectChar(char: string) {
  selected.value = char
}
</script>

<template>
  <div class="keyboard__container">
    <div v-for="(row, index) in keyboardRows" :key="`row-${index}`" class="keyboard__row">
      <button v-for="char in row" :key="char" @click="selectChar(char)" class="keyboard__button">
        {{ char }}
      </button>
    </div>
  </div>
</template>
