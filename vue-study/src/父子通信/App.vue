<template>
    <h1>父子通信</h1>
    <Father></Father>
    <Footer></Footer>
</template>

<script>
import Father from './components/Father'
import Footer from './components/footer'
    export default{
        name:"App",
        components:{
            Father,
            Footer
           
        }
    }
</script>


<style scoped>
    
</style>