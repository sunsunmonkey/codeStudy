<template>
    <h1 @click="handleSon" >{{ hhhhhh}}</h1>
</template>

<script>
export default{
    name:"Son",
    emits:['son'],
    data(){
        return {
            hhhhhh:this.hhh
        }
    },
    methods:{
        handleSon(){
            this.$emit('son',100)
             this.hhhhhh[0] =10 
        }
    },
    props:{
        hhh:{
        type:Array,
        default:()=>[1,2,3]
        }
       
    }
}
</script>


<style scoped>
    
</style>