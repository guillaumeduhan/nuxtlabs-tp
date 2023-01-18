<script setup>
import { useMovies } from "../composables/useMovies.js";
const { favorites } = useMovies();
</script>

<template>
  <header class="my-4">
    <h1>Ma cinémathèque avec Nuxt 2</h1>
    <p>{{ favorites }}</p>
  </header>
</template>