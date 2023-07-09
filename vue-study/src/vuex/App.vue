<template>
    <h1>Vuex</h1>
    <!-- <h2>{{ $store.state.message }}</h2>
    <h2>{{ $store.state.count }}</h2>
    <h2>{{ $store.state.school }}</h2> -->
    <h2>{{ school }}</h2>
    <h2 @click="increment(123)">{{ count }}</h2>
    <h3 @click="hhh">{{ somemes }}</h3>
    <h3 @click="hhhhh">{{ value(55566) }}</h3>
    <h4 @click="add">Action</h4>
    <h2>{{ title }}</h2>
</template>

<script>
import { mapState, mapGetters, mapMutations } from 'vuex'
    export default {
       
        computed:{
            ...mapState(['school','count','title']),
            ...mapGetters(['somemes','value']),
           
        },
        methods:{
            ...mapMutations(['increment','hhh']),
            ...mapMutations({
                hhhhh:'hhh'
            }),
            add(){
                this.$store.dispatch('addAction')
            }
        }
    }

</script>


<style scoped>
    
</style>