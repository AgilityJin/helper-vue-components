import { VueConstructor } from 'vue'

import * as Common from './common'
import * as Mobile from './mobile'
import * as Desktop from './desktop'
import * as Modules from './modules'

export * from './common'
export * from './mobile'
export * from './desktop'
export * from './modules'

const components = {
  ...Common,
  ...Mobile,
  ...Desktop,
  ...Modules
}

// 安装所有组件
const install = (Vue: VueConstructor) => {
  // @ts-ignore
  if (install.installed) return
  for (const key in components) {
    if (components.hasOwnProperty(key)) {
      // @ts-ignore
      const component = components[key];
      Vue.use(component)
    }
  }
}

export default {
  install,
  ...components
}
