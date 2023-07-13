import { track , trigger} from "./reactive.mjs"

export const ref = raw =>{
    const r ={
        get value(){
            track( r , 'value' );
            return raw
        },
        set value(newVal){
            raw = newVal;
            trigger(r, 'value');
        }
    }
    return r
}