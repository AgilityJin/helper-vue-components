import { Component, Prop, Watch, Vue } from 'vue-property-decorator';

/**
 * @name 组件开关控制
 * @export
 * @class Show
 * @extends {Vue}
 */
@Component
export default class Show extends Vue {
  @Prop({type: Boolean, default: false}) value: boolean = false
  isShow = this.value
  @Watch('value')
  valueChange(val: boolean) {
    const type = val ? 'open' : 'close'
    this[type]();
    this.$emit(type)
  }
  mounted () {
    if (this.value) this.open()
  }
  close() {
    if (!this.isShow) return
    this.isShow = false
    this.$emit('input', false)
  }
  open() {
    this.isShow = true
  }
  beforeDestroy() {
    this.close();
  }
}
