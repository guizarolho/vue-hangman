<script setup lang="ts">
defineProps<{
  show: boolean
}>()
const emit = defineEmits(['close-stats'])
</script>

<template>
  <div v-if="show" @click.self="emit('close-stats')">
    <h3>Partidas Jogadas</h3>
    <h3>Vitórias</h3>
    <h3>Derrotas</h3>
    <h3>Maior Sequência</h3>
    <h3>Sequência Atual</h3>
  </div>
</template>
