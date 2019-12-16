<template>
  <div v-if="value" @click="clickOverlay" :style="overlayStyle" class="gdp-overlay">
    <slot />
  </div>
</template>

<script lang="ts">
import { Component, Vue, Mixins, Prop } from 'vue-property-decorator';
import { VueConstructor } from 'vue'
import { Show } from '@/mixins'

@Component
export default class GdpOverlay extends Mixins(Show) {
  @Prop({type: Number, default: 1}) zIndex?: number = 1
  @Prop({type: Number, default: .7}) opacity?: number = .7

  overlayStyle = {
    zIndex: this.zIndex,
    backgroundColor: `rgba(0, 0, 0, ${this.opacity})`
  }
  clickOverlay() {
    this.close();
  }
}
</script>

<style lang="stylus" scoped>
@import '../../assets/styles/_bem';
+block(overlay)
  position fixed
  width 100%
  height 100%
  top 0
  left 0
</style>
