<template>
    <h1>slot</h1>
    <slotDemo>
        <template #main><button>main</button></template>
        <template v-slot:others="p"><h5>{{ p.slotname }}</h5></template>
    </slotDemo>
</template>

<script>
import slotDemo from './slot-demo.vue';
export default{
    name:"App",
    components:{
        slotDemo
    }
}
</script>


<style scoped>
    
</style>