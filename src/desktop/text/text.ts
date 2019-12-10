import { VueConstructor } from 'vue'
import GdpDesktopText from './index.vue'

export {
  GdpDesktopText
}

export default {
  install(Vue: VueConstructor) {
    Vue.component(GdpDesktopText.name, GdpDesktopText)
  }
}
