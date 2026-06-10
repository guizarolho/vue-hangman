export interface GameState {
  secretWord: string
  guessedLetters: Set<string>
  rightLetters: Set<string>

  rightGuesses: number
  maxErrors: number

  usedHints: number
  maxHints: number
  resetTimer: number
}
