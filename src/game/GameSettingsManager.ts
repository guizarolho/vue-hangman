import type { GamePrefs } from './GamePrefs'
import { computed, reactive } from 'vue'
import { DARK_MODE, GAME_SETTINGS, HIGHCONTRAST_MODE } from '@/utils/consts'

export class GameSettingsManager {
  public DarkMode
  public ContrastMode
  private gamePrefs: GamePrefs
  private root: HTMLElement

  constructor(element: HTMLElement) {
    this.gamePrefs = reactive({
      darkMode: false,
      highContrastMode: false,
    })

    this.root = element
    this.DarkMode = computed(() => this.gamePrefs.darkMode)
    this.ContrastMode = computed(() => this.gamePrefs.highContrastMode)

    this.loadSettings()
  }

  setMode(isDarkMode: boolean, value: boolean) {
    if (isDarkMode) {
      this.gamePrefs.darkMode = value
      this.root.classList.toggle(DARK_MODE, value)
    } else {
      this.gamePrefs.highContrastMode = value
      this.root.classList.toggle(HIGHCONTRAST_MODE, value)
    }

    this.saveSettings()
  }

  saveSettings() {
    localStorage.setItem(GAME_SETTINGS, JSON.stringify(this.gamePrefs))
  }

  loadSettings() {
    const data = localStorage.getItem(GAME_SETTINGS)
    if (!data) return
    const prefs = JSON.parse(data) as GamePrefs

    this.gamePrefs.darkMode = prefs.darkMode
    this.gamePrefs.highContrastMode = prefs.highContrastMode

    this.root.classList.toggle(DARK_MODE, prefs.darkMode)
    this.root.classList.toggle(HIGHCONTRAST_MODE, prefs.highContrastMode)
  }
}
