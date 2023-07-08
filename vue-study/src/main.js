import { createApp } from 'vue'
// import App from './App.vue'
// import App   from  "@/父子通信/App"
// import App from  './slot/App'
// import App from './provide&inject/App'
// import App from './test/App'
// import App from './Composition API/App'
import App from './路由/App.vue'
import router from './路由/router'

const app = createApp(App)
app.use( router)
app.mount('#app')
