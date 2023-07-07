<template>
    <Watch></Watch>
    <h2 @click="change" @mouseover="changeSome">{{ message }}-{{ name }}</h2>
   
</template>

<script setup>
import { ref } from 'vue';
import Watch from './Watch.vue';
const message = ref('zzk');

function change(){
    message.value = 'hhhhhhhhhh'
}

const  props= defineProps({
    name:{
        type:Number,
        default:111
    }
}) 
const emit = defineEmits(['changesome'])

function changeSome(){
    emit('changesome',100)
}
// function hhh(){
//     alert(1223)
// }
// defineExpose({
//     hhh
// })
</script>


<style scoped>
    
</style>