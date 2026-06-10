<script setup lang="ts">
import { DEFEAT_MESSAGE, VICTORY_MESSAGE } from '@/utils/consts'

defineProps<{
  show: boolean
  victory: boolean
}>()

const emit = defineEmits<{
  share: []
  close: []
}>()
</script>

<template>
  <div v-if="show" class="modal__container">
    <div class="modal__message">
      <h1 class="modal__title">
        {{ victory ? VICTORY_MESSAGE : DEFEAT_MESSAGE }}
      </h1>
      <div class="modal__actions">
        <button @click="emit('share')">Compartilhar</button>

        <button @click="emit('close')">Fechar</button>
      </div>
    </div>
  </div>
</template>
