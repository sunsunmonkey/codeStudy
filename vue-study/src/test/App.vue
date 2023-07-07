<template>
    <h1 @click="console.log($event)">11111</h1>
    <Son @son='($event)=>console.log($event)'></Son>
</template>

<script>
import Son from './Son.vue';
export default{
    name:"App",
    data(){
        return{
         
            mes: ''
        }
    },
    components:{
        Son 
    }
}
</script>


<style scoped>
    
</style>