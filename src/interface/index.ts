import { VueConstructor, PluginObject } from 'vue'

export { VueConstructor } from 'vue'

// 导出的组件类型
export interface IExportComponent extends PluginObject<any> {
  install: (Vue: VueConstructor, options?: any) => void
  name: string
  component: VueConstructor
}

// vue prototype decorator type
export interface IDecoratorVue extends VueConstructor {
  options: {
    name: string
    [souceKey: string]: any
  }
}
