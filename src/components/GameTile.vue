<script setup lang="ts">
const props = defineProps<{
  letter: string
  hidden: boolean
}>()
</script>

<template>
  <div class="game-tile">
    <div class="game-tile__card" :class="{ 'game-tile__card--visible': !props.hidden }">
      <div class="game-tile__face game-tile__face--back" />
      <div class="game-tile__face game-tile__face--front">
        {{ props.letter }}
      </div>
    </div>
  </div>
</template>

<style scoped>
.game-tile {
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;

  perspective: 1000px;
}

.game-tile__card {
  position: relative;

  width: 100px;
  height: 100px;

  transform-style: preserve-3d;
  transition: transform 0.8s ease-in-out;
}

.game-tile__card--visible {
  transform: rotateY(180deg);
}

.game-tile__face {
  position: absolute;
  inset: 0;

  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 10px;

  font-size: 4rem;
  font-weight: bold;
  color: white;

  backface-visibility: hidden;
}

.game-tile__face--front {
  background: green;
  transform: rotateY(180deg);
}

.game-tile__face--back {
  background: red;
}
</style>
