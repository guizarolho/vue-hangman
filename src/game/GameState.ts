export interface GameState {
  secretWord: string
  guessedLetters: Set<string>
  rightLetters: Set<string>

  rightGuesses: number
  maxErrors: number

  usedHints: number
  maxHints: number

  gameOver: boolean
  victory: boolean

  resetTimer: number
}
