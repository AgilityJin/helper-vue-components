const path = require('path')

module.exports = {
  title: '@helper-gdp/vue-components',
  description: 'herper gdp 小组前端 vue 组件库',
  dest: 'lib',
  configureWebpack: {
    resolve: {
      alias: {
        '@': path.join(__dirname, '../../docs')
      }
    }
  },
  // markdown: {
  //   lineNumbers: true
  // },
  themeConfig: {
    lastUpdated: 'Last Updated',
    nav: [ // 添加导航栏
      {
        text: '指南',
        link: '/'
      },
      {
        text: '组件',
        link: '/guide/common/divider'
      },
      {
        text: '文档版本',
        items: [{
          text: '1.x.x',
          link: '/'
        }]
      }
    ],
    // 添加侧边栏
    sidebar: {
      '/guide/': [
        {
          title: 'Getting Started',
          path: '/guide/',
          sidebarDepth: 2,
          collapsable: false,
        },
        {
          title: '通用组件',
          path: '/guide/common/',
          sidebarDepth: 2,
          children: [
            '/guide/common/divider',
            '/guide/common/overlay',
            '/guide/common/popup',
          ],
          collapsable: false,
        },
        {
          title: '移动端组件',
          path: '/guide/mobile/',
          sidebarDepth: 2,
          children: [
          ],
          collapsable: false,
        },
        {
          title: '桌面端组件',
          path: '/guide/desktop/',
          sidebarDepth: 2,
          children: [
          ],
          collapsable: false,
        },
        {
          title: '模块化组件',
          path: '/guide/modules/',
          sidebarDepth: 2,
          children: [
          ],
          collapsable: false,
        },
      ],
      '/': [
        {
          title: '@helper-gdp/vue-components',
          path: '/',
          sidebarDepth: 2,
          collapsable: false,
        },
        {
          title: '更新日志',
          path: '/CHANGELOG',
          sidebarDepth: 2,
        },
      ]
    },
    sidebarDepth: 2,
    repoLabel: 'GitHub',
    repo: 'https://github.com/AgilityJin/helper-vue-components',
    smoothScroll: true,
  }
}