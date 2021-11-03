import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap/dist/js/bootstrap.bundle";
// import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap/js/dist/carousel"
import { projectAuth } from "./firebase/config";
// fires when firebase detects a change in authentication

let app
projectAuth.onAuthStateChanged(() => {
    if(!app){
        app = createApp(App).use(store).use(router).mount("#app");
    }
})

