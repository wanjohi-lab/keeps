import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import Vuetify from 'vuetify/lib'
import { VCalendar } from 'vuetify/labs/VCalendar'

export default createVuetify({
    components: {
      VCalendar,
    },
  })
  const vuetify = new Vuetify({})
createApp(App).mount('#app')
