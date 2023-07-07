<template>
    <h2>{{ computedMes }}</h2>
</template>

<script>
import { computed, ref } from 'vue';

export default{
    setup(){
        const message = ref(1);
        const computedMes = computed(()=>{
            return `mes2 : ${message.value*10}`
        })
        return {
            computedMes 
        }
    }
}
</script>


<style scoped>
    
</style>