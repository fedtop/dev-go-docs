# 安装

<!-- 适用版本：v0.2.3 -->

## Chrome（推荐）

从 [Chrome 应用商店](https://chrome.google.com/webstore/detail/devgo/kcofdbjhicjdbmldlcffcijglkifnnjn) 安装，可自动更新。

安装后点浏览器工具栏的拼图图标，把 DevGo 固定到工具栏，日常用 `Alt+1`（macOS 为 `⌥1`）随时唤起弹窗。

## Edge 及其他 Chromium 内核浏览器

可以直接安装 Chrome 应用商店版本：打开 Edge 的 `扩展 → 管理扩展`，开启左下角「允许来自其他应用商店的扩展」，再进入上面的商店链接点安装。

## Firefox

从 [GitHub Releases](https://github.com/fedtop/DevGo/releases) 下载最新的 `dev-go-*.firefox.zip` 并解压，然后：

1. 打开 `about:debugging#/runtime/this-firefox`
2. 点「临时载入附加组件」，选择解压目录里的 `manifest.json`

::: warning
Firefox 的「临时载入」重启浏览器后会失效，每次启动需要重新载入；持续使用的正式版本需要等上架 Mozilla 商店（AMO）。另外，Firefox 下代理切换暂不可用，详见 [FAQ](/faq/#firefox-里代理切换不可用)。
:::

## 离线安装（Chrome，无法访问商店时）

1. 从 [GitHub Releases](https://github.com/fedtop/DevGo/releases) 下载 `dev-go-*-chrome.zip` 并解压
2. 打开 `chrome://extensions`，右上角开启「开发者模式」
3. 点「加载已解压的扩展程序」，选择解压出的目录

离线安装的扩展不会自动更新，升级时需要重新下载并覆盖：解压新版本后，在 `chrome://extensions` 的 DevGo 卡片上点「重新加载」即可。

## 验证安装成功

打开任意网页，按 `Alt+1` 能弹出 DevGo 面板、网页右侧能看到悬浮快捷栏，就说明安装成功。接着去 [快速上手](/guide/quick-start)。
