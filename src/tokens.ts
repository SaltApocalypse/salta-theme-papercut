/**
 * teririblocks 主题的配色 token（与 src/index.css 保持一致）
 *
 * 命名与 daisyui 主题编辑器的配色范围一致，供无法使用 Tailwind 工具类的场景引用：
 * SVG 描边/填充、动画、内联样式等。修改配色时请同时同步主题 CSS 与这里。
 */
export const theme = {
  colors: {
    /* 基础表面 */
    base100: "#fffaf8",
    base200: "#f6efec",
    base300: "#e9dfda",
    baseContent: "#443a4d",
    /* 主色：Rose（Teriri / Luna） */
    primary: "#ff8da0",
    primaryContent: "#4a1020",
    /* 副色：Cyan（WonderlandTrek） */
    secondary: "#87ecff",
    secondaryContent: "#043a4a",
    /* 强调：Periwinkle（LovesReply） */
    accent: "#9fc9ff",
    accentContent: "#152a54",
    /* 中性 */
    neutral: "#a89fb0",
    neutralContent: "#2a2431",
    /* 状态色 */
    info: "#0ea5e9",
    infoContent: "#082f49",
    success: "#16a34a",
    successContent: "#052e16",
    warning: "#d97706",
    warningContent: "#431407",
    error: "#e11d48",
    errorContent: "#4c0519",
  },
} as const;

export type ThemeColorName = keyof typeof theme.colors;
