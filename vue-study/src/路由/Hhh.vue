<template>
    <h1>hhhh</h1>
    <h2>{{ $route.params.id  }}</h2>
    <span>{{ ids }}</span>
</template>

<script setup>
import { computed } from 'vue';
import { useRoute } from 'vue-router';
const route = useRoute()

const ids = computed(()=>{
   return route.params.id
})
</script>


<style scoped>
    
</style>