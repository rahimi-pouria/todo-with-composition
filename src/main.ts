import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createPinia } from "pinia";
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

App.use( createPinia )
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
createApp(App).use(store).use(router).mount('#app')
