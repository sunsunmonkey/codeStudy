let price = 10, quantity = 2, total = 0
const obj = {
    price,
    quantity,
}


//拦截器
export const reactive =(target)=>{
    return new Proxy(target,{
        get(target,key,receiver){

            const result = Reflect.get(...arguments)
            track(target,key)
            return result
        },
        set(target,key, value,receiver){
     
            let oldValue = target[key]
            //在没有设值之前去获取oldvalue
            Reflect.set(...arguments)

            //真实比较应该用递归比较，这里用一个简单的!==代替
            if(oldValue !== value) trigger(target,key)   

            return value 
        }
    })
}
const targetMap = new WeakMap();

//追踪器
export const track = (target,key) => {
    if(activeEffect[0]){

        let depsMap = targetMap.get(target)
        if(!depsMap)  targetMap.set(target, depsMap =new Map())
    
        let  dep = depsMap.get(key)
        if (!dep)  depsMap.set(key, dep = new Set() )
    
    
        dep.add(activeEffect[0]);


    }
  
}

//触发器
export const trigger = (target,key) => { 
    const depsMap =  targetMap.get(target)
    if (!depsMap) return;

    const dep = depsMap.get(key)

    dep?.forEach((effect) => { effect() }) 
}


const p = reactive(obj)

export let activeEffect = []

export const effect = (eff) => {
    activeEffect.push(eff)
    eff()
    activeEffect.pop()
}


effect(() => total = p.price * p.quantity)
console.log(total)

p.quantity = 4

console.log(total)

p.price =2

console.log(total)