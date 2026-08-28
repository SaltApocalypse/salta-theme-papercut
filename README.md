# @salta/theme-teririblocks

TeririBlocks 浅色主题 / Visual Design System（基于 **Tailwind CSS v4** + **daisyUI 5**）。

> 定位：让一个普通的 Tailwind + daisyUI 项目拥有特日日（Teriri）风格的浅色视觉语言。目前为**主题先行**阶段：提供视觉主题（配色 / token），组件集（Theme Component Set）后续按需补齐。

## 安装

通过 GitHub Repository 作为 Git dependency 使用（无需发布 npm）：

```json
{
  "dependencies": {
    "@salta/theme-teririblocks": "github:SaltApocalypse/salta-theme-teririblocks"
  }
}
```

## 使用

### 1. 引入主题（CSS）

```css
@import "tailwindcss";
@plugin "daisyui";
@import "@salta/theme-teririblocks";
```

### 2. JS/SVG 侧配色 token

```ts
import { theme } from "@salta/theme-teririblocks/tokens";
```

### 3. 主题统一出口（应用层主题注册/切换）

```ts
import { theme } from "@salta/theme-teririblocks/theme";
// theme = { id: 'teririblocks', name: 'TeririBlocks', components: {} }
```

> `components` 将在后续提交中补齐（Button / LightButton / Dropdown / Input / Panel / Slider / Sidebar / Toggle / Tooltip / ThemeBackground）。

## 配色

浅色暖白基底 + 方块角色色板（经 saturateColor 提饱和后）：

| token | 色值 | 参考 |
|---|---|---|
| `base-100 / 200 / 300` | `#fffaf8` `#f6efec` `#e9dfda` | 暖白浅色表面 |
| `base-content` | `#443a4d` | 暖灰紫正文 |
| `primary` | `#ff8da0` | Rose（Teriri / Luna） |
| `secondary` | `#87ecff` | Cyan（WonderlandTrek） |
| `accent` | `#9fc9ff` | Periwinkle（LovesReply） |
| `neutral` | `#a89fb0` | 暖灰紫中性 |
| `info / success / warning / error` | `#0ea5e9` `#16a34a` `#d97706` `#e11d48` | 状态色 |

## 开发

```bash
pnpm install
pnpm build      # tsc 构建 → dist/（dist 随仓库提交，供 Git dependency 使用）
pnpm typecheck
```

## 目录结构

```text
salta-theme-teririblocks/
├── src/
│   ├── index.css   # daisyUI/theme 主题 token + @theme 扩展
│   ├── tokens.ts   # JS 侧配色 token
│   └── theme.ts    # 主题统一出口 { id, name, components }
└── tsconfig(.build).json
```
