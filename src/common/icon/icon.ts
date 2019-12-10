import { VueConstructor } from 'vue'
import GdpIcon from './index.vue'

export {
  GdpIcon
}

export default {
  install(Vue: VueConstructor) {
    Vue.component(GdpIcon.name, GdpIcon)
  }
}
