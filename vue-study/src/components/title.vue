<template>
    <h2 @click="handleClick(11,$event)">hhhhhhh</h2>
</template>

<script>
    export default {
        name:"title",
        methods:{
            handleClick(event,a){
                console.log(event,a)
                alert("click")
            }
        }
    }
</script>