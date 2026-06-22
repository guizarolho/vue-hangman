export interface GameState {
  secretWord: string
  rightLetters: Set<string>
  guessedLetters: Set<string>

  rightGuesses: number
  errors: number
  resetTimer: number
}
