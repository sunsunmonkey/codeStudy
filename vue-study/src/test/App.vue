<template>
    <h1 @click="console.log($event)">11111</h1>
    <Son @son='($event)=>console.log($event)' ></Son>
    <Son  ></Son>
</template>

<script>
import Son from './Son.vue';
export default{
    name:"App",
    components:{
        Son 
    },
}
</script>


<style scoped>
    
</style>