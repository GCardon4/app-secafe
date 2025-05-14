<template>
  <div class="min-h-screen flex items-center justify-center bg-gray-100">
    <div class="bg-white p-6 rounded shadow w-full max-w-md">
      <h2 class="text-xl font-bold mb-4">Registro</h2>
      <form @submit.prevent="register">
        <input
          v-model="phone"
          type="tel"
          placeholder="+573001112233"
          class="border rounded px-3 py-2 w-full mb-4"
        />
        <button type="submit" class="bg-green-600 text-white px-4 py-2 rounded w-full">
          Registrarse
        </button>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { supabase } from '../lib/supabase'

const phone = ref('')

const register = async () => {
  const { error } = await supabase.auth.signInWithOtp({ phone: phone.value })
  if (error) alert('Error: ' + error.message)
  else alert('Verifica tu teléfono para continuar.')
}
</script>