<template>
    <h1>{{ counter  }}</h1>
</template>

<script>
import { inject } from 'vue';

export default{
    name:"Inject",
    setup(){
        const counter = inject('counter')
        return {
            counter
        }
    }
}
</script>


<style scoped>
    
</style>