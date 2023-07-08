import { createStore } from "vuex";

const store  = createStore({
    state(){
        return {
            message:'zzk',
            count:232,
            school:'cqupt'
        }
    },
    getters:{
        somemes(state){
            return '222'+ state.count
        }
        ,
        value(){
            return (price) =>{
                return price
            }
        }
    },
    mutations:{
        increment(state,payload){
            state.count++
            console.log(payload)
        }
        ,
        hhh(state){
            console.log(state)
        }
    }
})

export default store