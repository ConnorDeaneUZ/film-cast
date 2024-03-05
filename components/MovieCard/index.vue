<!-- @format -->

<template>
    <pre>
        {{ data }}
    </pre>
</template>

<script setup lang="ts">
    const props = defineProps<{ data: Object }>()
</script>
