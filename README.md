# @helper-gdp/components

> vue 通用组件库

## 使用方式

* `yarn add @helper-gdp/components`安装npm package

### 全量引用

* `import allComponents from '@helper-gdp/components'` 引入所有组件
* `import '@helper-gdp/components/lib/main.css'` 引入所有样式
* `Vue.use(allComponents)` 注册所有组件

### 按需加载

* `yarn add babel-plugin-import -D` 添加依赖
* babel.config.js 内的 plugins 添加如下内容:

  ```JavaScript
  ['import', {
      libraryName: '@helper-gdp/components',
      style: (name) => `${name}.css`
    }, '@helper-gdp/components']
  ```

* `import { ComponentName } from '@helper-gdp/components'` 按需加载指定组件
* `Vue.use(ComponentName)` 注册指定组件

### Tips

* 当前全量引用与按需引用互斥,配置babel后则只能采取按需加载,如仍需导入全量可通过`import { main } from '@helper-gdp/components'`获取全量导出的内容

## src目录说明

* assets
  * styles 样式文件夹
* interface 接口定义目录
* mixins 通用混入定义
* common 跨端组件
* desktop 桌面端组件
* mobile 移动端组件
* modules 通用模块组件

## 新增组件方法

* 根据组件适用性在 common/desktop/mobile/modules 对应目录下新建组件目录
* 新建与目录同名的ts文件入口
* 所有样式遵循bem规范,通过调用styles下的bem文件内的方法可快捷选择bem块

  ```stylus
    +block(name) // 选中块级元素 gdp-name
      +element(el) // 选中元素 gdp-name__el
        +modifier(modif) // 选中修饰性元素 gdp-name__el_modif
  ```

## 组件文档

通过vuepress在docs目录内维护

## cli

* `yarn run build` 打包代码
* `yarn run dev` 热更新打包代码
* `yarn run test` 执行测试
* `yarn run release` 生成发布变更记录
* `yarn run commit` 提交暂存的代码更改
* `yarn run docs:dev` 编辑文档
* `yarn run docs:build` 构建文档

## 需求

### common

* [ ] icon p0
  * [ ] 支持用户配置自身项目的svg统一图标目录
  * [ ] 支持使用网络图片
  * [ ] 支持svg颜色控制
  * [ ] 支持容器样式细粒度控制

### mobile

* [ ] dailog p3

### desktop

### modules

### other

* [ ] 提供 vue transition name 的style p0
  * [ ] 渐隐渐现
  * [ ] 由小到大
  * [ ] 由大到小
