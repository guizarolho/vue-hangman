<script setup lang="ts">
import type { GameManager } from '@/game/GameManager'
import { inject } from 'vue'

defineProps<{
  show: boolean
}>()
const emit = defineEmits(['close-stats'])
const gameManager = inject<GameManager>('game')!
const gameStats = gameManager.getStats()
</script>

<template>
  <div v-if="show" @click.self="emit('close-stats')">
    <h3>Partidas Jogadas: {{ gameStats.gamesPlayed }}</h3>
    <h3>Vitórias: {{ gameStats.wins }}</h3>
    <h3>Derrotas: {{ gameStats.losses }}</h3>
    <h3>Maior Sequência: {{ gameStats.bestStreak }}</h3>
    <h3>Sequência Atual: {{ gameStats.currentStreak }}</h3>
  </div>
</template>
