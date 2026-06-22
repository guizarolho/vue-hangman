export interface GameState {
  secretWord: string
  rightLetters: Set<string>
  guessedLetters: Set<string>

  rightGuesses: number
  maxErrors: number

  usedHints: number
  maxHints: number
  resetTimer: number
}
