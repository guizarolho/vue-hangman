<script setup lang="ts">
const props = defineProps<{
  letter: string
}>()
</script>

<template>
  <div>
    <h1>{{ props.letter }}</h1>
  </div>
</template>
