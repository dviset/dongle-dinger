import { createMemoryHistory, createRouter } from 'vue-router'
import Welcome from './components/Welcome.vue'
import DongleDetails from './components/DongleDetails.vue'

//import HomeView from './HomeView.vue'
//import AboutView from './AboutView.vue'

const routes = [
  { path: '/', component: Welcome,  meta: { transition: 'slide-left' }, },
  { path: '/Details/:bc', component: DongleDetails, props: true, meta: { transition: 'slide-right' }, },
]

const router = createRouter({
  history: createMemoryHistory(),
  routes,
})

export default router