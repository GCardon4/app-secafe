<template>
    <div class="p-8 space-y-8">
      <!-- Perfil -->
      <div class="flex items-center space-x-6">
        <img
          :src="perfil.avatar"
          alt="Avatar"
          class="w-24 h-24 rounded-full border shadow"
        />
        <div>
          <h2 class="text-2xl font-semibold">{{ perfil.nombre }}</h2>
          <p class="text-gray-600">{{ perfil.correo }}</p>
        </div>
      </div>
  
      <!-- Listado de cursos -->
      <div>
        <h3 class="text-xl font-bold mb-4">Mis cursos</h3>
        <ul class="space-y-2">
          <li
            v-for="curso in cursos"
            :key="curso.id"
            class="p-4 border rounded-md shadow-sm bg-white"
          >
            <h4 class="text-lg font-semibold">{{ curso.titulo }}</h4>
            <p class="text-gray-600">{{ curso.descripcion }}</p>
          </li>
        </ul>
      </div>
  
      <!-- Botón mostrar formulario -->
      <div>
        <button
          @click="mostrarFormulario = !mostrarFormulario"
          class="bg-green-600 hover:bg-green-700 text-white px-5 py-2 rounded shadow"
        >
          {{ mostrarFormulario ? 'Cancelar' : '➕ Agregar secado' }}
        </button>
      </div>
  
      <!-- Formulario de secado -->
      <div v-if="mostrarFormulario" class="bg-white p-6 rounded shadow-md border w-full md:w-1/2">
        <h3 class="text-lg font-bold mb-4">Nuevo secado</h3>
  
        <form @submit.prevent="guardarSecado" class="space-y-4">
          <div>
            <label class="block font-medium">Nombre del secado:</label>
            <input
              v-model="nuevoSecado.nombre"
              type="text"
              class="w-full p-2 border rounded"
              required
            />
          </div>
  
          <div>
            <label class="block font-medium">Fecha:</label>
            <input
              v-model="nuevoSecado.fecha"
              type="date"
              class="w-full p-2 border rounded"
              required
            />
          </div>
  
          <div>
            <label class="block font-medium">Descripción:</label>
            <textarea
              v-model="nuevoSecado.descripcion"
              rows="3"
              class="w-full p-2 border rounded"
            ></textarea>
          </div>
  
          <button
            type="submit"
            class="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded"
          >
            Guardar secado
          </button>
        </form>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  
  // Datos de usuario y cursos
  const perfil = ref({
    nombre: 'Lucía Fernández',
    correo: 'lucia@example.com',
    avatar: 'https://i.pravatar.cc/150?img=47'
  })
  
  const cursos = ref([
    { id: 1, titulo: 'Vue 3 Básico', descripcion: 'Aprende los fundamentos de Vue.js 3.' },
    { id: 2, titulo: 'Vue con Firebase', descripcion: 'Crea apps con backend en tiempo real.' },
    { id: 3, titulo: 'Tailwind CSS', descripcion: 'Estiliza tu app de forma moderna y rápida.' }
  ])
  
  // Formulario de secado
  const mostrarFormulario = ref(false)
  
  const nuevoSecado = ref({
    nombre: '',
    fecha: '',
    descripcion: ''
  })
  
  const guardarSecado = () => {
    console.log('Secado guardado:', nuevoSecado.value)
    alert(`Secado "${nuevoSecado.value.nombre}" agregado correctamente ✅`)
  
    // Limpiar formulario y ocultar
    nuevoSecado.value = { nombre: '', fecha: '', descripcion: '' }
    mostrarFormulario.value = false
  }
  </script>  