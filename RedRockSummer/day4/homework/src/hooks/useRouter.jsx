import {  useEffect } from "react";

export default function useRouter(){
    useEffect(()=>{
        window.onpopstate = function(event) {
            navigato(location.pathname,routerTable)
        };
    })

    
}

const routerTable = [
    {
        path:'/home',
        elememt:'<h1>home</h1>'
    },
    {
        path:'/user',
        elememt:'<h1>user</h1>'
    }
]

export function navigato(to,routerTable){

      const routeView =  document.querySelector('#route-view')

      const index = routerTable.findIndex((item)=>item.path===to)
      if( index !== -1)  routeView.innerHTML=routerTable[index].elememt

}



export function MyLink({to,children}){
   return (
    <a onClick={(e)=>{
        e.preventDefault();
        navigato(to,routerTable)
        history.pushState({},'',to)
      }}
      href={to}
      >
        {children}
      </a>
   ) 

}