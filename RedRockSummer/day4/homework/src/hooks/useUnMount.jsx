import { useEffect } from "react";

export default function useUnMount(fn){
    useEffect(()=>{
        return fn
    },[])
}