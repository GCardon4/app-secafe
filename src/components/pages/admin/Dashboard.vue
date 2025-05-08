<script setup>
 
</script>


<template>
  
  <div id="nav">
   
  </div>
  
    <div class="p-6 space-y-6">
      <!-- Bienvenida -->
      <div>
        <h1 class="text-3xl font-bold">👋 Bienvenido, {{ usuario.nombre }}</h1>
        <p class="text-gray-600 mt-1">Este es tu panel de control.</p>
      </div>
  
      <!-- Tarjetas resumen -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div class="bg-white shadow rounded-xl p-5">
          <h3 class="text-sm font-semibold text-gray-500 uppercase">Usuarios</h3>
          <p class="text-3xl font-bold mt-2">{{ resumen.usuarios }}</p>
        </div>
  
        <div class="bg-white shadow rounded-xl p-5">
          <h3 class="text-sm font-semibold text-gray-500 uppercase">Cursos</h3>
          <p class="text-3xl font-bold mt-2">{{ resumen.cursos }}</p>
        </div>
  
        <div class="bg-white shadow rounded-xl p-5">
          <h3 class="text-sm font-semibold text-gray-500 uppercase">Secados</h3>
          <p class="text-3xl font-bold mt-2">{{ resumen.secados }}</p>
        </div>
      </div>
  
      <!-- Contenido adicional -->
      <div class="bg-white shadow rounded-xl p-6">
        <h2 class="text-xl font-semibold mb-4">Resumen general</h2>
        <p class="text-gray-700">
          Aquí puedes agregar gráficos, últimas actividades o enlaces rápidos a módulos clave del sistema.
        </p>
      </div>
    </div>
  </template>
  
