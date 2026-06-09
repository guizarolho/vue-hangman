<script setup lang="ts">
const props = defineProps<{
  letter: string
}>()
</script>

<template>
  <div class="char__container">
    <h1 class="char">{{ props.letter }}</h1>
  </div>
</template>
