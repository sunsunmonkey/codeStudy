import { createStore } from "vuex";

const store  = createStore({
    state(){
        return {
            message:'zzk',
            count:232,
            school:'cqupt',
            list:[],
            title:''
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
        ,
        changeTitle(state,payload){
            state.title = payload
        }
    },
    actions:{
       async addAction(context){
         const res = await fetch('http://codercba.com:1888/airbnb/api/home/goodprice')
         const result = await res.json()
         context.commit('changeTitle',  result.title)
       }
    }
})

export default store