import Divider from './index.vue'
import {
  VueConstructor,
  PluginObject
} from 'vue'
import '../../assets/styles/normalize.styl';

// @ts-ignore
const COMP_NAME = Divider.options.name
const component: PluginObject<any> = {
  install: (Vue: VueConstructor) => {
    Vue.component(COMP_NAME, Divider)
  },
  name: COMP_NAME,
  component: Divider
}

export default component
