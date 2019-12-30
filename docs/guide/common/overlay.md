# Overlay 遮罩层

## 使用

```JavaScript
import Vue from 'vue'
import { Overlay } from '@helper-gdp/vue-components'
Vue.use(Overlay)
```

```html
<hp-overlay />
```

## API

### Props

参数 | 说明 | 类型 | 默认值 | 支持版本
-|-|-|-|-
v-model | 当前组件是否显示 | `boolean` | `false` | 1.1.5
zIndex | 组件层级 | `number` | `100` | 1.1.5
opacity | 遮罩层透明度 | `number` | `.3` | 1.1.5
clickClose | 组件是否可点击关闭 | `boolean` | `true` | 1.1.5

### Events

事件名 | 说明 | 回调参数 | 支持版本
-|-|-|-
opened | 面板开启后回调 | - | 1.1.5
closed | 面板关闭后回调 | - | 1.1.5

### Slots

名称 | 说明
-|-
default | 嵌入遮罩层内的内容
