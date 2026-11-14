# DevGo 是什么

<!-- 适用版本：v0.2.3 -->

DevGo 是一个面向开发者的浏览器效率扩展：把翻译、AI 助手、代理与隐私防护、资源嗅探这些高频需求放进一个扩展里，支持 Chrome 与 Firefox，界面中英双语。

与其装五六个各管一件事的扩展，DevGo 想做到的是：每个功能单独拿出来都能打，合在一起又共享同一套配置和交互。

## 核心能力

| 能力               | 一句话介绍                                         | 详见                                      |
| ------------------ | -------------------------------------------------- | ----------------------------------------- |
| 整页双语翻译       | 译文插在原文后面，边读边对照；支持 Shadow DOM 页面 | [整页双语翻译](/features/page-translate)  |
| 划词工具条         | 选中文字即翻译 / 解释 / 总结，AI 动作可以自己定义  | [划词工具条](/features/selection-toolbar) |
| AI 助手            | 侧边栏一键总结本页、就网页内容提问                 | [AI 助手](/features/assistant)            |
| 网页工具（WebMCP） | AI 直接调用网页注册的工具，替你在页面上操作        | [网页工具（WebMCP）](/features/webmcp)    |
| 代理与自动分流     | 四种网络模式一键切换，规则自动分流                 | [代理与自动分流](/features/proxy)         |
| 真实 IP 防护       | 开着代理时，防止网站借 WebRTC 拿到你的真实 IP      | [真实 IP 防护](/features/ip-protection)   |
| 资源嗅探           | 嗅探当前页面的图片 / 视频 / 音频，批量下载         | [资源嗅探](/features/media-sniffer)       |
| 悬浮快捷栏         | 网页右侧的快捷按钮：翻译、AI 总结、回到顶部        | [悬浮快捷栏](/features/dock)              |
| 新标签页           | 搜索引擎 + bang 语法、快捷导航、动态背景           | [新标签页](/features/newtab)              |
| 网页增强           | 按站点解除复制限制、GitHub 增强                    | [网页增强](/features/page-enhance)        |

## 界面速览

DevGo 的日常操作集中在三个地方：

- **弹窗**：点工具栏图标（或按 `Alt+1`），四个页签——翻译、网络、资源、功能，只放与当前页面相关的高频操作。
- **侧边栏**：按 `Alt+2` 打开 AI 助手，总结网页、就内容提问。
- **设置页**：所有配置都在这里，按 翻译 / AI 模型 / 划词 / AI 助手 / 网络 / 网页增强 / 通用 分区。

<img src="/shots/0.2.3/zh-CN/light/popup-function.png" alt="功能总览：弹窗「功能」页">

> [安装](/guide/install) 之后，跟着 [快速上手（5 分钟）](/guide/quick-start) 走一遍即可。

## 相关链接

- [Chrome 应用商店](https://chrome.google.com/webstore/detail/devgo/kcofdbjhicjdbmldlcffcijglkifnnjn)
- [GitHub 仓库](https://github.com/fedtop/DevGo)
- [GitHub Releases 离线安装包](https://github.com/fedtop/DevGo/releases)
