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
            component:()=>import('../Home.vue')
        },
        {
            path:'/user',
            component:()=>import('../User.vue')
        }
    ]
})

export default router