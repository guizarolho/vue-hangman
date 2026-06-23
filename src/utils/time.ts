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

// https://www.reddit.com/r/webdev/comments/tpwzgh/how_to_make_a_once_per_day_limit_on_a_wordlelike/
export function getWordIndex(solutions: number) {
  const date = new Date()
  date.setHours(0, 0, 0, 0)

  const dateEpoch = Math.floor(date.getTime() / DAY_EPOCH_TIME)
  return dateEpoch % solutions
}
