<script setup lang="ts">
defineProps<{
  show: boolean
}>()
const emit = defineEmits(['close-help'])
</script>

<template>
  <div v-if="show" @click.self="emit('close-help')">
    <h3>Objetivo</h3>
    <p>
      Adivinhe a palavra secreta letra por letra. Cada erro reduz suas tentativas restantes. Revele
      todas as letras antes que elas acabem para vencer. Boa sorte! 🍀
    </p>
  </div>
</template>
