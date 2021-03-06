import Overlay from './index.vue'
import {
  VueConstructor,
  PluginObject
} from 'vue'
import '../../assets/styles/normalize.styl';

// @ts-ignore
const COMP_NAME = Overlay.options.name
const component: PluginObject<any> = {
  install: (Vue: VueConstructor) => {
    Vue.component(COMP_NAME, Overlay)
  },
  name: COMP_NAME,
  component: Overlay
}

export default component
