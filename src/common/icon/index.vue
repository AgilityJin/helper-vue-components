<script>
export default {
  name: 'gdp-icon',
  render(h) {
    return h('div', {
      class: {
        'gdp-test': 'gdp-test'
      },
      domProps: {
        innerHTML: 'test icon module components'
      }
    })
  }
}
</script>

<style lang="less" scoped>
.gdp-test {
  color: red;
  transform: scale(.5);
}
</style>
