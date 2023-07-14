export default function useThrottle(fn,delay){
    let timer = null;
    let firstTime = true;

    return function(){
        const that = this;

        if(firstTime){
            fn.call(that,...arguments)
            firstTime = false
        }

        if( timer ){
            return
        }


        timer = setTimeout(()=>{
            fn.call(that,...arguments)
            clearTimeout(timer)
            timer = null
        },delay)

    }
}