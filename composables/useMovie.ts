import { ref, onMounted } from 'vue';

export function useMovie(title: string) {
    const movie = ref(null);
    const isLoading = ref(false);
    const error = ref(null);
    const query = title.replace(/\s/g, '+');


    const fetchData = async () => {
        isLoading.value = true;
        error.value = null;

        try {
            const response = await fetch(`http://www.omdbapi.com/?t=${query}&apikey=e03994c9`);
            if (!response.ok) throw new Error('Error fetching movie');
            const data = await response.json();
            movie.value = data;
        } catch (err) {
            console.error('Error has occurred', err);
        } finally {
            isLoading.value = false;
        }
    };

    onMounted(fetchData);

    return { movie, isLoading, error };
}
