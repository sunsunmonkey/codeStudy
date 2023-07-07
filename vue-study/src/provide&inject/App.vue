<template>
    <h1>111</h1>
    <Middle></Middle>
</template>

<script>
import { computed } from "vue";
import Middle from "./Middleware.vue";
export default{
    data(){
       return {name:'zzk',length:1} 
    },
    name:"App",
    components:{
        Middle
    },
    // provide:{
    //     name:"hh5h"
    // }
    //取data中数据要用函数写法
    provide(){
        return {
            name:this.name,
            //处理响应式数据
            length:computed(()=>this.length)
        }
    }
}
</script>


<style scoped>
    
</style>