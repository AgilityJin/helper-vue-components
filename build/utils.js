const path = require('path')
const fs = require('fs')
const flattenDeep = require('lodash/flattenDeep')

// 移除数组指定元素
function removeArrayElement(sourceArr, key) {
  if (!sourceArr || !(sourceArr instanceof Array) || !key || typeof key !== 'string') return sourceArr
  const source = JSON.parse(JSON.stringify(sourceArr))
  const index = source.indexOf(key)
  if (index !== -1) {
    source.splice(index, 1)
  }
  return source
}

function getAllEntry() {
  let entryArr = fs.readdirSync(path.join(__dirname, '../src'))
  // 排除非入口路径
  entryArr = removeArrayElement(entryArr, 'main.ts')
  entryArr = removeArrayElement(entryArr, 'assets')
  entryArr = removeArrayElement(entryArr, 'mixins')
  entryArr = removeArrayElement(entryArr, 'interface')
  entryArr = removeArrayElement(entryArr, 'utils')
  
  // 生成所有入口
  let allEntry = []
  allEntry = entryArr && entryArr.map(item => {
    let dir = fs.readdirSync(path.join(__dirname, '../src', item))
    dir = removeArrayElement(dir, 'index.ts')
    dir = dir.map(el => path.join(__dirname, '../src', item, el, el + '.ts'))
    return dir
  }) || []
  allEntry.push(path.join(__dirname, '../src/main.ts'))
  allEntry = flattenDeep(allEntry)
  console.log(allEntry)
  return allEntry
}

module.exports = {
  getAllEntry
}
