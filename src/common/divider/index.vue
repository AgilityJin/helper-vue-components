<template>
  <div :style="dividerStyles" :class="'hp-divider_' + direction" class="hp-divider">
    <div :style="textPadding" :class="'hp-divider__text_' + contentPosition" class="hp-divider__text">
      <slot />
    </div>
  </div>
</template>

<script lang="ts">
import { VueConstructor } from 'vue'
import { Component, Vue, Prop, Mixins } from 'vue-property-decorator'

@Component({
  name: 'hp-divider',
})
export default class Divider extends Vue {
  // 分割线方向 FIXME: vertical 尚未完善
  @Prop({type: String, default: 'horizontal'}) direction?: 'horizontal' | 'vertical'
  // 内容位置
  @Prop({type: String, default: 'center'}) contentPosition?: 'center' | 'left' | 'right'
  // 文本内边距
  @Prop({type: String, default: '0 15px'}) contentPadding?: string
  // 分割线颜色
  @Prop({type: String, default: '#F5F5F5'}) color?: string
  // 分割线外间距
  @Prop({type: String, default: 'auto'}) margin?: string

  get dividerStyles() {
    return {
      backgroundColor: this.color,
      marginLeft: this.direction === 'vertical' ? this.margin : 'auto',
      marginRight: this.direction === 'vertical' ? this.margin : 'auto',
      marginTop: this.direction === 'horizontal' ? this.margin : 'auto',
      marginBottom: this.direction === 'horizontal' ? this.margin : 'auto',
    }
  }

  get textPadding() {
    return {
      padding: this.contentPadding
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '../../assets/styles/_bem';
@import '../../assets/styles/_var';

+block(divider)
  position relative
  +modifier(horizontal)
    display block
    height 1px
  +modifier(vertical)
    display inline-block
    width 1px
    height 1em
    vertical-align: middle;
  +element(text)
    position: absolute;
    background-color: #fff;
    +modifier(center)
      left 50%
      transform translate3d(-50%, -50%, 0)
    +modifier(left)
      left 20px
      transform translate3d(0, -50%, 0)
    +modifier(right)
      right 20px
      transform translate3d(0, -50%, 0)
</style>
