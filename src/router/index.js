import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import BacheForm from '../views/BacheForm.vue'
import BachesPorLote from '../views/BachesPorLote.vue'
import AdminDashboard from '../views/AdminDashboard.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/lotes/:loteId/baches', component: BachesPorLote },
  { path: '/lotes/:loteId/baches/nuevo', component: BacheForm },
  { path: '/admin', component: AdminDashboard, meta: { requiresAdmin: true } },
]

export const router = createRouter({
  history: createWebHistory(),
  routes
})