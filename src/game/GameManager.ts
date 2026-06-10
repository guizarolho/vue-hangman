import { reactive, ref } from 'vue'
import type { GameState } from './GameState'
import { DEFEAT_MESSAGE, MAX_ERRORS, MAX_HINTS, VICTORY_MESSAGE } from '@/utils/consts'
import type { GameStats } from './GameStats'

export class GameManager {
  private gameState: GameState
  private gameStats: GameStats

  public GameOver = ref<boolean>(false)
  public Victory = ref<boolean>(false)
  public GuessedLetters = reactive(new Set())

  constructor(secretWord: string) {
    this.gameState = reactive({
      secretWord: secretWord,

      rightLetters: new Set(secretWord),

      maxErrors: MAX_ERRORS,
      maxHints: MAX_HINTS,

      usedHints: 0,
      rightGuesses: 0,
      resetTimer: 0,
    })

    this.gameStats = {
      gamesPlayed: 0,
      wins: 0,
      losses: 0,
      currentStreak: 0,
      bestStreak: 0,
    }
  }

  guess(letter: string) {
    if (this.GameOver.value === true) return
    if (this.GuessedLetters.has(letter)) return

    this.GuessedLetters.add(letter)

    if (this.gameState.rightLetters.has(letter)) {
      this.gameState.rightGuesses += 1
    } else {
      this.gameState.maxErrors -= 1
    }

    if (this.checkCondition()) {
      this.GameOver.value = true
      this.gameOver()
    }
  }

  checkCondition(): boolean {
    if (this.gameState.rightGuesses >= this.gameState.rightLetters.size) {
      this.Victory.value = true
      return true
    }

    if (this.gameState.maxErrors <= 0) {
      this.Victory.value = false
      return true
    }

    return false
  }

  getMaskedWord(): string {
    return [...this.gameState.secretWord]
      .map((letter) => (this.GuessedLetters.has(letter) ? letter : '_'))
      .join(' ')
  }

  getRemainingHints(): number {
    return this.gameState.maxHints
  }

  gameOver() {
    if (this.Victory.value) {
      console.log(VICTORY_MESSAGE)
    } else {
      console.log(DEFEAT_MESSAGE)
    }
  }

  getState() {
    return this.gameState
  }

  getStats() {
    return this.gameStats
  }
}
