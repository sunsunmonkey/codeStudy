<template>
   <h3>{{ counter }}</h3> 
</template>

<script>
export default{
    name:"Son",
    // props:["counter"]
    props:{
        counter:{
            type:Number,
            default: 22
        }
    }
  
}
</script>


<style scoped>
    
</style>