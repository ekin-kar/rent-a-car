import './index.css'
import { createApp } from 'vue'
import App from './App.vue'

const app = createApp(App)
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import {
  faCalendar,
  faCar,
  faClock,
  faMapPin,
  faUserSecret
} from '@fortawesome/free-solid-svg-icons'
library.add(faUserSecret, faClock, faCalendar, faMapPin, faCar)
app.component('font-awesome-icon', FontAwesomeIcon)
app.mount('#app')
