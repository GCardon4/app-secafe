<template>
  <div class="min-h-screen flex flex-col justify-between">
    <div class="p-6 text-center">
      <h1 class="text-2xl font-bold mb-4">Bienvenido, {{ profile?.nombre }}</h1>
      <img :src="profile?.avatar_url" alt="Avatar" class="w-24 h-24 rounded-full mx-auto mb-6" />

      <div class="space-y-4">
        <button @click="$router.push('/lotes')" class="btn-primary">Ver Lotes</button>
        <button @click="$router.push('/lotes/crear')" class="btn-primary">Crear Lote</button>
        <button @click="logout" class="btn-primary bg-red-500">Cerrar sesión</button>
      </div>
    </div>

    <footer class="bg-white shadow p-4 flex justify-around fixed bottom-0 w-full">
      <button class="rounded-full w-12 h-12 bg-blue-500 text-white">🏠</button>
      <button class="rounded-full w-12 h-12 bg-blue-500 text-white">📦</button>
      <button class="rounded-full w-12 h-12 bg-blue-500 text-white">⚙️</button>
    </footer>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import { supabase } from '../lib/supabase'

const profile = ref(null)

const loadProfile = async () => {
  const { data: { user } } = await supabase.auth.getUser()
  if (user) {
    const { data } = await supabase.from('profiles').select('*').eq('id', user.id).single()
    profile.value = data
  }
}

const logout = async () => {
  await supabase.auth.signOut()
  window.location.href = '/login'
}

onMounted(loadProfile)
</script>

<style scoped>
.btn-primary {
  @apply bg-blue-600 text-white px-4 py-2 rounded w-full;
}
</style>