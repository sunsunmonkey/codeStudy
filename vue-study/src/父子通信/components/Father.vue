<template>
    <h2 >{{counter}}</h2>
    <Son :counter="counter"></Son>
    <SonButton @add="addCounter"></SonButton>
</template>

<script>
import Son from '../components/son'
import SonButton from './Son-button.vue';
export default{
    name:"Father",
   
    data(){
        return {
            counter:0
        }
    },  
    components:{
        Son,
        SonButton
    },
    methods:{
        addCounter(a){
           this.counter += a
        }
    }
}
</script>


<style scoped>
    
</style>