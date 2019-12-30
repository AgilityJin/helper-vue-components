# Getting Started

## 特性

* 支持多种引入方式
* 支持TS
* 遵循BEM规范,避免冲突
* 多端组件库

## 安装包

```bash
yarn add @ams/vue-components
# or
npm install @ams/vue-components
```

## 全量引用

```JavaScript
import allComponents from '@ams/vue-components' // 引入所有组件
import '@ams/vue-components/lib/main.css' // 引入所有样式
Vue.use(allComponents) // 注册所有组件
```

## 按需加载

安装依赖项:`yarn add babel-plugin-import -D` or `npm install babel-plugin-import -D`
babel.config.js添加如下内容:

```JavaScript
plugins: [
  ['import', {
    libraryName: '@ams/vue-components',
    style: (name) => `${name}.css`
  }, '@ams/vue-components']
]
```

按需加载指定组件:

```JavaScript
import { ComponentName } from '@ams/vue-components'

// 使用方法以下择一即可
Vue.use(ComponentName)
// or
Vue.component(ComponentName.name, ComponentName.component)
// or
Vue.extend({
  components: {
    [ComponentName.name]: ComponentName.component
  }
})
```

## 直接引用

```JavaScript
import ComponentName from '@ams/vue-components/lib/componentName'
import '@ams/vue-components/lib/componentName.css'

// 使用方法以下择一即可
Vue.use(ComponentName)
// or
Vue.component(ComponentName.name, ComponentName.component)
// or
Vue.extend({
  components: {
    [ComponentName.name]: ComponentName.component
  }
})
```
