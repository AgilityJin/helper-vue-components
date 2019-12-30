/**
 * Created by xiaomin.jin on 2019-12-27 14:55:29 
 */
import { Component, Vue, Prop, Watch } from 'vue-property-decorator'

/**
 * @name 组件显示隐藏mixins
 *
 * @export
 * @class Show
 * @extends {Vue}
 */
@Component
export default class Show extends Vue {
  // use .sync or handle input event
  @Prop({type: Boolean, default: false}) readonly value?: boolean

  @Watch('value')
  valueChange(val: boolean) {
    if (val === this.isShow) return
    const type = val ? 'open' : 'close'
    this[type]();
  }
  @Watch('isShow')
  isShowChange(val: boolean) {
    if (val === this.value) return
    const type = val ? 'open' : 'close'
    this[type]();
  }

  isShow = this.value

  mounted() {
    if (this.value) this.open()
  }
  beforeDestroy() {
    this.close();
  }
  /**
   * @name 关闭组件方法
   *
   * @memberof Show
   */
  close() {
    const self = this as this & {
      closedCallback: (Done: () => void) => void
    }
    // 关闭
    function Done() {
      self.isShow = false
      self.$emit('input', false)
      self.$emit('closed')
    }
    // 内部关闭回调
    if ('closedCallback' in self && self.closedCallback && typeof self.closedCallback === 'function') {
      self.closedCallback(Done);
    } else Done();
  }

  /**
   * @name 开启组件方法
   *
   * @memberof Display
   */
  open() {
    this.isShow = true
    const self = this as this & {
      openedCallback: () => void
    }
    self.$emit('opened')
    // 内部开启回调
    if ('openedCallback' in self && self.openedCallback && typeof self.openedCallback === 'function') self.openedCallback();
  }
}