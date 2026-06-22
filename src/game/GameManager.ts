import { reactive, computed } from 'vue'
import type { ComputedRef } from 'vue'
import { GAME_STATE, GAME_STATS, GREEN_TILE, MAX_ERRORS, RED_TILE } from '@/utils/consts'
import type { GameState } from './GameState'
import type { GameStats } from './GameStats'
import { checkStreak, saveDate } from '@/utils/time'

export class GameManager {
  private gameState: GameState
  private gameStats: GameStats

  public GameOver: ComputedRef<boolean>
  public Victory: ComputedRef<boolean>
  public GuessedLetters: ComputedRef<Set<string>>
  public RightLetters: ComputedRef<Set<string>>
  public AttemptsRemaining: ComputedRef<number>

  constructor(secretWord: string) {
    this.gameState = reactive({
      secretWord: secretWord,
      gameResult: '',

      rightLetters: new Set(secretWord),
      guessedLetters: new Set(),

      errors: MAX_ERRORS,
      rightGuesses: 0,
      resetTimer: 0,

      doneTodayGame: false,
      victory: false,
    })

    this.gameStats = {
      gamesPlayed: 0,
      wins: 0,
      losses: 0,
      currentStreak: 0,
      bestStreak: 0,
      lastGame: new Date(),
    }

    this.AttemptsRemaining = computed(() => this.gameState.errors)
    this.GuessedLetters = computed(() => this.gameState.guessedLetters)
    this.RightLetters = computed(() => this.gameState.rightLetters)
    this.GameOver = computed(() => this.gameState.doneTodayGame)
    this.Victory = computed(() => this.gameState.victory)

    this.loadStats()
    this.loadState()
  }

  guess(letter: string) {
    if (this.gameState.doneTodayGame === true) return
    if (this.gameState.guessedLetters.has(letter)) return

    this.gameState.guessedLetters.add(letter)
    const isCorrect = this.gameState.rightLetters.has(letter)

    if (isCorrect) {
      this.gameState.rightGuesses++
      this.gameState.gameResult += GREEN_TILE
    } else {
      this.gameState.errors--
      this.gameState.gameResult += RED_TILE
    }

    this.saveState()

    if (this.checkCondition()) {
      this.gameState.doneTodayGame = true
      this.gameStats.gamesPlayed++

      this.updateCurrentStreak()
      this.gameStats.lastGame = saveDate()
      this.saveStats()
    }

    return isCorrect
  }

  updateCurrentStreak() {
    const continuedStreak = checkStreak(this.gameStats.lastGame)

    if (!this.Victory.value) {
      this.gameStats.currentStreak = 0
      return
    }

    if (continuedStreak) {
      this.gameStats.currentStreak++
    } else {
      this.gameStats.currentStreak = 1
    }

    if (this.gameStats.currentStreak > this.gameStats.bestStreak) {
      this.gameStats.bestStreak = this.gameStats.currentStreak
    }
  }

  checkCondition(): boolean {
    if (this.gameState.rightGuesses >= this.gameState.rightLetters.size) {
      this.gameState.victory = true
      this.gameStats.wins += 1
      return true
    }

    if (this.gameState.errors <= 0) {
      this.gameState.victory = false
      this.gameStats.losses += 1
      return true
    }

    return false
  }

  getGameResult() {
    return this.gameState.gameResult
  }

  getState() {
    return this.gameState
  }

  getStats() {
    return this.gameStats
  }

  saveStats() {
    localStorage.setItem(GAME_STATS, JSON.stringify(this.gameStats))
  }

  loadStats() {
    const data = localStorage.getItem(GAME_STATS)
    if (!data) return
    const parsed = JSON.parse(data) as GameStats
    this.gameStats = {
      ...parsed,
      lastGame: new Date(parsed.lastGame),
    }
  }

  saveState() {
    localStorage.setItem(
      GAME_STATE,
      JSON.stringify({
        ...this.gameState,
        rightLetters: [...this.gameState.rightLetters],
        guessedLetters: [...this.gameState.guessedLetters],
      }),
    )
  }

  loadState() {
    const data = localStorage.getItem(GAME_STATE)
    if (!data) return
    const parsed = JSON.parse(data) as GameState
    this.gameState = reactive({
      ...parsed,
      rightLetters: new Set(parsed.rightLetters),
      guessedLetters: new Set(parsed.guessedLetters),
    })
  }
}
