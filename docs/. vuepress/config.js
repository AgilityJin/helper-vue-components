const path = require('path')

module.exports = {
  title: 'Hello VuePress',
  description: 'Just playing around',
  dest: 'lib',
  configureWebpack: {
    resolve: {
      alias: {
        '@': path.join(__dirname, '../../docs')
      }
    }
  },
  markdown: {
    lineNumbers: true
  },
  themeConfig: {
    nav: [ // 添加导航栏
      {
        text: '菜单1',
        link: '/apiword'
      },
      {
        text: '菜单2',
        link: '/api'
      },
      {
        text: '菜单3',
        link: '/error'
      },
      {
        text: '菜单4',
        items: [{
            text: '菜单4-1',
            link: '/ers1'
          },
          {
            text: '菜单4-2',
            link: '/ers2'
          },
        ]
      }
    ],
    // 添加侧边栏
    sidebar: 'auto',
    sidebarDepth: 2
  }
}