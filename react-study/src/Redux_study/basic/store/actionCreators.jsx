import * as actionTypes from "./constants"
import axios from "axios"
export function addNum(num) {
    return {
        type: actionTypes.ADD_NUMBER,
        num
    }
}
export function subNum(num) {
    return {
        type: actionTypes.SUB_NUMBER,
        num
    }
}
export function changeBannersAction(banners){
    return {
        type: actionTypes.CHANGE_BANNERS,
        banners
    }
}
export function changeRecommendsAction(recommends){
    return {
        type: actionTypes.CHANGE_RECOMMENDS,
        recommends
    }
}
export function fetchsomething() {
    return function (dispatch, getstate) {
        axios.get("http://123.207.32.32:8000/home/multidata").then((res) => {
            const banners = res.data.data.banner.list
            const recommends = res.data.data.recommend.list
            dispatch(changeBannersAction(banners))
            dispatch(changeRecommendsAction(recommends))
        })
    }
}