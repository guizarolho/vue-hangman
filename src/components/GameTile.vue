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
