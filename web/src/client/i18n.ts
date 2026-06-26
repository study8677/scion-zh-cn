/**
 * Copyright 2026 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import type { ReactiveController, ReactiveControllerHost } from 'lit';

export const LOCALE_CHANGE_EVENT = 'scion:locale-change';
export const LOCALE_STORAGE_KEY = 'scion-locale';

export const SUPPORTED_LOCALES = ['en', 'zh-CN'] as const;
export type Locale = (typeof SUPPORTED_LOCALES)[number];

type TranslationValues = Record<string, string | number>;
type TranslationTable = Record<string, string>;

const ZH_CN: TranslationTable = {
  'Add a project workspace': '添加项目工作区',
  'Add local directory': '添加本地目录',
  Admin: '管理',
  Agent: 'Agent',
  'Agent Orchestration': 'Agent 编排',
  Agents: 'Agents',
  'Agents are AI-powered workers that can help you with coding tasks. Create your first agent to get started.':
    'Agent 是可以帮助你完成编码任务的 AI 工作单元。创建第一个 Agent 开始使用。',
  'Allow List': '允许列表',
  'An error occurred during image operation.': '镜像操作时发生错误。',
  'Authorized users': '已授权用户',
  Back: '返回',
  Broker: 'Broker',
  Brokers: 'Brokers',
  'Browse project workspaces': '浏览项目工作区',
  'Build locally': '本地构建',
  'Build output ({count} lines)': '构建输出（{count} 行）',
  Collapse: '收起',
  'Collapse sidebar': '收起侧边栏',
  'Configure Agent': '配置 Agent',
  'Connect to an existing git repository for source-controlled workspaces.':
    '连接已有 git 仓库，用于受版本控制的工作区。',
  'Connect to running agent': '连接到正在运行的 Agent',
  'Container Images': '容器镜像',
  'Container Runtime': '容器运行时',
  'Create & Continue': '创建并继续',
  'Create Agent': '创建 Agent',
  'Create Hub Workspace': '创建 Hub 工作区',
  'Create Project': '创建项目',
  'Create Skill': '创建技能',
  'Currently configured:': '当前配置：',
  Dashboard: '仪表盘',
  'Detected:': '检测到：',
  'Detecting runtime...': '正在检测运行时...',
  Directory: '目录',
  'Display Name': '显示名称',
  Email: '邮箱',
  'Expand sidebar': '展开侧边栏',
  'Failed to connect to the server.': '无法连接到服务器。',
  'Failed to create project': '创建项目失败',
  'Failed to initialize harnesses': '初始化 harness 失败',
  'Failed to load runtime info': '加载运行时信息失败',
  'Failed to save identity': '保存身份信息失败',
  'Failed to save runtime': '保存运行时失败',
  'Failed to start image build': '启动镜像构建失败',
  'Failed to start image pull': '启动镜像拉取失败',
  'First Workspace': '第一个工作区',
  'Git 2.47+ is required for agent worktrees. Detected: {version}. Run brew install git to upgrade.':
    'Agent worktree 需要 Git 2.47 或更高版本。检测到：{version}。运行 brew install git 升级。',
  'GitHub App Setup': 'GitHub App 设置',
  'Go to Dashboard': '进入仪表盘',
  Group: '用户组',
  Groups: '用户组',
  'Harness Config': 'Harness 配置',
  Help: '帮助',
  "Here's what's happening with your agents today.": '这里是今天 Agent 的运行概况。',
  'Hub Resources': 'Hub 资源',
  'Hub-managed project': 'Hub 托管项目',
  'A workspace managed by the Hub. No git repository required.':
    '由 Hub 管理的工作区，不需要 git 仓库。',
  'Image registry is required to pull container images.': '拉取容器镜像需要配置镜像仓库。',
  'Install Docker or Podman to pull or build images. You can skip this step and configure a runtime later.':
    '安装 Docker 或 Podman 后即可拉取或构建镜像。你也可以跳过这一步，稍后再配置运行时。',
  Invite: '邀请',
  Language: '语言',
  'Link a git repo': '关联 git 仓库',
  Maintenance: '维护',
  Management: '管理',
  Metrics: '指标',
  'Metrics Dashboard': '指标仪表盘',
  Next: '下一步',
  'No Agents Found': '没有 Agent',
  'No Brokers Found': '没有 Broker',
  'No container runtime detected.': '未检测到容器运行时。',
  'No embedded broker available.': '没有可用的内嵌 Broker。',
  'No image registry configured.': '未配置镜像仓库。',
  'No project ID in response': '响应中没有项目 ID',
  'No Skills Found': '没有技能',
  'Open navigation menu': '打开导航菜单',
  'Open Terminal': '打开终端',
  Overview: '概览',
  'Page Not Found': '页面未找到',
  'Pending Invites': '待处理邀请',
  'Please enter at least a display name or email.': '请至少输入显示名称或邮箱。',
  Profile: '个人资料',
  Project: '项目',
  'Project Metrics': '项目指标',
  'Project Name': '项目名称',
  'Project Settings': '项目设置',
  'Project workspaces': '项目工作区',
  Projects: '项目',
  'Pull images': '拉取镜像',
  'Pull or build the container images for your selected harnesses.':
    '拉取或构建所选 harness 的容器镜像。',
  'Quick Actions': '快捷操作',
  'Re-check': '重新检查',
  Ready: '就绪',
  'Running checks...': '正在运行检查...',
  Runtime: '运行时',
  'Runtime Brokers': '运行时 Broker',
  Schedules: '计划任务',
  Scheduler: '调度器',
  'Select the container runtime for your workstation.': '选择当前工作站使用的容器运行时。',
  'Select which AI coding harnesses to configure.': '选择要配置的 AI 编码 harness。',
  'Server Config': '服务器配置',
  Settings: '设置',
  Setup: '设置',
  'Sign in': '登录',
  'Sign out': '退出登录',
  Skill: '技能',
  'Skill Registries': '技能注册表',
  'Skill Registry': '技能注册表',
  Skills: '技能',
  'Skip for now': '暂时跳过',
  'Spin up a new AI agent': '启动一个新的 AI Agent',
  'Switch language': '切换语言',
  'Switch to English': '切换到英文',
  'Switch to Chinese': '切换到中文',
  'System Check': '系统检查',
  'System check failed': '系统检查失败',
  Template: '模板',
  Terminal: '终端',
  'To pull pre-built images instead, configure an image registry.':
    '如果要拉取预构建镜像，请配置镜像仓库。',
  Users: '用户',
  'Verifying your environment is ready.': '正在确认环境是否可用。',
  'View Projects': '查看项目',
  'Welcome back, {name}!': '欢迎回来，{name}！',
  'Welcome to Scion': '欢迎使用 Scion',
  'You do not have permission to {action} this resource.': '你没有权限对该资源执行“{action}”。',
  "You're All Set": '全部设置完成',
  'Your name': '你的姓名',
  'Your workstation is configured and ready to use.': '你的工作站已经配置完成，可以开始使用。',
  "Let's get your workstation set up. First, tell us who you are.":
    '先完成工作站设置。第一步，请确认你的身份信息。',
  'Create your first project to get started.': '创建第一个项目后即可开始使用。',
  'Give your project a name.': '给项目起一个名称。',
  'Browse to or enter the path of a local directory.': '浏览或输入本地目录路径。',
  'Selected Path': '已选路径',
  'Validating...': '正在验证...',
  'Path does not exist.': '路径不存在。',
  'Not a directory.': '不是目录。',
  'Path is valid: {path}': '路径有效：{path}',
  'This is a git repository.': '这是一个 git 仓库。',
  'Already linked to another project.': '已关联到另一个项目。',
  'Project created but failed to link directory. You can retry.':
    '项目已创建，但目录关联失败。你可以重试。',
  'No harnesses selected. You can go back to select harnesses or skip this step.':
    '没有选择 harness。你可以返回选择 harness，或跳过这一步。',
  'Pre-built images are available via pull. Local builds require a source checkout.':
    '预构建镜像可以通过拉取获得。本地构建需要源码检出。',
  'Run the following to configure one, then restart the server:':
    '运行以下命令配置镜像仓库，然后重启服务器：',
  'If you installed via Homebrew, try reinstalling to auto-configure the registry:':
    '如果你通过 Homebrew 安装，可以尝试重新安装以自动配置镜像仓库：',
  '{count} total redemptions': '累计兑换 {count} 次',
  '{count}d ago': '{count} 天前',
  '{count}h ago': '{count} 小时前',
  '{count}m ago': '{count} 分钟前',
  '{used}/{max} uses': '已使用 {used}/{max} 次',
  'Access Tokens': '访问令牌',
  'Active Agents': '活跃 Agent',
  'Add Local Directory': '添加本地目录',
  'AI Harnesses': 'AI 编码工具',
  'An image registry is required to pull container images.': '拉取容器镜像需要配置镜像仓库。',
  Configuration: '配置',
  'Container (generic)': 'Container（通用）',
  'Environment Variables': '环境变量',
  'Git version': 'Git 版本',
  'GitHub Application': 'GitHub 应用',
  Integrations: '集成',
  'Invite {prefix} redeemed ({uses})': '邀请 {prefix} 已兑换（{uses}）',
  'just now': '刚刚',
  'Link a local directory. It stays where it is and is operated on in place.':
    '关联本地目录。目录位置保持不变，并在原地操作。',
  'Loading...': '正在加载...',
  Login: '登录',
  'No recent activity to display.': '暂无最近活动。',
  none: '无',
  Notifications: '通知',
  'Notifications & Settings': '通知和设置',
  'Recent Activity': '最近活动',
  redeemed: '已兑换',
  'Return to Hub': '返回 Hub',
  Secrets: '密钥',
  'Start by creating your first agent.': '先创建第一个 Agent。',
  'Step {current} of {total}': '第 {current} / {total} 步',
  Telegram: 'Telegram',
  there: '你好',
  'Toggle dark mode': '切换深色模式',
  User: '用户',
  pass: '通过',
  warn: '警告',
  fail: '失败',
  pending: '待处理',
  'Profile & Settings': '个人资料与设置',
  queued: '排队中',
  pulling: '拉取中',
  done: '完成',
  exists: '已存在',
  error: '错误',
};

let currentLocale: Locale = detectInitialLocale();

export function getLocale(): Locale {
  return currentLocale;
}

export function getLocaleLabel(locale = currentLocale): string {
  return locale === 'zh-CN' ? '中文' : 'EN';
}

export function getIntlLocale(): string {
  return currentLocale;
}

export function setLocale(locale: Locale): void {
  if (!isSupportedLocale(locale) || locale === currentLocale) return;
  currentLocale = locale;
  try {
    window.localStorage.setItem(LOCALE_STORAGE_KEY, locale);
  } catch {
    // localStorage can be unavailable in restricted browser contexts.
  }
  applyDocumentLocale(locale);
  window.dispatchEvent(new CustomEvent(LOCALE_CHANGE_EVENT, { detail: { locale } }));
}

export function toggleLocale(): void {
  setLocale(currentLocale === 'zh-CN' ? 'en' : 'zh-CN');
}

export function t(source: string, values: TranslationValues = {}): string {
  const translated = currentLocale === 'zh-CN' ? ZH_CN[source] || source : source;
  return translated.replace(/\{(\w+)\}/g, (match, key: string) => {
    const value = values[key];
    return value === undefined ? match : String(value);
  });
}

export class LocaleController implements ReactiveController {
  constructor(private host: ReactiveControllerHost) {
    host.addController(this);
  }

  get locale(): Locale {
    return getLocale();
  }

  t(source: string, values?: TranslationValues): string {
    return t(source, values);
  }

  hostConnected(): void {
    window.addEventListener(LOCALE_CHANGE_EVENT, this.handleLocaleChange as EventListener);
  }

  hostDisconnected(): void {
    window.removeEventListener(LOCALE_CHANGE_EVENT, this.handleLocaleChange as EventListener);
  }

  private handleLocaleChange = (): void => {
    this.host.requestUpdate();
  };
}

function detectInitialLocale(): Locale {
  if (typeof window === 'undefined') return 'en';
  try {
    const stored = window.localStorage.getItem(LOCALE_STORAGE_KEY);
    if (isSupportedLocale(stored)) return stored;
  } catch {
    // Ignore storage access errors.
  }

  const browserLocale = window.navigator.language || '';
  return browserLocale.toLowerCase().startsWith('zh') ? 'zh-CN' : 'en';
}

function isSupportedLocale(value: unknown): value is Locale {
  return typeof value === 'string' && SUPPORTED_LOCALES.includes(value as Locale);
}

function applyDocumentLocale(locale: Locale): void {
  if (typeof document === 'undefined') return;
  document.documentElement.lang = locale;
}

applyDocumentLocale(currentLocale);
