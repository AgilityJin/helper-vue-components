import { Component, Vue, Prop } from 'vue-property-decorator'

/**
 * @name 处理背景滚动mixins
 *
 * @export
 * @class Scroll
 * @extends {Vue}
 */
@Component
export default class Scroll extends Vue {
  // 是否禁止滚动
  @Prop({type: Boolean, default: true}) notScroll?: boolean

  disableScroll() {
    if (!document || this.notScroll === false) return;
    document.body.style.overflow = 'hidden'
    document.documentElement.style.overflow = "hidden"
  }

  enableScroll() {
    if (!document || this.notScroll === false) return;
    document.body.style.overflow = '' // 出现滚动条
    document.documentElement.style.overflow = ''
  }
}
