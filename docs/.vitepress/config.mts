import { defineConfig } from "vitepress";

// 截图约定：页面统一引用 /dev-go-docs/shots/{version}/{lang}/{theme}/{scene}.png
// 由主仓库 `pnpm shots` 生成、`pnpm shots:sync` 同步过来，见主仓库 scripts/ui-shots/README.md

const zhNav = [
  { text: "使用指南", link: "/guide/quick-start" },
  { text: "功能", link: "/features/page-translate" },
  { text: "设置", link: "/settings/general" },
  { text: "FAQ", link: "/faq/" },
  { text: "参与开发", link: "/development/" },
];

const zhSidebar = [
  {
    text: "指南",
    items: [
      { text: "DevGo 是什么", link: "/guide/" },
      { text: "安装", link: "/guide/install" },
      { text: "快速上手（5 分钟）", link: "/guide/quick-start" },
    ],
  },
  {
    text: "功能",
    items: [
      { text: "整页双语翻译", link: "/features/page-translate" },
      { text: "划词工具条与自定义动作", link: "/features/selection-toolbar" },
      { text: "弹窗查词", link: "/features/lookup" },
      { text: "AI 助手", link: "/features/assistant" },
      { text: "网页工具（WebMCP）", link: "/features/webmcp" },
      { text: "站点工具与录制操作", link: "/features/site-tools" },
      { text: "网页导出（PDF / 长图）", link: "/features/capture" },
      { text: "代理与自动分流", link: "/features/proxy" },
      { text: "真实 IP 防护", link: "/features/ip-protection" },
      { text: "CORS 调试", link: "/features/cors" },
      { text: "资源嗅探与批量下载", link: "/features/media-sniffer" },
      { text: "悬浮快捷栏", link: "/features/dock" },
      { text: "新标签页", link: "/features/newtab" },
      { text: "网页增强", link: "/features/page-enhance" },
      { text: "GitHub 增强", link: "/features/github" },
    ],
  },
  {
    text: "设置",
    items: [
      { text: "通用与外观", link: "/settings/general" },
      { text: "AI 模型", link: "/settings/models" },
      { text: "备份与同步", link: "/settings/sync" },
    ],
  },
  { text: "FAQ 与故障排查", link: "/faq/" },
  { text: "参与开发", link: "/development/" },
];

const enSidebar = [
  {
    text: "Guide",
    items: [
      { text: "What is DevGo", link: "/en/guide/" },
      { text: "Install", link: "/en/guide/install" },
      { text: "Quick start (5 minutes)", link: "/en/guide/quick-start" },
    ],
  },
  {
    text: "Features",
    items: [
      {
        text: "Full-page bilingual translation",
        link: "/en/features/page-translate",
      },
      {
        text: "Selection toolbar & custom actions",
        link: "/en/features/selection-toolbar",
      },
      { text: "Popup dictionary", link: "/en/features/lookup" },
      { text: "AI assistant", link: "/en/features/assistant" },
      { text: "Page tools (WebMCP)", link: "/en/features/webmcp" },
      { text: "Site tools & recording", link: "/en/features/site-tools" },
      { text: "Page export (PDF / image)", link: "/en/features/capture" },
      { text: "Proxy & rule-based routing", link: "/en/features/proxy" },
      { text: "Real IP protection", link: "/en/features/ip-protection" },
      { text: "CORS debugging", link: "/en/features/cors" },
      {
        text: "Media sniffer & bulk download",
        link: "/en/features/media-sniffer",
      },
      { text: "Floating dock", link: "/en/features/dock" },
      { text: "New tab", link: "/en/features/newtab" },
      { text: "Page enhancements", link: "/en/features/page-enhance" },
      { text: "GitHub enhancements", link: "/en/features/github" },
    ],
  },
  {
    text: "Settings",
    items: [
      { text: "General & appearance", link: "/en/settings/general" },
      { text: "AI models", link: "/en/settings/models" },
      { text: "Backup & sync", link: "/en/settings/sync" },
    ],
  },
  { text: "FAQ & troubleshooting", link: "/en/faq/" },
  { text: "Contributing", link: "/en/development/" },
];

export default defineConfig({
  title: "DevGo",
  titleTemplate: false,
  description: "DevGo 使用文档：面向开发者的浏览器效率扩展",
  base: "/dev-go-docs/",
  head: [["link", { rel: "icon", href: "/dev-go-docs/favicon.ico" }]],
  themeConfig: {
    search: {
      provider: "local",
      options: {
        translations: {
          button: { buttonText: "搜索文档", buttonAriaLabel: "搜索文档" },
          modal: {
            noResultsText: "没有找到相关结果",
            resetButtonTitle: "清除查询",
            footer: {
              selectText: "选择",
              navigateText: "切换",
              closeText: "关闭",
            },
          },
        },
      },
    },
  },
  locales: {
    root: {
      label: "简体中文",
      lang: "zh-CN",
      themeConfig: {
        nav: zhNav,
        sidebar: zhSidebar,
        search: {
          provider: "local",
          options: {
            translations: {
              button: { buttonText: "搜索文档", buttonAriaLabel: "搜索文档" },
              modal: {
                noResultsText: "没有找到相关结果",
                resetButtonTitle: "清除查询",
                footer: {
                  selectText: "选择",
                  navigateText: "切换",
                  closeText: "关闭",
                },
              },
            },
          },
        },
        outline: { level: [2, 3] },
        docFooter: { prev: "上一页", next: "下一页" },
        returnToTopLabel: "回到顶部",
        sidebarMenuLabel: "目录",
        darkModeSwitchLabel: "外观",
        lightModeSwitchTitle: "切换到浅色",
        darkModeSwitchTitle: "切换到深色",
        socialLinks: [
          { icon: "github", link: "https://github.com/fedtop/DevGo" },
        ],
        footer: {
          message: "依据 MIT 许可发布。",
          copyright: "Copyright © 2022-present DevGo",
        },
      },
    },
    en: {
      label: "English",
      lang: "en",
      link: "/en/",
      themeConfig: {
        nav: [
          { text: "Guide", link: "/en/guide/" },
          { text: "FAQ", link: "/en/faq/" },
        ],
        sidebar: enSidebar,
        socialLinks: [
          { icon: "github", link: "https://github.com/fedtop/DevGo" },
        ],
        footer: {
          message: "Released under the MIT License.",
          copyright: "Copyright © 2022-present DevGo",
        },
      },
    },
  },
});
