import { VueConstructor } from 'vue'
import GdpMobileButton from './index.vue'

export {
  GdpMobileButton
}

export default {
  install(Vue: VueConstructor) {
    Vue.component(GdpMobileButton.name, GdpMobileButton)
  }
}
