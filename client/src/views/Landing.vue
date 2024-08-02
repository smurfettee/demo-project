<script setup lang="ts">

</script>

<template>
  <div class="hero h-full">
    <div class="hero-content text-center">
      <div class="max-w-md">
        <h1 class="text-5xl font-bold">Welcome to APP</h1>
        <p class="py-6">You can ask questions, interact with other students and get knowledge about life in Italy and
          Politecnico di Torino!
        </p>
        <div class="flex justify-center gap-5">
          <router-link to="/auth/login" class="btn btn-primary min-w-24">Login</router-link>
          <div class="flex items-center">or</div>
          <router-link to="/auth/register" class="btn btn-primary min-w-24">Register</router-link>
        </div>
      </div>
    </div>
  </div>
</template>