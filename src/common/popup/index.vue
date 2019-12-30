<template>
  <div class="hp-popup">
    <hp-overlay v-model="isShow" :click-close="clickClose" />
    <transition :name="'popup-' + position">
      <div v-show="isShow" :style="{
        background,
        zIndex,
        ...popupStyles
      }" class="hp-popup__box">
        <slot/>
      </div>
    </transition>
  </div>
</template>

<script lang="ts">
import { VueConstructor } from 'vue'
import { Component, Vue, Prop, Mixins } from 'vue-property-decorator'
import { Show } from '../../mixins'
import Overlay from '../overlay/overlay'

Vue.use(Overlay)
@Component({
  name: 'hp-popup'
})
export default class Popup extends Mixins(Show) {
  // 弹出层位置
  @Prop({type: String, default: 'left'}) position?: 'left' | 'right' | 'top' | 'bottom' | 'center'
  // 弹出层背景颜色
  @Prop({type: String, default: '#FFF'}) background?: string
  // 层级关系
  @Prop({type: Number, default: 200}) zIndex?: number
  // 是否点击遮罩层关闭
  @Prop({type: Boolean, default: true}) clickClose?: boolean
  // 弹出层边框圆角
  @Prop({type: String, default: '8px'}) borderRadius?: string
  // 最大宽度或最大高度
  @Prop({type: String, default: '80%'}) maxWidthOrHeight?: string

  get popupStyles() {
    switch (this.position) {
      case 'right':
        return {
          right: 0,
          top: 0,
          height: '100%',
          maxWidth: this.maxWidthOrHeight,
          borderRadius: `${this.borderRadius} 0 0 ${this.borderRadius}`
        }
      case 'top':
        return {
          top: 0,
          left: 0,
          width: '100%',
          maxHeight: this.maxWidthOrHeight,
          borderRadius: `0 0 ${this.borderRadius} ${this.borderRadius}`
        }
      case 'bottom':
        return {
          bottom: 0,
          left: 0,
          width: '100%',
          maxHeight: this.maxWidthOrHeight,
          borderRadius: `${this.borderRadius} ${this.borderRadius} 0 0`
        }
      case 'center':
        return {
          top: 0,
          bottom: 0,
          right: 0,
          left: 0,
          margin: 'auto',
          maxWidth: this.maxWidthOrHeight,
          maxHeight: this.maxWidthOrHeight,
          borderRadius: this.borderRadius,
          // TODO: transition的 center预设未生效,补写transition
          transition: 'all .2s ease-out'
        }
      case 'left':
      default:
        return {
          left: 0,
          top: 0,
          height: '100%',
          maxWidth: this.maxWidthOrHeight,
          borderRadius: `0 ${this.borderRadius} ${this.borderRadius} 0`
        }
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '../../assets/styles/_bem';
@import '../../assets/styles/transition';

+block(popup)
  width 0
  height 0
  background transparent
  +element(box)
    position fixed
    max-width 100%
    max-height 100%
    overflow hidden
</style>
