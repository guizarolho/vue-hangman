<script setup lang="ts">
import { DEFEAT_MESSAGE, VICTORY_MESSAGE } from '@/utils/consts'

defineProps<{
  show: boolean
  victory: boolean
  message: string
}>()

const emit = defineEmits<{
  share: []
  close: []
}>()
</script>

<template>
  <div v-if="show" class="modal-overlay">
    <div class="modal">
      <h1>
        {{ victory ? VICTORY_MESSAGE : DEFEAT_MESSAGE }}
      </h1>

      <p>{{ message }}</p>

      <div class="modal__actions">
        <button @click="emit('share')">Compartilhar</button>

        <button @click="emit('close')">Fechar</button>
      </div>
    </div>
  </div>
</template>
