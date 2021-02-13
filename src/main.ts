import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import PrimeVue from 'primevue/config'

import 'primevue/resources/primevue.min.css'
import 'primeicons/primeicons.css'

import Dialog from 'primevue/dialog'
import InputText from 'primevue/inputtext'
import Card from 'primevue/card'
import Tag from 'primevue/tag'

createApp(App)
  .use(router)

  .use(PrimeVue, { ripple: true })
  .component('Dialog', Dialog)
  .component('InputText', InputText)
  .component('Card', Card)
  .component('Tag', Tag)

  .mount('#app')
