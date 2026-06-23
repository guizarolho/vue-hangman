import { getWordIndex } from './time'
import { WORDS } from './words'

export function normalizeText(text: string) {
  return text.normalize('NFD').replace(/[\u0300-\u036f]/g, '')
}

export function getDailyWord(): string {
  const index = Math.floor(getWordIndex(WORDS.length))
  return WORDS[index]!
}
