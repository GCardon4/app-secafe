import './assets/main.css'
import './assets/tailwind.css'
import './assets/base.css'

import { createApp } from 'vue'

import App from './App.vue'
import AppAdmin from './AppAdmin.vue'

//Routers
import router from './components/router'
import routerAdmin from './components/router/admin'

createApp(App).use(router).mount('#app')

createApp(AppAdmin).use(routerAdmin).mount('#appAdmin')
