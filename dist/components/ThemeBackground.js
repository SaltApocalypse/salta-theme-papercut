import { jsx as _jsx } from "react/jsx-runtime";
/**
 * ThemeBackground —— 方格速写涂写本式淡色细网格背景（页面级背景层）。
 *
 * 背景色用主题 base-100；细网格线用主题 base-content 的低透明度叠出，
 * 随主题自动适配（浅色主题下即为浅色网格）。固定铺满视口、位于内容之后（-z-10）。
 */
export function ThemeBackground({ className, gridSize = 24, gridAlpha = 0.08, ...rest }) {
    const line = `color-mix(in srgb, var(--color-base-content) ${Math.round(gridAlpha * 100)}%, transparent)`;
    return (_jsx("div", { "aria-hidden": true, className: `fixed inset-0 -z-10 ${className ?? ''}`, style: {
            backgroundColor: 'var(--color-base-100)',
            backgroundImage: `
          linear-gradient(to right, ${line} 1px, transparent 1px),
          linear-gradient(to bottom, ${line} 1px, transparent 1px)
        `,
            backgroundSize: `${gridSize}px ${gridSize}px`,
        }, ...rest }));
}
//# sourceMappingURL=ThemeBackground.js.map