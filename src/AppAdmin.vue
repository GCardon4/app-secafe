<script setup>
  import { RouterView, RouterLink } from 'vue-router';
  import { ref } from 'vue'

  import Admin from './components/pages/admin/Dashboard.vue';

  // Datos simulados
  const usuario = ref({
    nombre: 'Lucía Fernández'
  })

  const resumen = ref({
    usuarios: 12,
    cursos: 8,
    secados: 24
  })
</script>

<template>

  <header>
    <div class="w-100 text-white p-4">
        <h2 class="text-xl mb-4">Admin Panel</h2>

        <ul>
          <li>
            <router-link to="/admin" class="text-white">Dashboard</router-link>
          </li>
          <li>
            <router-link to="/admin/users" class="text-white">Usuarios</router-link>
            <ul>
                <li><router-link to="/admin/edituser" class="text-white">Editar Usuarios</router-link></li>
                <li><router-link to="/admin/adduser" class="text-white">Agregar Usuarios</router-link></li>
            </ul>
          </li>
          <li>
            <router-link to="/admin/courses" class="text-white">Cursos</router-link>
            <ul>
                <li><router-link to="/admin/editcourse" class="text-white">Editar Curso</router-link></li>
                <li><router-link to="/admin/addcourse" class="text-white">Agregar Curso</router-link></li>
            </ul>
          </li>
        </ul>
        
      </div>

  </header>


    <div class="flex">
      <!-- Barra lateral -->
      
      
      <!-- Contenido -->
      <div class="flex-1 p-6">
        <RouterView/> <!-- Aquí se carga el contenido de la página de admin -->
      </div>


    </div>

  </template>
  
  <style scoped>
  /* Estilos personalizados layout */
  </style>