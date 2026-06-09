<script setup lang="ts">
const props = defineProps<{
  letter: string
  hidden: boolean
}>()

const isHidden = props.hidden ? 'invisible' : 'visible'
</script>

<template>
  <div :class="`tile__container__${isHidden}`">
    <h1 class="tile__char">{{ props.letter }}</h1>
  </div>
</template>
