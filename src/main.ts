import { VueConstructor } from 'vue'

import * as Common from './common'
import * as Mobile from './mobile'
import * as Desktop from './desktop'

export * from './common'
export * from './mobile'
export * from './desktop'

const components = {
  ...Common,
  ...Mobile,
  ...Desktop
}

export default {
  install(Vue: VueConstructor) {
    for (const key in components) {
      if (components.hasOwnProperty(key)) {
        // @ts-ignore
        const component = components[key];
        Vue.component(component.name, component)
      }
    }
  }
}
