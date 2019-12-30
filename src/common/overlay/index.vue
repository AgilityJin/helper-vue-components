<template>
  <transition name="fade">
    <div v-if="isShow" @click="clickOverlay" :style="overlayStyle" class="hp-overlay">
      <slot />
    </div>
  </transition>
</template>

<script lang="ts">
import { VueConstructor } from 'vue'
import { Component, Vue, Prop, Mixins } from 'vue-property-decorator'
import { Show } from '../../mixins'

@Component({
  name: 'hp-overlay'
})
export default class Overlay extends Mixins(Show) {
  // 层级关系
  @Prop({type: Number, default: 100}) zIndex?: number
  // 透明度
  @Prop({type: Number, default: .3}) opacity?: number
  // 是否点击关闭
  @Prop({type: Boolean, default: true}) clickClose?: boolean

  overlayStyle = {
    zIndex: this.zIndex,
    backgroundColor: `rgba(0, 0, 0, ${this.opacity})`
  }

  clickOverlay() {
    if(this.clickClose) {
      this.close();
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '../../assets/styles/_bem';
@import '../../assets/styles/transition';

+block(overlay)
  position fixed
  width 100%
  height 100%
  top 0
  left 0
</style>
