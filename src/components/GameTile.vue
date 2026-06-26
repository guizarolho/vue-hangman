<script setup lang="ts">
// https://www.w3schools.com/howto/howto_css_flip_card.asp
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

  width: 6.25rem;
  height: 6.25rem;

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

  border-radius: 0.625rem;

  font-size: 4rem;
  font-weight: bold;
  color: var(--color-white);

  backface-visibility: hidden;
}

.game-tile__face--front {
  background: var(--color-success);
  transform: rotateY(180deg);
}

.game-tile__face--back {
  background: var(--color-error);
}
</style>
