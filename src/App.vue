<script setup>
  import router from "./router";
  import { RouterView } from "vue-router";
  import Welcome from './components/Welcome.vue'
</script>

<template>
  <main>
    <div>
      Current Route: {{ $route.path }}
    </div>
    <div>
      <RouterView  />
    </div>
  </main>
</template>

<style scoped>
</style>