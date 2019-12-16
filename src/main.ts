import { VueConstructor } from 'vue'

import * as Common from './common'
import * as Mobile from './mobile'
import * as Desktop from './desktop'
import * as Modules from './modules'

const components = {
  ...Common,
  ...Mobile,
  ...Desktop,
  ...Modules
}
if('default' in components) delete components.default; // 存在则删除

// 安装所有组件
const install = (Vue: VueConstructor) => {
  // @ts-ignore
  if (install.installed) return
  for (const key in components) {
    if (components.hasOwnProperty(key)) {
      // @ts-ignore
      const component = components[key];
      Vue.component(component.name, component)
    }
  }
}

export default {
  install,
  ...components
}
