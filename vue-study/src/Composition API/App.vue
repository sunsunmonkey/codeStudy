<template>
    <h1 >{{ refmessage }}</h1>
    <button @click="changeMessageRef">change</button>
    <h1 >{{ reactiveMes.name }}</h1>
    <button @click="changeMessageReactive">change</button>
    <h1 ref="h1ref">{{ shallow.name }}</h1>
    <button @click="shallowf">change</button>
    <Computed></Computed>
    <Provide></Provide>
    <Watch></Watch>
    <Setup ref="refSet" :name="222" @changesome="console.log($event)"></Setup>
</template>

<script>
import { onMounted, reactive, ref, shallowRef } from 'vue';
import Computed from './Computed.vue';
import Provide from './Provide.vue';
import Watch from './Watch.vue';
import Setup from './Setup.vue';


export default{
    name:"App",
    components:{
        Computed,
        Provide ,
        Watch,
        Setup
    },
    setup(){
        const refSet = ref();
        const refmessage = ref('111');
        function changeMessageRef() {
            refmessage.value = 'hhhh'
           
        }

        onMounted(()=>{
            // console.log(refSet.value.hhh())
        })

        const reactiveMes = reactive({
            name:"zzk"
        })
        function changeMessageReactive() {
            reactiveMes.name = 'hhhh'
        }
        const shallow = shallowRef({
            name:"zzk"
        })
        function shallowf() {
            console.log(  shallow.value)
            shallow.value.name = 'hhhh'
            console.log(  shallow.value)
        }
        return {
            refmessage,
            changeMessageRef, 
            reactiveMes,
            changeMessageReactive,
            shallow,
            shallowf,
            refSet
        }
    }
}
</script>


<style scoped>
    
</style>