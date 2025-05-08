import { createRouter, createWebHistory } from 'vue-router'

// Páginas Caficultores
import Login from '../pages/Login.vue'
import Home from '../pages/user/Home.vue'



const routes = [
  { path: '/', name: 'Login', component: Login },
  { path: '/home', name: 'Home', component: Home },
  
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router