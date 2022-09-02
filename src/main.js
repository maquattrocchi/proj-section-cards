import Vue from 'vue'
import App from './App.vue'
import './index.css'
import VueColorPicker from '@duoa/vue-color-picker'
// Because this components has its styles, you must also import the css file.
import '@duoa/vue-color-picker/dist/vue-color-picker.css'

// Register
Vue.use(VueColorPicker)
Vue.config.productionTip = false
new Vue({
  render: h => h(App),
}).$mount('#app')
