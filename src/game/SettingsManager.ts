import type { GamePrefs } from './GamePrefs'
import { computed } from 'vue'
import { GAME_SETTINGS } from '@/utils/consts'

export class SettingsManager {
  public DarkMode
  public ContrastMode
  private gamePrefs: GamePrefs
  constructor() {
    this.gamePrefs = {
      darkMode: false,
      highContrastMode: false,
    }

    this.DarkMode = computed(() => this.gamePrefs.darkMode)
    this.ContrastMode = computed(() => this.gamePrefs.highContrastMode)
  }

  // use true for darkmode, false for highcontrastmode
  setMode(mode: boolean, value: boolean) {
    if (mode) {
      this.gamePrefs.darkMode = value
      return
    }
    this.gamePrefs.highContrastMode = value
  }

  saveSettings() {
    localStorage.setItem(GAME_SETTINGS, JSON.stringify(this.gamePrefs))
  }

  loadSettings() {
    const userSettings: GamePrefs = JSON.parse(localStorage.getItem(GAME_SETTINGS) || '')
    this.gamePrefs = userSettings
  }
}
