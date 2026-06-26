import type { GamePrefs } from './GamePrefs'
import { computed, reactive } from 'vue'
import { GAME_SETTINGS } from '@/utils/consts'

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
      this.root.classList.toggle('dark', value)
    } else {
      this.gamePrefs.highContrastMode = value
      this.root.classList.toggle('high-contrast', value)
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

    this.root.classList.toggle('dark', prefs.darkMode)
    this.root.classList.toggle('high-contrast', prefs.highContrastMode)
  }
}
