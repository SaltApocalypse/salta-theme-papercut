# @salta/theme-papercut

TeririBlocks 主题同人游戏视觉设计系统（浅色 / 深色，基于 **Tailwind CSS v4** + **daisyUI 5**）。

> 定位：让一个普通的 Tailwind + daisyUI 项目拥有特日日主题同人游戏风格的浅色/深色视觉语言。主题提供视觉主题（配色 / token）和部分组件集（Theme Component Set）。

## 安装

通过 GitHub Repository 作为 Git dependency 使用（无需发布 npm）：

```json
{
  "dependencies": {
    "@salta/theme-papercut": "github:SaltApocalypse/salta-theme-papercut"
  }
}
```

## 使用

### 1. 引入主题（CSS）

```css
@import "tailwindcss";
@plugin "daisyui";
@import "@salta/theme-papercut";
```

### 2. 切换浅色 / 深色

主题通过 daisyUI 的 `data-theme` 切换：`papercut`（浅色，默认）/ `papercut-dark`（深色）。在 `<html>` 上设置即可：

```html
<html data-theme="papercut-dark">
```

组件（Button / Panel / Dropdown / Switch 等）与 `papercut-ink` 墨线令牌随主题自动反色。

### 3. JS/SVG 侧配色 token

```ts
import { theme } from "@salta/theme-papercut/tokens";
```

### 4. 主题统一出口（应用层主题注册/切换）

```ts
import { theme } from "@salta/theme-papercut/theme";
// theme = { id: "papercut", name: 'Papercut', components: { Button, LightButton, Panel, Input, Alert, Dropdown, Switch, Tooltip, ThemeBackground } }
```

## 组件集（Theme Component Set）

纸刻风组件，与主题同语言（无圆角、上/左 1.5px 墨线描边、后层墨线纸片错位）：

| 组件 | 说明 |
|---|---|
| `Button` | 主操作按钮（variant: primary / success / warning / error / info / neutral） |
| `LightButton` | 轻量按钮（active 选中态、禁用淡出） |
| `Panel` | 便利贴面板（胶带、tilt、layered） |
| `Input` | 输入框（底部书写线 + 主色聚焦环） |
| `Alert` | 顶部提示条（info / success / warning / error） |
| `Dropdown` | 下拉选择（宽度预设 content / sm / md / lg，选项可禁用） |
| `Switch` | 纸刻开关 |
| `Tooltip` | 纸刻提示标签（四方位） |
| `ThemeBackground` | 方格速写本背景 |

## 配色

**浅色主题 `papercut`**（暖白基底 + 方块角色色板，经 saturateColor 提饱和后）：

| token | 色值 | 参考 |
|---|---|---|
| `base-100 / 200 / 300` | `#fffaf8` `#f6efec` `#e9dfda` | 暖白浅色表面 |
| `base-content` | `#443a4d` | 暖灰紫正文 |
| `primary` | `#ff8da0` | Rose（Teriri / Luna） |
| `secondary` | `#87ecff` | Cyan（WonderlandTrek） |
| `accent` | `#9fc9ff` | Periwinkle（LovesReply） |
| `neutral` | `#a89fb0` | 暖灰紫中性 |
| `info / success / warning / error` | `#0ea5e9` `#16a34a` `#d97706` `#e11d48` | 状态色 |
| `papercut-ink` | `#2f2229` | 纸刻墨线（深墨） |

**深色主题 `papercut-dark`**（暖调暗紫灰表面，同色相品牌色，状态色提亮一档保暗底可读）：

| token | 色值 |
|---|---|
| `base-100 / 200 / 300` | `#1c151a` `#241b21` `#2f2430` |
| `base-content` | `#f2e9ee` |
| `primary / secondary / accent` | `#ff8da0` `#87ecff` `#9fc9ff`（色相不变） |
| `neutral` | `#6b6270` |
| `info / success / warning / error` | `#38bdf8` `#22c55e` `#f59e0b` `#f43f5e` |
| `papercut-ink` | `#e9dce4`（浅奶油） |

## 开发

```bash
pnpm install
pnpm build      # tsc 构建 → dist/（dist 随仓库提交，供 Git dependency 使用）
pnpm typecheck
```

## 目录结构

```text
salta-theme-papercut/
├── src/
│   ├── components/   # 纸刻风组件集（Button/LightButton/Panel/Input/Alert/Dropdown/Switch/Tooltip/ThemeBackground）
│   ├── index.css     # daisyUI/theme 主题 token（papercut / papercut-dark）
│   ├── tokens.ts     # JS 侧配色 token
│   └── theme.ts      # 主题统一出口 { id, name, components }
└── tsconfig(.build).json
```
