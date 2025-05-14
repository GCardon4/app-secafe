<template>
  <div class="min-h-screen flex flex-col justify-center items-center p-4">
    <div class="w-full max-w-md bg-white p-6 rounded-lg shadow">
      <h1 class="text-2xl font-bold mb-6 text-center">Iniciar Sesión</h1>

      <form @submit.prevent="handleLogin" v-if="!codigoEnviado" class="space-y-4">
        <div>
          <label class="block mb-1">Número de teléfono</label>
          <input
            v-model="telefono"
            type="tel"
            placeholder="+57 3001234567"
            class="input w-full"
            required
          />
        </div>
        <button type="submit" class="bg-blue-600 text-white w-full py-2 rounded">Enviar código</button>
      </form>

      <form @submit.prevent="confirmarCodigo" v-else class="space-y-4">
        <div>
          <label class="block mb-1">Código de verificación</label>
          <input
            v-model="codigo"
            type="text"
            maxlength="6"
            class="input w-full"
            placeholder="123456"
            required
          />
        </div>
        <button type="submit" class="bg-green-600 text-white w-full py-2 rounded">Confirmar</button>
      </form>

      <p v-if="error" class="text-red-500 mt-4">{{ error }}</p>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { supabase } from '../lib/supabase'

const telefono = ref('')
const codigo = ref('')
const error = ref('')
const codigoEnviado = ref(false)
const router = useRouter()

const handleLogin = async () => {
  error.value = ''
  const { error: err } = await supabase.auth.signInWithOtp({
    phone: telefono.value,
  })
  if (err) {
    error.value = err.message
  } else {
    codigoEnviado.value = true
  }
}

const confirmarCodigo = async () => {
  const { data, error: err } = await supabase.auth.verifyOtp({
    phone: telefono.value,
    token: codigo.value,
    type: 'sms',
  })
  if (err) {
    error.value = err.message
  } else {
    router.push('/')
  }
}
</script>

<style scoped>
.input {
  border: 1px solid #ccc;
  padding: 0.5rem;
  border-radius: 0.375rem;
}
</style>