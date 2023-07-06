<template>
    <button @click="handleClick">加</button>
</template>

<script>
export default{
    name:"SonButton",
    //不一定要写但建议写上emits
    emits:['add'],
    //只会出现warn 一般不用
    // emits:{
    //     add:function (payload) {
    //         if(payload >10){
    //             return false    
    //         }else{
    //             return true
    //         }
    //     }
    // },
    methods:{
        handleClick(){
            this.$emit('add',100)
        }
    }
}
</script>


<style scoped>
    
</style>