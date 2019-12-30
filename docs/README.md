# @helper-gdp/vue-components

## 介绍

helper gdp小组 vue 通用组件库

## 支持的使用方式

* 全量引用
* 按需加载
* 直接引用

## src 源目录结构

* assets
  * styles 样式文件夹
* interface 接口定义目录
* mixins 通用混入定义
* common 跨端组件
* desktop 桌面端组件
* mobile 移动端组件
* modules 通用模块组件
* main.ts 统一入口文件

## 开发规范

### 样式规范

遵循BEM规范, 所有样式固定在'hp'作用域下, 封装的bem函数在assets/styles内,使用如下所示:

```stylus
+block(name) // 选中块级元素 hp-name
  +element(el) // 选中元素 hp-name__el
    +modifier(modif) // 选中修饰性元素 hp-name__el_modif
```

### 组件规范

#### 新增组件

* 根据组件适用场景, 在common/desktop/mobile/modules中择一新建组件目录
* 新建与目录同名的ts文件入口,由rollup自动匹配该入口文件
* 同目录创建组件vue文件
* 组件入口文件示例如下:

```TypeScript
import Divider from './index.vue' // 导入当前目录的vue文件
import {
  VueConstructor,
  PluginObject
} from 'vue' // 导入依赖的类型文件
import '../../assets/styles/normalize.styl'; // 导入统一的默认样式文件

// @ts-ignore
const COMP_NAME = Divider.options.name // 组件类型不具备options选项,实际具备该属性且不会被打包器重命名, 采用ignore忽略提示,或拓展vue文件类型均可
const component: PluginObject<any> = {
  install: (Vue: VueConstructor, options?: any) => {
    Vue.component(COMP_NAME, Divider)
  }, // 提供给Vue.use使用
  name: COMP_NAME, // 记录组件名
  component: Divider // 挂载原组件内容
}

export default component // 导出组件
```

* 同步维护组件文档

## 发布npm库

1. 确认当前npm源正确`https://registry.npmjs.org/`
2. 确认登录该源的账号正确,并具备发布库的权限
3. `yarn run build`及`yarn run docs` 打包生产代码及组件文档
4. 执行`git add -A`及`yarn run commit`提交更改
5. 发布命令为`yarn run release -- --release-as [major/minor/patch]` 根据更新程度决定采用的的release as值, 如果为内测或公测版本则补充prerelease参数 `yarn run release -- --release-as [major/minor/patch] --prerelease [alpha/beta]`
6. `git push --follow-tags origin dev` 推送到远程分支
7. `yarn publish`正式发布 or `yarn publish --tag [alpha/beta]`内测或公测发布
8. 切换至master, `git merge dev` 拉取更改
9. `git push origin master` 更新远程仓库

## cli command

开发环境下终端所支持的cli命令如下:

* `yarn run build` 打包发布代码
* `yarn run dev` 打包开发代码并对src进入热更新状态
* `yarn run test` 执行测试脚本
* `yarn run release` 发布命令
* `yarn run commit` 提交暂存的代码更改
* `yarn run docs:dev` 编辑使用文档
* `yarn run docs` 构建发布文档

## 组件使用

[Getting Started](/guide/)
