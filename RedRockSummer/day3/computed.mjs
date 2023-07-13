import { ref } from "./ref.mjs";
import { effect,activeEffect } from "./reactive.mjs";

const computed = getter =>{
    let result = ref();
    effect(()=>result.value = getter())
    return result
}