import { VueConstructor } from 'vue'
import Overlay from './index.vue'
import '@/assets/styles/normalize.styl';

// @ts-ignore
Overlay.install = (Vue: VueConstructor) => {
  Vue.component(Overlay.name, Overlay)
}

export default Overlay
