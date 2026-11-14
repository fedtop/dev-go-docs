# 参与开发

<!-- 适用版本：v0.2.3 -->

DevGo 基于 WXT + React + TypeScript 构建，样式 Tailwind CSS v4，图标 lucide-react。支持 Chrome MV3 与 Firefox 双端构建。

## 架构总览

```text
src/
├─ entrypoints/            # WXT 入口（自动映射 manifest）
│  ├─ background.ts        # 后台入口：只注册监听，逻辑见 src/background/
│  ├─ translate.content.ts # 整页行间翻译
│  ├─ selection.content.tsx# 划词工具条（翻译 + AI 动作）
│  ├─ github.content.tsx   # GitHub 增强 UI
│  ├─ unlock.content.ts    # 按站点解除复制/选择限制
│  ├─ assistant.content.ts # 助手桥：读取网页正文、读取 / 执行 WebMCP 工具
│  ├─ dock.content.tsx     # 悬浮快捷栏
│  ├─ sidepanel/           # 侧边栏：AI 助手 + 网页工具
│  ├─ cors-bridge.content.ts / cors-proxy.ts
│  ├─ popup/ options/ newtab/
├─ background/             # 后台各模块（消息路由、代理、CORS、媒体嗅探、命令）
├─ api/                    # 翻译与查词接口封装（llm / translator / microsoft）
├─ features/               # 各功能模块实现（按功能域分目录）
├─ ui/                     # 通用 UI 组件（Button / Switch / Tabs / Markdown…）
├─ utils/                  # 设置存储、消息协议、主题、快捷键、备份、同步
├─ locales/                # 中英文文案（zh_CN / en，key 由中文文件推导，写错 key 编译报错）
├─ types/                  # 业务类型定义
└─ assets/                 # 样式与静态资源
```

几条约定：

- **入口保持薄**：`entrypoints/` 只做注册和挂载，逻辑下沉到 `background/` 与 `features/`
- **文案全部走 `t()`**：新增用户可见文案要加进 `src/locales/zh_CN/`，英文同步补 `en/`；具体见仓库 `CLAUDE.md`
- **持久化统一走 `utils/settings.ts`** 的 `storage.defineItem`，参与备份的项要同步加进 `utils/backup.ts`

## 本地开发

```bash
pnpm install
pnpm dev            # Chrome
pnpm dev:firefox    # Firefox
```

代码检查与构建：

```bash
pnpm compile
pnpm lint
pnpm format:check
pnpm build / pnpm build:firefox
pnpm zip / pnpm zip:firefox
```

## 文档截图流水线

本站的全部截图由主仓库的 `scripts/ui-shots` 自动生成，UI 改版后重跑一条命令即可全量刷新，详见主仓库 `scripts/ui-shots/README.md`。

```bash
pnpm shots -- --all   # 2 语言 × 2 明暗 全矩阵
pnpm shots:sync       # 按版本目录同步进本仓库 docs/public/shots/
```

## 发布流程

见主仓库 [docs/publishing.md](https://github.com/fedtop/DevGo/blob/main/docs/publishing.md)。
