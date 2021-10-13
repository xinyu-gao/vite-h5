import { createApp } from 'vue'
import App from './App.vue'
import { router } from '@/routes'
import { createPinia } from 'pinia'
import Vant from 'vant'
import 'tailwindcss/tailwind.css'
import 'vant/lib/index.css'

const app = createApp(App)
app.use(Vant)
app.use(createPinia())
app.use(router)
app.mount('#app')
