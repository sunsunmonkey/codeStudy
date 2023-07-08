<template>
    <h1>Vuex</h1>
    <!-- <h2>{{ $store.state.message }}</h2>
    <h2>{{ $store.state.count }}</h2>
    <h2>{{ $store.state.school }}</h2> -->
    <h2>{{ school }}</h2>
    <h2 @click="increment(123)">{{ count }}</h2>
    <h3 @click="hhh">{{ somemes }}</h3>
    <h3 @click="hhhhh">{{ value(55566) }}</h3>
</template>

<script>
import { mapState, mapGetters, mapMutations } from 'vuex'
    export default {
       
        computed:{
            ...mapState(['school','count']),
            ...mapGetters(['somemes','value']),
           
        },
        methods:{
            ...mapMutations(['increment','hhh']),
            ...mapMutations({
                hhhhh:'hhh'
            })
        }
    }

</script>


<style scoped>
    
</style>