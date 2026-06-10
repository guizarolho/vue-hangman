<script setup lang="ts">
defineProps<{
  show: boolean
}>()
const emit = defineEmits(['close-pref'])
</script>
<template>
  <div v-if="show" @click.self="emit('close-pref')">
    <h3>Contraste</h3>
    <h3>Modo</h3>
    <h3>Estatísticas</h3>
    <h3>Comentários</h3>
  </div>
</template>
