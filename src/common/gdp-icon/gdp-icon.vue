<script>
export default {
  name: 'gdp-icon',
  render(h) {
    return h('div', {
      class: {
        'gdp-test': 'gdp-test'
      },
      domProps: {
        innerHTML: 'test module components'
      }
    })
  }
}
</script>

<style lang="scss" scoped>
.gdp-test {
  color: red;
  transform: scale(.5);
}
</style>
