<template>
    <div class="max-w-xl mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
      <h2 class="text-2xl font-bold mb-6">Agregar Usuario</h2>
  
      <form @submit.prevent="guardarUsuario" class="space-y-4">
        <!-- Nombre -->
        <div>
          <label class="block text-sm font-medium mb-1">Nombre completo:</label>
          <input
            v-model="usuario.nombre"
            type="text"
            class="w-full border px-3 py-2 rounded focus:outline-none focus:ring focus:border-blue-300"
            required
          />
        </div>
  
        <!-- Correo -->
        <div>
          <label class="block text-sm font-medium mb-1">Correo electrónico:</label>
          <input
            v-model="usuario.correo"
            type="email"
            class="w-full border px-3 py-2 rounded focus:outline-none focus:ring focus:border-blue-300"
            required
          />
        </div>
  
        <!-- Contraseña -->
        <div>
          <label class="block text-sm font-medium mb-1">Contraseña:</label>
          <input
            v-model="usuario.password"
            type="password"
            class="w-full border px-3 py-2 rounded focus:outline-none focus:ring focus:border-blue-300"
            required
          />
        </div>
  
        <!-- Rol -->
        <div>
          <label class="block text-sm font-medium mb-1">Rol:</label>
          <select
            v-model="usuario.rol"
            class="w-full border px-3 py-2 rounded focus:outline-none focus:ring focus:border-blue-300"
            required
          >
            <option value="" disabled>Seleccione un rol</option>
            <option value="usuario">Usuario</option>
            <option value="admin">Administrador</option>
          </select>
        </div>
  
        <!-- Botón guardar -->
        <div class="pt-4">
          <button
            type="submit"
            class="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded shadow"
          >
            Guardar Usuario
          </button>
        </div>
      </form>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  
  const usuario = ref({
    nombre: '',
    correo: '',
    password: '',
    rol: ''
  })
  
  const guardarUsuario = () => {
    console.log('Usuario guardado:', usuario.value)
    alert(`Usuario "${usuario.value.nombre}" registrado con éxito ✅`)
  
    // Limpia el formulario
    usuario.value = {
      nombre: '',
      correo: '',
      password: '',
      rol: ''
    }
  }
  </script>