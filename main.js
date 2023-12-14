import { createApp, markRaw } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
// import router from './router'
import './assets/output.css'

const app = createApp(App)
const pinia = createPinia()

app.use(createPinia())
// app.use(router)

pinia.use(({ store }) => {
    // store.router = markRaw(router)
})

app.use(router)
app.use(pinia)

app.mount('#app')