<!-- src/views/BachesPorLote.vue -->
<template>
  <div class="p-6">
    <h2 class="text-2xl font-bold mb-4">Baches del Lote</h2>

    <table class="min-w-full border border-gray-300 mb-6">
      <thead class="bg-gray-100">
        <tr>
          <th class="p-2 text-left">Fecha</th>
          <th class="p-2 text-left">Peso (kg)</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="b in baches" :key="b.id" class="border-t">
          <td class="p-2">{{ b.fecha }}</td>
          <td class="p-2">{{ b.peso }}</td>
        </tr>
      </tbody>
    </table>

    <div class="mb-4">
      <p class="font-semibold">Total acumulado: {{ total }} kg</p>
      <p class="text-sm">Meta: 100 kg</p>
      <div class="w-full bg-gray-200 rounded h-4 mt-2">
        <div
          class="h-4 bg-green-500 rounded"
          :style="{ width: `${porcentaje}%` }"
        ></div>
      </div>
    </div>

    <button
      @click="$router.push(`/lotes/${loteId}/baches/nuevo`)"
      class="bg-blue-600 text-white px-4 py-2 rounded"
    >
      + Agregar Bache
    </button>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'
import { supabase } from '../lib/supabase'

const route = useRoute()
const loteId = route.params.loteId
const baches = ref([])
const total = ref(0)
const porcentaje = ref(0)

onMounted(async () => {
  const { data } = await supabase.from('baches').select('*').eq('lote_id', loteId)
  baches.value = data
  total.value = data.reduce((sum, b) => sum + b.peso, 0)
  porcentaje.value = Math.min((total.value / 100) * 100, 100).toFixed(2)
})
</script>