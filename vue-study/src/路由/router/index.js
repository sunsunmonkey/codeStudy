import {createRouter,createWebHashHistory} from 'vue-router'

const router = createRouter({
    history:createWebHashHistory(),
    routes:[
        {
            path:"/",
            redirect:'/home'
        },  
        {   
            path:'/home',
            component:()=>import('../Home.vue'),
            children:[
                
                {
 
                    path:'song',
                    component:()=>import('../HomeSong.vue')
                }
            ]
        },
        {
            path:'/user',
            component:()=>import('../User.vue')
        },
        {
            path:'/hhh/:id',
            component:()=>import('../Hhh.vue')
        },
        {
            path:'/:pathMatch(.*)*',
            component:()=>import('../NotFound.vue')
       }
    ]
})

const isAdmin  = true

if(isAdmin){
    router.addRoute({
        path:'/vip',
        component:()=>import('../Vip.vue')
    })
}

//要路由表里有name才能删除

// router.removeRoute('home')
router.beforeEach((to,from)=>{
    console.log(to)
    console.log(from)
})
export default router