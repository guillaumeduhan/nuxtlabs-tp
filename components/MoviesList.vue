<script setup>
import { useMovies } from "../composables/useMovies.js";

const { movies, router } = useMovies();

const pushToMovie = (id) => router.push(`/${id}`);
</script>

<template>
  <div class="grid gap-4 grid-cols-4 mt-30">
    <Movie
      :truncate="true"
      v-for="movie in movies"
      :movie="movie"
      :key="movie.id"
    >
      <button class="btn btn-success text-white" @click="pushToMovie(movie.id)">
        Voir plus
      </button>
    </Movie>
  </div>
</template>
