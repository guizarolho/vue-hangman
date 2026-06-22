import { reactive, ref, computed } from 'vue'
import { DEFEAT_MESSAGE, GAME_STATE, MAX_ERRORS, MAX_HINTS, VICTORY_MESSAGE } from '@/utils/consts'
import type { GameState } from './GameState'
import type { GameStats } from './GameStats'

export class GameManager {
  private gameState: GameState
  private gameStats: GameStats

  public GameOver = ref<boolean>(false)
  public Victory = ref<boolean>(false)
  public GuessedLetters
  public AttemptsRemaining

  constructor(secretWord: string) {
    this.gameState = reactive({
      secretWord: secretWord,

      rightLetters: new Set(secretWord),
      guessedLetters: new Set(),

      errors: MAX_ERRORS,
      hints: MAX_HINTS,

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

    this.AttemptsRemaining = computed(() => this.gameState.errors)
    this.GuessedLetters = computed(() => this.gameState.guessedLetters)
  }

  guess(letter: string) {
    if (this.GameOver.value === true) return
    if (this.gameState.guessedLetters.has(letter)) return

    this.gameState.guessedLetters.add(letter)
    const isCorrect = this.gameState.rightLetters.has(letter)

    if (isCorrect) {
      this.gameState.rightGuesses++
    } else {
      this.gameState.errors--
    }

    if (this.checkCondition()) {
      this.GameOver.value = true
      this.gameStats.gamesPlayed++
      this.gameOver()
    }

    return isCorrect
  }

  checkCondition(): boolean {
    if (this.gameState.rightGuesses >= this.gameState.rightLetters.size) {
      this.Victory.value = true
      this.gameStats.wins += 1
      return true
    }

    if (this.gameState.errors <= 0) {
      this.Victory.value = false
      this.gameStats.losses += 1
      return true
    }

    return false
  }

  getMaskedWord(): string {
    return [...this.gameState.secretWord]
      .map((letter) => (this.gameState.guessedLetters.has(letter) ? letter : '_'))
      .join(' ')
  }

  getRemainingHints(): number {
    return this.gameState.hints
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

  saveState() {
    localStorage.setItem(GAME_STATE, JSON.stringify(this.gameState))
  }

  loadState() {
    const savedState: GameState = JSON.parse(localStorage.getItem(GAME_STATE) || '')
    return savedState
  }
}
