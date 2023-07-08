<template>
    <h1 @click="jump">111</h1>
 
   <router-view></router-view>
   <router-link to="/home">home</router-link>
   <router-link to="/hhh/22">hhh</router-link>
</template>

<script setup>
import { useRoute,useRouter } from 'vue-router';
//注意两者的区别
const route = useRoute();
const router = useRouter();

  function jump(){
    router.push({
        path:'user',
        query:{
            password:112233,
            j:22
        }
    })
  }
</script>


<style scoped>
    
</style>