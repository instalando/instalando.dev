import { createRouter, createWebHistory } from 'vue-router'
import Home from '/src/views/Home.vue'
import Projects from '/src/views/Projects.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/projects',
    name: 'Projects',
    component: Projects
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
