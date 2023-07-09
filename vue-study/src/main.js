import { createApp } from 'vue'
// import App from './App.vue'
// import App   from  "@/父子通信/App"
// import App from  './slot/App'
// import App from './provide&inject/App'
// import App from './test/App'
// import App from './Composition API/App'
// import App from './路由/App.vue'
// import router from './路由/router'
// import App from './vuex/App.vue'
// import store from './vuex/store'
import App from './pinia/App.vue'
import store from './pinia/store'
const app = createApp(App)
// app.use( router)
// app.use(store)
app.use(store)
app.mount('#app')
