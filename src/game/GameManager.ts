import type { GameState } from './GameState'
import { DEFEAT_MESSAGE, MAX_ERRORS, MAX_HINTS, VICTORY_MESSAGE } from '@/utils/consts'

export class GameManager {
  private gameState: GameState

  constructor(secretWord: string) {
    this.gameState = {
      secretWord: secretWord,

      guessedLetters: new Set(),

      rightLetters: new Set(secretWord),

      maxErrors: MAX_ERRORS,
      maxHints: MAX_HINTS,

      usedHints: 0,
      rightGuesses: 0,

      gameOver: false,
      victory: false,

      resetTimer: 0,
    }
  }

  guess(letter: string) {
    if (this.gameState.gameOver) return
    if (this.gameState.guessedLetters.has(letter)) return

    this.gameState.guessedLetters.add(letter)

    if (this.gameState.rightLetters.has(letter)) {
      this.gameState.rightGuesses += 1
    } else {
      this.gameState.maxErrors -= 1
    }

    if (this.checkCondition()) {
      this.gameState.gameOver = true
      this.gameOver()
    }
  }

  checkCondition(): boolean {
    if (this.gameState.rightGuesses >= this.gameState.rightLetters.size) {
      this.gameState.victory = true
      return true
    }

    if (this.gameState.maxErrors <= 0) {
      this.gameState.victory = false
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
    return this.gameState.maxHints
  }

  gameOver() {
    if (this.gameState.victory) {
      console.log(VICTORY_MESSAGE)
    } else {
      console.log(DEFEAT_MESSAGE)
    }
  }
}
