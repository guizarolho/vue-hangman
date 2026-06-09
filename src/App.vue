<script setup lang="ts">
import GameHeader from './components/GameHeader.vue'
import GameTile from './components/GameTile.vue'

const secrets = ['test', 'queen', 'jack', 'joker']
</script>

<template>
  <GameHeader />
  <div class="word__container">
    <GameTile v-for="(char, index) in [...(secrets[0] ?? '')]" :key="index" :letter="char" />
  </div>
</template>

<style scoped></style>
