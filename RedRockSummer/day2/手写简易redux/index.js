//核心
//1.store：储存管理的仓库
//2.action：用于改变状态的动作，有type和state
//3.Recuder：用于处理派发的action
//4.dispatch: 用于派发action



//~Recuder一定是纯函数

//创建storeslice
function createSliceStore(reducer){

    let currentState = reducer()

    const getState =()=>currentState

    const dispatch =(action)=>{
        currentState = reducer(currentState,action)
    }
    return {
        getState,
        dispatch,
    }
}

//创建store
function createStore(recuderDict){
    const recuderKey= Object.keys(recuderDict);
    const recuderModule = {}
    for(let item of recuderKey) {
        recuderModule[item] = createSliceStore(recuderDict[item])
    }

    return recuderModule
}



//创建action
function createTestAction(type,payload){
    return {
        type,
        payload
    }
}


//创建recuder
function testRecuder( state = {value:0} , action ={}){
    switch (action.type) {
        case 'increment':
            return {...state , value:state.value+action.payload}
        case 'disincrement':
            return {...state , value:state.value-action.payload}
        default:
            return state
    }

}

function dataRecuder( state = {data:'hhhhh'} , action ={}){
    switch (action.type) {
        case 'come':
            return {...state , data: action.payload+'come'}
        case 'leave':
            return {...state , data: action.payload+'leave'}
        default:
            return state
    }

}


//test
//单一模块用法
const storeSlice  = createSliceStore(testRecuder)

//初始化值
console.log(storeSlice.getState())

const actionADD = createTestAction('increment',5)
const actionSub = createTestAction('disincrement',2)

storeSlice.dispatch(actionADD)
console.log(storeSlice.getState())


storeSlice.dispatch(actionSub)
console.log(storeSlice.getState())


//多模块


const store  = createStore({
    counter : testRecuder,
    data : dataRecuder
})

console.log(store.data.getState())
console.log(store.counter.getState())

const ADD = createTestAction('increment',1)
const Sub = createTestAction('disincrement',2)

store.counter.dispatch(ADD)
console.log(store.counter.getState())


store.counter.dispatch(Sub)
console.log(store.counter.getState())


const dataComeAction  = createTestAction('come','zzk')
const dataLeaveAction  = createTestAction('leave','zzk')

store.data.dispatch(dataComeAction)
console.log(store.data.getState())

store.data.dispatch(dataLeaveAction)
console.log(store.data.getState())

