<script setup lang="ts">
// https://www.w3schools.com/HOWTO/howto_js_countdown.asp
import { ref, onMounted, onUnmounted } from 'vue'

const timestamp = ref<string>()
const countDownDate = new Date()
countDownDate.setDate(countDownDate.getDate() + 1)
countDownDate.setHours(0, 0, 0, 0)

function timeUpdate() {
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
}

const x = setInterval(timeUpdate, 1000)

onMounted(() => {
  timeUpdate()
})

onUnmounted(() => {
  clearInterval(x)
})
</script>

<template>
  <div class="timer__container">
    <span class="timer">{{ timestamp }}</span>
  </div>
</template>

<style scoped>
.timer__container {
  display: inline-flex;
  background-color: #f8fafc;
  border: 1px solid #e2e8f0;
  padding: 6px 16px;
  border-radius: 20px;
}

.timer {
  font-size: 18px;
  font-weight: 700;
  color: #334155;
  letter-spacing: 0.5px;
}
</style>
