<template>
    <h1>Pinia</h1>
    <h2>{{ counter }}</h2>
    <button @click="add">add</button>
</template>

<script setup>
    import {useCounter} from './store/modules/counter'
    import {storeToRefs} from 'pinia'
    const counterStore = useCounter()
    const {counter} =storeToRefs(counterStore)
    function add(){
        counterStore.counter++;
    }
</script>


<style scoped>
    
</style>