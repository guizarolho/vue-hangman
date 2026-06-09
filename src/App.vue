<script setup lang="ts">
import GameTile from './components/GameTile.vue'

const secrets = ['test', 'queen', 'jack', 'joker']
</script>

<template>
  <GameTile v-for="(char, index) in [...(secrets[0] ?? '')]" :key="index" :letter="char" />
</template>

<style scoped></style>
