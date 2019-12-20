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
* `Vue.use(ComponentName)` or `Vue.component(ComponentName.name, ComponentName.component)` 注册指定组件

### 直接引用

* `import ComponentName from '@helper-gdp/components/lib/componentName'` 直接导入指定组件
* `import '@helper-gdp/components/lib/componentName.css'` 导入指定组件样式
* `Vue.use(ComponentName)` or `Vue.component(ComponentName.name, ComponentName.component)` 注册指定组件

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
  * `-- --release-as major` 大更新
  * `-- --release-as minor` 较小且向下兼容的
  * `-- --release-as patch` 补丁程序
  * `-- --prerelease alpha` 标记为alpha 内测版本
  * `-- --prerelease beta` 标记为beta 公测版本
* `yarn run commit` 提交暂存的代码更改
* `yarn run docs:dev` 编辑文档
* `yarn run docs:build` 构建文档

## 需求

### common

* [ ] icon p0
  * [ ] 支持用户配置自身项目的svg统一图标目录,通过name来指定icon key
  * [ ] 支持使用网络图片
  * [ ] 支持svg颜色控制
  * [ ] 支持容器样式细粒度控制

* [ ] 权限控制 directives
  * 页面访问权限控制 => 由路由拦截器负责
  * 元素操作权限控制 => 由当前directive控制,鉴权函数及用户角色由使用方指定,通过鉴权返回boolean,支持控制模式的更改,例如隐藏或禁用,禁用时支持控制元素亮度
  * 接口请求权限控制 => 由请求拦截器负责

* [ ] popup 弹出层
  * 支持四个方向及居中弹出

### mobile

* [ ] dailog p3

### desktop

### modules

### other

* [ ] 提供 vue transition name 的style p0
  * [x] 渐隐渐现
  * [ ] 缩放

### fix

* [x] 生产模式压缩后组件name获取不正确,导致无法正确注册组件
