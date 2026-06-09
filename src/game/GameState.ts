export interface gameState {
  secretWord: string
  guessedLetters: Set<string>
  wrongLetters: Set<string>
  maxErrors: number
  maxHints: number
  gameOver: boolean
  victory: boolean
  resetTimer: number
}
