import { DAY_EPOCH_TIME } from './consts'

export function saveDate(): Date {
  const date = new Date()
  date.setHours(0, 0, 0, 0)

  return date
}

export function checkStreak(lastGame: Date): boolean {
  const now = new Date().getTime()
  const distance = now - lastGame.getTime()

  return distance < DAY_EPOCH_TIME
}

export function checkToday(lastGame: Date): boolean {
  const today = new Date()
  return lastGame.toDateString() === today.toDateString()
}
