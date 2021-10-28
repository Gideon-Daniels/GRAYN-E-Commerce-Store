import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle"
// import {BootstrapVue, IconsPlugin} from 'bootstrap-vue'

//Install BootstrapVue
// Vue.use(BootstrapVue) 

//Optionally install the Bootstrap icon component plugins

// Vue.use(IconsPlugin)
// Vue.config.productsTIP = false

// new Vue({
//     router,
//     render: h => h(App)
// }).$mount('#app')


createApp(App).use(store).use(router).mount('#app')
