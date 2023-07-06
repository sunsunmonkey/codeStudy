<template>
    <h1>good</h1>
    <slot name="main">
        <h1>默认内容</h1>
    </slot>
    <slot name="others" :slotname="name">
        <h2>其他</h2>
    </slot>
</template>

<script>
export default{
    name:"SlotDemo",
    data(){
        return {
            name:"zzk"
        }
    },  
    components:{
        
    }
}
</script>


<style scoped>
    
</style>