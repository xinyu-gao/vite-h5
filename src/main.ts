import { createApp } from 'vue'
import App from './App.vue'
import routes from './routes'
import { createPinia } from 'pinia'

const app = createApp(App)

app.use(createPinia())
app.use(routes)
app.mount('#app')
