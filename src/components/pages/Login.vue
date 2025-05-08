<script setup>
  import Login from './user/Home.vue';
</script>

<template id="login-page">
  <header>
    <img alt="Logo Colcafe" class="logo" src="../../assets/logotipo-white.svg" />

    <div class="wrapper">
      <Message msg="Bienvenidos!" />
    </div>
  </header>
  <div class="p-8">
    
    <h1 class="text-2xl mb-4">Iniciar Sesión</h1>
   
   
    <form @submit.prevent="login" class="">
      <label for="user">
        Usuario
        <input v-model="user" type="text" placeholder="Cédula" class="block bg-white mb-2 p-2 border center rounded" />
      </label>

      <input v-model="pass" type="password" placeholder="Contraseña" class="block bg-white mb-4 p-2 border rounded" />
      <button class="bg-white text-black px-4 py-2 rounded" type="submit" @click="User">Entrar</button>

      <RouterLink :to="{ name: 'Home' }">Ingresar al Home</RouterLink>

    </form>

  </div>
</template>


<style scoped>

body{
  background: black;
}


</style>