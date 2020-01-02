# Popup 弹出层

## 使用

```JavaScript
import Vue from 'vue'
import { Popup } from '@helper-gdp/vue-components'
Vue.use(Popup)
```

```html
<hp-popup />
```

## API

### Props

参数 | 说明 | 类型 | 默认值 | 支持版本
-|-|-|-|-
v-model | 当前组件是否显示 | `boolean` | `false` | 1.1.5
zIndex | 组件层级 | `number` | `200` | 1.1.5
clickClose | 组件是否可点击关闭 | `boolean` | `true` | 1.1.5
position | 弹出层位置 | `'left' | 'right' | 'top' | 'bottom' | 'center'` | `left` | 1.1.5
background | 弹出层背景色 | `string` | `#FFFFFF` | 1.1.5
borderRadius | 弹出层边框圆角 | `string` | `8px` | 1.1.5
maxWidthOrHeight | 最大宽度或最大高度 | `string` | `80%` | 1.1.5
notScroll | 是否不要背景滚动 | `boolean` | `true` | 1.1.8

### Events

事件名 | 说明 | 回调参数 | 支持版本
-|-|-|-
opened | 面板开启后回调 | - | 1.1.5
closed | 面板关闭后回调 | - | 1.1.5

### Slots

名称 | 说明
-|-
default | 嵌入弹出层内的内容
