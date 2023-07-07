<template>
   <Inject ></Inject>
   <button @click=" handleClick">Click</button>
</template>

<script>
import { onMounted, provide, ref } from 'vue';
import Inject from './Inject.vue';


export default{
    name:"",
    components:{
        Inject
    },
    setup(){
        let num1  =ref(11)
        onMounted(()=>{
            console.log('onmounted')
        })
       function handleClick(){
            num1.value = 12
        }
        provide('counter',num1)


        return{
            handleClick
        }
    }
}
</script>


<style scoped>
    
</style>