import { VueConstructor } from 'vue'
import Overlay from './index.vue'
import '@/assets/styles/normalize.styl';

// @ts-ignore
Overlay.install = (Vue: VueConstructor) => {
  // @ts-ignore
  Vue.component(Overlay.options.name, Overlay)
}

export default Overlay
