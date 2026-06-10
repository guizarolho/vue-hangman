<script setup lang="ts">
const props = defineProps<{
  letter: string
  hidden: boolean
}>()
</script>

<template>
  <div :class="`tile__container__${props.hidden ? 'invisible' : 'visible'}`">
    <h1 class="tile__char">{{ props.letter }}</h1>
  </div>
</template>

<style scoped>
.tile__container__invisible {
  background: rgba(231, 7, 7, 0.7);
}
.tile__container__visible {
  background: rgba(52, 231, 7, 0.7);
}
</style>
