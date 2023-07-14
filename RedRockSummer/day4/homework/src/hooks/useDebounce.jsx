export default function useDebounce(fn,delay){
    let timer = null;

    return function(){
        if(timer!==null){
            clearTimeout(timer)
        }
        //防止this指向在计数器中丢失
        const that = this;

        timer = setTimeout(()=>{
            fn.call(that , ...arguments)
        },delay)

    }
}