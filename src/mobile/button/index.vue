<script>
export default {
  name: 'gdp-mobile-button',
  render(h) {
    return h('div', {
      class: {
        'gdp-test2': 'gdp-test2'
      },
      domProps: {
        innerHTML: 'test2 module components'
      }
    })
  }
}
</script>

<style lang="less" scoped>
.gdp-test2 {
  color: yellowgreen;
}
</style>
