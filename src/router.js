import { createMemoryHistory, createRouter } from 'vue-router'
import Welcome from './components/Welcome.vue'

//import HomeView from './HomeView.vue'
//import AboutView from './AboutView.vue'

const routes = [
  { path: '/', component: Welcome },
  //{ path: '/about', component: AboutView },
]

const router = createRouter({
  history: createMemoryHistory(),
  routes,
})

export default router