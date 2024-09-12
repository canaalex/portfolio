import { createRouter, createWebHistory } from 'vue-router'
import Home from './components/Home.vue'
import Experience from './components/Experience.vue'
import About from './components/About.vue'
import Projects from './components/Projects.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/experience', component: Experience },
  { path: '/about', component: About },
  { path: '/projects', component: Projects },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router;