# Divider 分割线

## 使用

```JavaScript
import Vue from 'vue'
import { Divider } from '@helper-gdp/vue-components'
Vue.use(Divider)
```

```html
<hp-divider />
```

## API

### Props

参数 | 说明 | 类型 | 默认值 | 支持版本
-|-|-|-|-
direction | 分割线方向 | `'horizontal' | 'vertical'` | `horizontal` | 1.1.5
contentPosition | 文本内容位置 | `'center' | 'left' | 'right'` | `center` | 1.1.5
contentPadding | 文本内边距 | `string` | `0 15px` | 1.1.5
color | 分割线颜色 | `string` | `#F5F5F5` | 1.1.5
margin | 分割线外间距 | `string` | `auto` | 1.1.5

### Slots

名称 | 说明
-|-
default | 分割线自定义文本内容
