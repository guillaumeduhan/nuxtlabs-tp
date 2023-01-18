<script setup>
const props = defineProps(["movie", "truncate"]);
const truncate = props.truncate;
const movie = props.movie;
</script>

<template>
  <div class="card card-compact shadow-xl">
    <figure>
      <img class="mb-4" v-if="movie.image" :src="movie.image" />
    </figure>
    <div class="card-body">
      <h2 v-if="movie.title">{{ movie.title }}</h2>
      <p
        v-if="movie.description"
        class="mb-4"
        :class="{
          truncate: truncate,
        }"
      >
        {{ movie.description }}
      </p>
      <div class="card-actions justify-end">
        <slot />
      </div>
    </div>
  </div>
</template>