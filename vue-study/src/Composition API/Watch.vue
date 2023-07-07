<template>
    <h2>{{  data.name }}</h2>
    <button @click="changename">改zzk</button>
    <button @click="changeSchool">改school</button>
</template>

<script>
import { reactive, watch } from 'vue';

export default{

    name:"Watch",
    setup(){
        const data = reactive({
            name:'zzk',
            school:{
                name:'cqput'
            }
        })
        //直接给 watch() 传入一个响应式对象，
        //会隐式地创建一个深层侦听器——该回调函数在所有嵌套的变更时都会被触发
        //并且deep设置没用
        watch(data,(newData,oldData)=>{
            console.log(newData,oldData)
            console.log(newData===oldData)
            alert(newData===oldData)
        },{ deep: false })

        //相比之下，一个返回响应式对象的 getter 函数，
        //只有在返回不同的对象时，才会触发回调：
        // watch(()=>data,(newData,oldData)=>{
        //     console.log(newData,oldData)
        //     console.log(newData===oldData)
        //     alert(newData===oldData)
        // })

        //你也可以给上面这个例子显式地加上 deep 选项，强制转成深层侦听器：
        
        function changename(){
            data = {...data,name:'hhh'}
        }
             
        function changeSchool(){
            data.school.name = 'qs'
        }
        return{
            data,
            changename,
            changeSchool
        }
    }
}
</script>


<style scoped>
    
</style>