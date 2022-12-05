export default {
  title: 'DevGo',
  titleTemplate: false,
  description: 'A super unbeatable browser extension plugin for developers(一个专属于开发者的超级无敌浏览器扩展插件)',
  base: '/dev-go-docs',
  head:[
    ['link', { rel: 'icon', href: '/favicon.ico' }]
  ],
  themeConfig:{
    siteTitle: null,
    logo: "/logo.png",
    nav: [
      // {
      //   text: "指引",
      //   items: [{ text: `Lottery 抽奖`, link: "/tools/Lottery" }],
      // },
      {
        text: "指引",
        link: "/guide/index",
      }
    ],
    socialLinks:[
      { icon: 'github', link: 'https://github.com/fedtop/dev-go' }
    ],
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2022-present DevGo'
    }
  }
}
