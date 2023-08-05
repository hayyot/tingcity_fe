import { createSSRApp } from 'vue'
import * as Pinia from 'pinia'
import App from './App.vue'

// 忽略下一行的eslint报错
// eslint-disable-next-line
export function createApp() {
  const app = createSSRApp(App)
  app.use(Pinia.createPinia())

  return {
    app,
    Pinia,
  }
}
