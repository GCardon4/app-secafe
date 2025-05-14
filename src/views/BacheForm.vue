<!-- src/views/BacheForm.vue -->
<template>
  <div class="p-6">
    <h2 class="text-xl font-bold mb-4">Agregar Bache</h2>
    <form @submit.prevent="guardar">
      <div class="mb-4">
        <label class="block">Fecha</label>
        <input type="date" v-model="form.fecha" class="input" required />
      </div>
      <div class="mb-4">
        <label class="block">Peso (kg)</label>
        <input type="number" v-model="form.peso" class="input" required />
      </div>
      <button class="bg-green-600 text-white px-4 py-2 rounded">Guardar</button>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { supabase } from '../lib/supabase'

const form = ref({
  fecha: '',
  peso: null,
})
const route = useRoute()
const router = useRouter()

const guardar = async () => {
  const loteId = route.params.loteId
  await supabase.from('baches').insert({
    ...form.value,
    lote_id: loteId,
  })
  router.push(`/lotes/${loteId}/baches`)
}
</script>

<style scoped>
.input {
  @apply border rounded px-3 py-2 w-full;
}
</style>