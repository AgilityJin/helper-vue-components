import Popup from './index.vue'
import {
  VueConstructor,
  PluginObject
} from 'vue'
import '../../assets/styles/normalize.styl';

// @ts-ignore
const COMP_NAME = Popup.options.name
const component: PluginObject<any> = {
  install: (Vue: VueConstructor) => {
    Vue.component(COMP_NAME, Popup)
  },
  name: COMP_NAME,
  component: Popup
}

export default component
