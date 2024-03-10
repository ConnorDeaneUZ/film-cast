<!-- @format -->
<template>
    <div>
        <component :is="MovieCard" :data="movieData" />

        <form onsubmit="return false">
            <input
                type="search"
                class="border-2 border-black"
                v-model="model"
                @keyup.enter="searchMovie(model)"
            />
        </form>
    </div>
</template>

<script setup lang="ts">
    import { useMovie } from '../composables/useMovie'
    import useCard from '../composables/useCard'
    import MovieCard from '../components/MovieCard/index.vue'

    const model = defineModel()
    const movieData = ref()

    function searchMovie(model: any) {
        const { movie, isLoading, error } = useMovie(model)

        movieData.value = computed(() =>
            movie.value ? useCard(movie.value) : {}
        )
    }
</script>
