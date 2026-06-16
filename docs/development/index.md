# 本地开发

DevGo 当前代码位于 `/Users/wangrongding/Coding/dev-go`，文档站位于 `/Users/wangrongding/Coding/dev-go-docs`。应用使用 WXT、React、TypeScript 和 Tailwind CSS 开发，运行在 Chrome MV3 扩展模型下，并保留 Firefox 构建命令。

## 安装依赖

在 DevGo 代码仓库中安装依赖：

```bash
cd /Users/wangrongding/Coding/dev-go
pnpm install
```

## 启动开发

```bash
pnpm dev
pnpm dev:firefox
```

WXT 开发服务默认使用 `3000` 端口。启动后在浏览器扩展管理页加载 WXT 输出的开发扩展目录即可调试。

## 检查与格式化

```bash
pnpm compile
pnpm eslint
pnpm prettier
```

## 构建与打包

```bash
pnpm build
pnpm build:firefox
pnpm zip
pnpm zip:firefox
```

## 项目结构

```text
src/
├─ entrypoints/            # WXT 入口，自动映射 manifest
│  ├─ background.ts        # 后台消息、翻译、代理、CORS、资源嗅探调度
│  ├─ translate.content.ts # 整页行间翻译与 DOM 媒体收集
│  ├─ selection.content.tsx# 划词翻译 UI
│  ├─ github.content.tsx   # GitHub 增强 UI
│  ├─ link-go.content.ts   # 外链中转页直达
│  ├─ unlock.content.ts    # 解除复制/选择限制
│  ├─ cors-bridge.content.ts
│  ├─ cors-proxy.ts
│  ├─ popup/
│  ├─ options/
│  └─ newtab/
├─ api/                    # 翻译与查词接口封装
├─ features/               # Popup、新标签页、GitHub、TODO 等功能实现
├─ ui/                     # 通用 UI 组件
├─ utils/                  # 设置、消息协议、网络、主题、备份等工具
├─ types/                  # 业务类型定义
└─ assets/                 # 全局样式、图标与静态资源
```

## Manifest 能力

`wxt.config.ts` 中声明的主要权限包括：

- `contextMenus`、`tabs`、`storage`、`bookmarks`。
- `declarativeNetRequest` 用于 CORS 辅助和微软翻译请求头处理。
- `proxy` 用于网络面板接管浏览器代理。
- `webRequest` 用于资源嗅探。
- `downloads` 用于资源下载。
- Chrome 环境下额外使用 `favicon`，Firefox 构建不会声明该权限。

内容脚本和网络调试能力需要 `<all_urls>` 访问权限。

## 持久化设置

设置集中定义在 `src/utils/settings.ts`：

- 翻译：`translateProvider`、`lookupProvider`、`enableSelectionTranslate`。
- GitHub：`enableGithubEnhance`。
- 网络：`networkMode`、`networkProxyProfile`、`networkRuleList`、`enableReloadOnProxySwitch`。
- 新标签页：`quickNavItems`、`quickNavCategoryLabels`、`searchEngine`、`themeMode`。
- 待办：`todoItems`。
- Popup：`defaultPopupTab`、`popupInitialTab`。

新标签页和待办相关数据已从 `local` 迁移到 `sync`，迁移逻辑在 `migrateLocalToSync` 中执行。

## 文档站开发

在文档仓库中预览或构建：

```bash
cd /Users/wangrongding/Coding/dev-go-docs
pnpm install
pnpm docs:dev
pnpm build
```

文档站使用 VitePress，主要内容位于 `docs/index.md`、`docs/guide/index.md` 和 `docs/development/index.md`。
