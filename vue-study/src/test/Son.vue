<template>
    <h1 @click="handleSon">son</h1>
</template>

<script>
export default{
    name:"Son",
    emits:['son'],
    methods:{
        handleSon(){
            this.$emit('son',100,2)
        }
    }
}
</script>


<style scoped>
    
</style>