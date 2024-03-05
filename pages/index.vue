<!-- @format -->
<template>
    <div>
        <component :is="MovieCard" :data="movieData" />
    </div>
</template>

<script setup lang="ts">
    import { useMovie } from '../composables/useMovie'
    import useCard from '../composables/useCard'
    import MovieCard from '../components/MovieCard/index.vue'

    const { movie, isLoading, error } = useMovie('casino royale')

    const movieData = computed(() => (movie.value ? useCard(movie.value) : {}))

    console.log('movie', movie)
</script>
