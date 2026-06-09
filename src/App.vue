<script setup lang="ts">
import GameHeader from './components/GameHeader.vue'
import GameTile from './components/GameTile.vue'
import GameKeyboard from './components/GameKeyboard.vue'

const secrets = ['test', 'queen', 'jack', 'joker']
</script>

<template>
  <GameHeader />
  <div class="word__container" style="display: flex; flex-direction: row">
    <GameTile v-for="(char, index) in [...(secrets[0] ?? '')]" :key="index" :letter="char" />
  </div>
  <GameKeyboard />
</template>

<style scoped></style>
