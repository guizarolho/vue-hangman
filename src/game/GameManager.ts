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

  guess(letter: string): boolean {
    this.gameState.guessedLetters.add(letter)
    if (this.gameState.rightLetters.has(letter)) {
      this.gameState.rightGuesses += 1
      return true
    } else {
      this.gameState.maxErrors -= 1
      return false
    }
  }

  getMaskedWord(): string {
    return [...this.gameState.secretWord]
      .map((letter) => (this.gameState.guessedLetters.has(letter) ? letter : '_'))
      .join(' ')
  }

  getRemainingHints(): number {
    return this.gameState.maxHints
  }

  gameOver(): string {
    if (this.gameState.victory) {
      return VICTORY_MESSAGE
    } else {
      return DEFEAT_MESSAGE
    }
  }
}
