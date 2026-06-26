# Scion 中文翻译版本

> 英文版 README：[`README.en.md`](README.en.md)
> 上游项目：[`GoogleCloudPlatform/scion`](https://github.com/GoogleCloudPlatform/scion)

本仓库是 Scion 的中文翻译维护版本，基于上游 `GoogleCloudPlatform/scion`，重点增加中文界面、中文 README 和中文使用说明。核心功能、命令、运行方式和上游保持一致；`Agent`、`Broker`、`Hub`、`Harness` 等产品或技术术语保留英文。

_sci·on /ˈsīən/ — 用于嫁接或生根的嫩枝。_

Scion 是一个实验性的多 Agent 编排平台，用于在容器中并行运行多个“深度 Agent”。每个 Agent 都拥有独立容器、工作区、凭据和 `git worktree`，可以同时处理同一个代码库或项目中的不同任务。

## 这个中文版本做了什么

- 增加 `zh-CN` 中文界面翻译。
- 增加顶部语言切换按钮，支持中文 / 英文切换并持久保存。
- 扩展 Web UI 中导航、Onboarding、Dashboard、Profile、Admin、Scheduler、Maintenance、Server Config、Metrics、弹窗等文案的中文覆盖。
- 对 Lit / Shoelace 的 Shadow DOM 动态文案做自动翻译兜底。
- 保留 `Agent`、`Broker`、`Hub` 等技术术语英文，避免误译。

## README 语言约定

- [`README.md`](README.md)：中文默认首页。
- [`README.en.md`](README.en.md)：英文版 README。
- 后续同步上游时，如果命令、安装方式、架构说明、功能状态或免责声明发生变化，两个 README 都要同步更新。
- 中文 README 不是一次性翻译文件，而是本仓库的默认维护文档；英文 README 用于和上游内容对照。

## 与上游同步的维护约定

本仓库会尽量跟随上游 Scion 更新，同时保留中文界面和中文文档：

1. 从上游 `GoogleCloudPlatform/scion` 同步最新代码。
2. 解决中文翻译分支与上游的冲突。
3. 更新 `web/src/client/i18n.ts` 中新增 UI 文案的中文翻译。
4. 如果上游 README 或使用说明变化，同步更新 `README.md` 和 `README.en.md`。
5. 运行构建检查，确认中文界面仍可正常加载。

推荐同步命令：

```bash
git fetch origin
git merge origin/main

cd web
npm ci
npm run build
cd ..

make build
```

> 说明：`npm run typecheck` 当前会命中上游已有的 `metrics-dashboard.ts` 类型检查问题；这不是中文翻译改动引入的。

## 快速开始

### 使用中文版本源码运行

```bash
git clone https://github.com/study8677/scion-zh-cn.git
cd scion-zh-cn

cd web
npm ci
npm run build
cd ..

make build
./build/scion server start --web-assets-dir "$PWD/web/dist/client"
```

启动后浏览器会打开 Onboarding 页面。默认地址通常是：

```text
http://127.0.0.1:9810/onboarding
```

如果你想指定端口，例如 `18080`：

```bash
./build/scion server start --web-assets-dir "$PWD/web/dist/client" --web-port 18080
```

### 使用 Homebrew 安装上游版本

```bash
brew install scion
scion server start
```

注意：Homebrew 安装的是上游发布版本，只有当中文翻译被上游合并并发布后，才会包含本仓库的中文界面。

## 启动 Agent

```bash
# 启动一个 Agent，并立即 attach 到会话
scion start debug "Help me debug this error" --attach
```

## 常用命令

| 命令 | 说明 |
| --- | --- |
| `scion list` / `scion ps` | 查看活跃 Agent |
| `scion attach <name>` | 连接到正在运行的 Agent 的 tmux 会话 |
| `scion message <name> "..."` / `scion msg` | 向正在运行的 Agent 发送消息 |
| `scion logs <name>` | 查看 Agent 日志 |
| `scion stop <name>` | 停止 Agent |
| `scion resume <name>` | 恢复已停止的 Agent |
| `scion delete <name>` | 删除 Agent、容器和 worktree |

## 核心特性

- **Harness Agnostic**：默认包含 Gemini CLI 和 Claude Code，也可通过可选 bundle 使用 OpenCode、Codex、Antigravity 等 Harness。
- **真实隔离**：每个 Agent 运行在独立容器中，拥有独立凭据、配置和 `git worktree`。
- **并行执行**：可以本地、远程 VM 或 Kubernetes 集群上并行运行多个 Agent。
- **Attach / Detach**：Agent 运行在 `tmux` 会话中，可随时 attach 交互，也可 detached 后继续排队消息。
- **模板化专长**：可以定义 “Security Auditor”“QA Tester” 等 Agent 模板，指定系统提示词和技能集合。
- **多运行时**：支持 Docker、Podman、Apple Container 和 Kubernetes 等运行时配置。
- **可观测性**：通过标准化 OTEL telemetry 收集日志和指标。

## 核心概念

| 概念 | 说明 |
| --- | --- |
| **Agent** | 运行在容器中的深度 Agent Harness，例如 Claude Code、Gemini CLI 等 |
| **Project** | 项目命名空间和 Agent 集合，通常对应一个 Git 仓库 |
| **Template** | Agent 蓝图，包含系统提示词和技能集合 |
| **Runtime** | 容器运行时，例如 Docker、Podman、Apple Container 或 Kubernetes |
| **Hub** | 可选的中心控制平面，用于多机器编排 |
| **Runtime Broker** | 向 Hub 提供运行时能力的机器，例如本地笔记本或 VM |

本地模式更简单，并非所有概念都会同时出现。完整概念说明请参考上游文档：[Concepts](https://googlecloudplatform.github.io/scion/concepts/)。

## 文档

上游文档站点仍然是最完整的参考来源：

- [Documentation Site](https://googlecloudplatform.github.io/scion/)
- [Overview](https://googlecloudplatform.github.io/scion/overview/)
- [Installation](https://googlecloudplatform.github.io/scion/getting-started/install/)
- [Concepts](https://googlecloudplatform.github.io/scion/concepts/)
- [CLI Reference](https://googlecloudplatform.github.io/scion/reference/cli/)
- [Using Templates](https://googlecloudplatform.github.io/scion/advanced-local/templates/)
- [Using Tmux](https://googlecloudplatform.github.io/scion/advanced-local/tmux/)
- [Kubernetes Runtime](https://googlecloudplatform.github.io/scion/hub-admin/kubernetes/)

## 项目状态

Scion 仍处于早期实验阶段。核心概念已经基本稳定，但仍可能存在粗糙边缘：

- **本地模式**：相对稳定。
- **Hub 工作流**：已经高度可用。
- **Kubernetes 运行时**：仍偏早期，有已知粗糙边缘。

## 免责声明

这是 Scion 的中文翻译维护版本。Scion 本身不是 Google 官方支持的产品，也不符合 [Google Open Source Software Vulnerability Rewards Program](https://bughunters.google.com/open-source-security) 的奖励范围。

## License

Apache License, Version 2.0. See [LICENSE](LICENSE).
