# 参与开发

<!-- 适用版本：v0.2.3；配文：glm2 -->

DevGo 基于 WXT + React + TypeScript 构建，样式 Tailwind CSS v4。

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

<!-- TODO(glm2)：从主仓库 README 的项目结构段落补一版架构总览（entrypoints / background / features / utils 的职责划分） -->
