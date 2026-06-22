export interface GameState {
  secretWord: string
  gameResult: string

  rightLetters: Set<string>
  guessedLetters: Set<string>

  rightGuesses: number
  errors: number
  resetTimer: number

  doneTodayGame: boolean
  victory: boolean
}
