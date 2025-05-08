import { createRouter, createWebHistory } from 'vue-router'

// Admin Panel
import AdminDashboard from '../pages/admin/Dashboard.vue'
import AdminUsers from '../pages/admin/Users.vue'
import AdminCourses from '../pages/admin/Courses.vue'


const routes = [
   
 { path: '/admin', name: 'Admin', component: AdminDashboard },
  { path: '/adminUsers', name: 'adminUsers', component: AdminUsers },
  { path: '/adminCourses', name: 'adminCourses', component: AdminCourses },

]

const router = createRouter({
    history: createWebHistory(),
    routes,
  })
  
  export default router