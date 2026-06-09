<script setup lang="ts">
const props = defineProps<{
  letter: string
}>()
</script>

<template>
  <div class="tile__container">
    <h1 class="tile__char">{{ props.letter }}</h1>
  </div>
</template>
