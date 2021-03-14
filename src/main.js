import Vue from 'vue'
import App from './App.vue'
import router from './router'

import VueGeoLocation from 'vue-browser-geolocation'
import * as VueGoogleMaps from 'vue2-google-maps'

Vue.config.productionTip = false

Vue.use(VueGeoLocation)

Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyASlxHlUMNDRG69cqYBppUyTZkMlbnMe_E',
  },
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
