<script setup lang="ts">
// should show up only on loose
defineProps<{
  show: boolean
  text: string
}>()
</script>

<template>
  <div class="warning__container" :class="show && 'warning__container-active'">
    <div class="warning__content">
      <span class="warning__text">Palavra: {{ text }}</span>
    </div>
  </div>
</template>

<style scoped>
.warning__container {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.warning__content {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 0%;
  background: green;
  color: white;
  margin: 10px;
  padding: 1rem;
  border-radius: 10px;
  font-size: 1rem;
  transition: width 0.6s ease-in-out;
}

.warning__container-active .warning__content {
  width: 30%;
}
</style>
