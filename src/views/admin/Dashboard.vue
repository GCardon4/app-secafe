<!-- src/views/AdminDashboard.vue -->
<template>
  <div class="p-6">
    <h2 class="text-2xl font-bold mb-6">Panel de Administración</h2>

    <section class="mb-8">
      <h3 class="text-xl font-semibold mb-2">Usuarios Registrados</h3>
      <table class="w-full border border-gray-300">
        <thead class="bg-gray-100">
          <tr>
            <th class="p-2 text-left">Email</th>
            <th class="p-2">Último Acceso</th>
            <th class="p-2">Acciones</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="user in users" :key="user.id" class="border-t">
            <td class="p-2">{{ user.email }}</td>
            <td class="p-2">{{ formatDate(user.last_sign_in_at) }}</td>
            <td class="p-2 text-center">
              <button class="text-blue-600" @click="verLotes(user.id)">Lotes</button>
              <button class="ml-2 text-green-600" @click="verBaches(user.id)">Baches</button>
              <button class="ml-2 text-red-600" @click="eliminar(user.id)">Eliminar</button>
            </td>
          </tr>
        </tbody>
      </table>
    </section>

    <div v-if="vista === 'lotes'">
      <h3 class="text-lg font-semibold mb-2">Lotes de {{ usuarioActual }}</h3>
      <ul class="list-disc ml-6">
        <li v-for="l in lotes" :key="l.id">{{ l.nombre_lote }} - {{ l.fecha }}</li>
      </ul>
    </div>

    <div v-if="vista === 'baches'">
      <h3 class="text-lg font-semibold mb-2">Baches de {{ usuarioActual }}</h3>
      <ul class="list-disc ml-6">
        <li v-for="b in baches" :key="b.id">{{ b.fecha }} - {{ b.peso }} kg</li>
      </ul>
    </div>
  </div>
</template>

<script setup>
/*import { ref, onMounted } from 'vue'
import { supabase } from '../lib/supabase'

const users = ref([])
const lotes = ref([])
const baches = ref([])
const vista = ref(null)
const usuarioActual = ref('')

const cargarUsuarios = async () => {
  const { data } = await supabase.auth.admin.listUsers()
  users.value = data.users
}

const formatDate = (fecha) => {
  return new Date(fecha).toLocaleDateString()
}

const verLotes = async (userId) => {
  const { data } = await supabase.from('lotes').select('*').eq('user_id', userId)
  lotes.value = data
  vista.value = 'lotes'
  usuarioActual.value = users.value.find(u => u.id === userId)?.email
}

const verBaches = async (userId) => {
  const { data: lotesUsuario } = await supabase.from('lotes').select('id').eq('user_id', userId)
  const ids = lotesUsuario.map(l => l.id)
  const { data: bachesUsuario } = await supabase.from('baches').select('*').in('lote_id', ids)
  baches.value = bachesUsuario
  vista.value = 'baches'
  usuarioActual.value = users.value.find(u => u.id === userId)?.email
}

const eliminar = async (userId) => {
  if (!confirm('¿Eliminar este usuario?')) return
  await supabase.auth.admin.deleteUser(userId)
  await cargarUsuarios()
}

onMounted(cargarUsuarios) */
</script>