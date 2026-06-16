export default {
  title: 'DevGo',
  titleTemplate: false,
  description: 'DevGo 是一个面向开发者的浏览器效率扩展',
  base: '/dev-go-docs',
  head:[
    ['link', { rel: 'icon', href: '/dev-go-docs/favicon.ico' }]
  ],
  themeConfig:{
    siteTitle: null,
    logo: "/logo.png",
    nav: [
      {
        text: "使用指南",
        link: "/guide/index",
      },
      {
        text: "本地开发",
        link: "/development/index",
      }
    ],
    sidebar: [
      {
        text: "文档",
        items: [
          { text: "使用指南", link: "/guide/index" },
          { text: "本地开发", link: "/development/index" },
        ],
      },
    ],
    socialLinks:[
      { icon: 'github', link: 'https://github.com/wangrongding/dev-go' }
    ],
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2022-present DevGo'
    }
  }
}
