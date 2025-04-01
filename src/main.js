import {createApp} from 'vue'
import App from './App.vue'
import router from "@/Router/router.js";
import store from "@/store/index.js";


const app = createApp(App)


app
    .use(store)
    .use(router)
    .mount('#app')
