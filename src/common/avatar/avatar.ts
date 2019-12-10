import { VueConstructor } from 'vue'
import GdpAvatar from './index.vue'

export {
  GdpAvatar
}

export default {
  install(Vue: VueConstructor) {
    Vue.component(GdpAvatar.name, GdpAvatar)
  }
}
