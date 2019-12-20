import Overlay from './index.vue'
import {
  IExportComponent,
  VueConstructor,
  IDecoratorVue
} from '../../interface'
import '@/assets/styles/normalize.styl';

const name = (Overlay as IDecoratorVue).options.name
const component: IExportComponent = {
  install: (Vue: VueConstructor) => {
    Vue.component(name, Overlay)
  },
  name,
  component: Overlay
}

export default component
