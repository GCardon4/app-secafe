<!-- src/views/LotesView.vue -->
<template>
  <div class="p-6">
    <h2 class="text-2xl font-bold mb-4">Mis Lotes</h2>

    <table class="min-w-full border border-gray-300">
      <thead class="bg-gray-100">
        <tr>
          <th class="p-2 text-left">Fecha</th>
          <th class="p-2 text-left">Variedad</th>
          <th class="p-2 text-left">Nombre</th>
          <th class="p-2 text-left">Tipo Secado</th>
          <th class="p-2"></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="lote in lotes" :key="lote.id" class="border-t">
          <td class="p-2">{{ lote.fecha }}</td>
          <td class="p-2">{{ lote.variedad }}</td>
          <td class="p-2">{{ lote.nombre_lote }}</td>
          <td class="p-2">{{ lote.tipo_secado }}</td>
          <td class="p-2">
            <button @click="editarLote(lote.id)" class="text-blue-600">Editar</button>
          </td>
        </tr>
      </tbody>
    </table>

    <div class="mt-6 text-center">
      <button @click="$router.push('/lotes/crear')" class="bg-blue-600 text-white px-4 py-2 rounded">
        + Agregar Lote
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { supabase } from '../lib/supabase'
import { useRouter } from 'vue-router'

const lotes = ref([])
const router = useRouter()

const cargarLotes = async () => {
  const { data: { user } } = await supabase.auth.getUser()
  const { data } = await supabase.from('lotes').select('*').eq('user_id', user.id)
  lotes.value = data
}

const editarLote = (id) => {
  router.push(`/lotes/editar/${id}`)
}

onMounted(cargarLotes)
</script>