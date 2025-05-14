<!-- src/views/LoteForm.vue -->
<template>
  <div class="p-6">
    <h2 class="text-2xl font-bold mb-4">{{ editMode ? 'Editar Lote' : 'Crear Lote' }}</h2>
    <form @submit.prevent="guardar">
      <div class="mb-4">
        <label class="block">Fecha</label>
        <input v-model="form.fecha" type="date" class="input" required />
      </div>
      <div class="mb-4">
        <label class="block">Variedad</label>
        <input v-model="form.variedad" class="input" required />
      </div>
      <div class="mb-4">
        <label class="block">Nombre del Lote</label>
        <input v-model="form.nombre_lote" class="input" required />
      </div>
      <div class="mb-4">
        <label class="block">Tipo de Secado</label>
        <input v-model="form.tipo_secado" class="input" required />
      </div>
      <button type="submit" class="bg-green-600 text-white px-4 py-2 rounded">
        {{ editMode ? 'Actualizar' : 'Guardar' }}
      </button>
    </form>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { supabase } from '../lib/supabase'

const route = useRoute()
const router = useRouter()
const editMode = ref(false)
const form = ref({
  fecha: '',
  variedad: '',
  nombre_lote: '',
  tipo_secado: '',
})

onMounted(async () => {
  if (route.params.id) {
    editMode.value = true
    const { data } = await supabase.from('lotes').select('*').eq('id', route.params.id).single()
    form.value = data
  }
})

const guardar = async () => {
  const { data: { user } } = await supabase.auth.getUser()
  const payload = { ...form.value, user_id: user.id }

  if (editMode.value) {
    await supabase.from('lotes').update(payload).eq('id', route.params.id)
  } else {
    await supabase.from('lotes').insert(payload)
  }
  router.push('/lotes')
}
</script>

<style scoped>
.input {
  @apply border rounded px-3 py-2 w-full;
}
</style>