<script setup lang="ts">
import { ref } from 'vue'

const timestamp = ref<string>('')
const countDownDate = new Date()
countDownDate.setDate(countDownDate.getDate() + 1)
countDownDate.setHours(0, 0, 0, 0)

const x = setInterval(function () {
  const now = new Date().getTime()
  const distance = countDownDate.getTime() - now
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
  const seconds = Math.floor((distance % (1000 * 60)) / 1000)

  timestamp.value =
    `${String(hours).padStart(2, '0')}:` +
    `${String(minutes).padStart(2, '0')}:` +
    `${String(seconds).padStart(2, '0')}`

  if (distance < 0) {
    clearInterval(x)
    timestamp.value = 'EXPIRED'
  }
}, 1000)
</script>

<template>
  <div class="timer__container">
    <span class="timer">{{ timestamp }}</span>
  </div>
</template>
