<template>
    <div class="p-8">
      <h1 class="text-2xl font-bold mb-6">Listado de Usuarios</h1>
  
      <table class="w-full border border-gray-300 text-left">
        <thead class="bg-gray-100">
          <tr>
            <th class="p-3 border-b">#</th>
            <th class="p-3 border-b">Nombre</th>
            <th class="p-3 border-b">Finca</th>
            <th class="p-3 border-b">Rol</th>
            <th class="p-3 border-b">Acciones</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(usuario, index) in usuarios" :key="usuario.id" class="hover:bg-gray-50">
            <td class="p-3 border-b">{{ index + 1 }}</td>
            <td class="p-3 border-b">{{ usuario.nombre }}</td>
            <td class="p-3 border-b">{{ usuario.finca }}</td>
            <td class="p-3 border-b">{{ usuario.rol }}</td>
            <td class="p-3 border-b space-x-2">
              <button class="bg-blue-500 text-white px-3 py-1 rounded">Editar</button>
              <button class="bg-red-500 text-white px-3 py-1 rounded">Eliminar</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  
  const usuarios = ref([
    { id: 1, nombre: 'Juan Pérez', finca: 'juan@example.com', rol: 'Usuario' },
    { id: 2, nombre: 'Laura Gómez', finca: 'laura@example.com', rol: 'Usuario' },
    { id: 3, nombre: 'Carlos Ruiz', finca: 'carlos@example.com', rol: 'Usuario' }
  ])
  </script>