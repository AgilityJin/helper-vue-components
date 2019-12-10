# helper-vue-components

> vue通用组件库

## 需求

* [] main.ts文件暴露install函数,提供Vue.use()注册全部组件的功能
* [] 各入口文件暴露install函数,提供Vue.use()注册当前组件功能

## 使用方式

* `yarn add @helper-gdp/components`安装npm package
* `import allComponents from '@helper-gdp/components' && Vue.use(allComponents)`注册所有组件
* `import { GdpAvatar } from '@helper-gdp/components'`析构赋值指定组件
* `import GdpIcon from '@helper-gdp/components/dist/icon' && Vue.use(GdpIcon)`按需注册指定组件,ts环境需要自行在.d.ts内声明`declare module '@helper-gdp/components/dist/*'`
* `import '@helper-gdp/components/dist/index.css'`引用样式文件
