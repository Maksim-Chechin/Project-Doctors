import {createApp} from 'vue'
import App from './App.vue'
import components from '@/components/UI'
import router from "@/Router/router.js";
import store from "@/store/index.js";


const app = createApp(App)

components.forEach(component => {
    app.component(component.name, component)
})

app
    .use(store)
    .use(router)
    .mount('#app')
