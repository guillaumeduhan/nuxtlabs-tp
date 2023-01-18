<script setup>
import { useMovies } from "../composables/useMovies.js";

const { movies, router, route, addFavorites } = useMovies();

const movie =
  movies.find((x) => x.id === parseInt(route.value.params.id)) ?? {};
</script>

<template>
  <div class="MovieId container mx-auto">
    <header>
      <button class="btn btn-success text-white" @click="router.back()">
        Retour
      </button>
    </header>
    <Movie :movie="movie">
      <button
        class="btn btn-success text-white"
        @click="addFavorites(movie.id)"
      >
        Favoris
      </button>
    </Movie>
  </div>
</template>