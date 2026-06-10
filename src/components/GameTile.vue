<script setup lang="ts">
const props = defineProps<{
  letter: string
  hidden: boolean
}>()
</script>

<template>
  <div :class="`tile__container--${props.hidden ? 'invisible' : 'visible'}`">
    <h1 class="tile__char">{{ props.letter }}</h1>
  </div>
</template>

<style scoped>
.tile__container--invisible {
  background: rgba(231, 7, 7, 0.7);
}
.tile__container--visible {
  background: rgba(52, 231, 7, 0.7);
}
</style>
