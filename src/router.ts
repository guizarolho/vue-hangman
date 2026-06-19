import { createMemoryHistory, createRouter } from 'vue-router'

import GameHome from './components/GameHome.vue'
import GameAbout from './components/GameAbout.vue'

const routes = [
  { path: '/', component: GameHome },
  { path: '/about', component: GameAbout },
]

const router = createRouter({
  history: createMemoryHistory(),
  routes,
})

export default router
