<script>
export default {
  name: 'gdp-avatar',
  render(h) {
    return h('div', {
      class: {
        'gdp-avatar': 'gdp-avatar'
      },
      domProps: {
        innerHTML: 'avatar module components'
      }
    })
  }
}
</script>

<style src='./index.less' scoped></style>

