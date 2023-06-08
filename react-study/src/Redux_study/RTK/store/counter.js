import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
export const fetchHomeMultidataAction = createAsyncThunk("home",
    async () => {
        const res = await axios.get("http://123.207.32.32:8000/home/multidata")
        return res.data
    }
)
const counterSlice = createSlice({
    name: "counter",
    initialState: {
        counter: 1,
        banners: [],
        recommends: []
    },
    reducers: {
        addNumber(state, action) {
            state.counter = state.counter + action.payload;
        },
        subNumber(state, action) {
            state.counter = state.counter - action.payload;
        }
    },
    extraReducers:{
        [fetchHomeMultidataAction.pending](){
            console.log("加载中");
        },
        [fetchHomeMultidataAction.fulfilled](state,{payload}){
            console.log("加载完");
            state.banners = payload.data.banner.list
            state.recommends = payload.data.recommend.list
        }, 
         [fetchHomeMultidataAction.rejected](){
            console.log("加载失败");
        }
    }
    
});

export const { addNumber, subNumber } = counterSlice.actions;
export default counterSlice.reducer;
