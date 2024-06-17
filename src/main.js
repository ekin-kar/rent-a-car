import './index.css'
import { createApp } from 'vue'
import App from './App.vue'

const app = createApp(App)
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import {
  faCalendar,
  faCar,
  faCarSide,
  faClock,
  faDollarSign,
  faMapPin,
  faMoneyBills,
  faScrewdriverWrench,
  faStore,
  faUserSecret
} from '@fortawesome/free-solid-svg-icons'
library.add(
  faUserSecret,
  faClock,
  faCalendar,
  faMapPin,
  faCar,
  faCarSide,
  faStore,
  faScrewdriverWrench,
  faDollarSign,
  faMoneyBills
)
app.component('font-awesome-icon', FontAwesomeIcon)
app.mount('#app')
