import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
const PADDING_CLASS = {
    none: '',
    sm: 'p-2',
    md: 'p-3',
    lg: 'p-4',
};
/**
 * Panel —— 便利贴样式内容面板（纸刻风 / 贴纸语言）。
 *
 * 前层一张浅色纸片（棱角、轻微贴歪、顶部胶带）；后层一张错位的黑色纸片，
 * 与按钮同语言——两个独立平面图形叠放，黑色层在浅色背景上建立明显区隔，
 * 避免面板与背景融为一体。
 */
export function Panel({ children, className, active = false, padding = 'md', highlight = false, tape = true, tilt = true, layered = true, fill = false, ...rest }) {
    return (_jsxs("div", { className: `${fill ? 'absolute inset-0 flex' : 'relative inline-flex'} ${tilt ? '-rotate-1' : ''}`, children: [layered && (_jsx("span", { "aria-hidden": true, className: "pointer-events-none absolute inset-0 translate-x-[3px] translate-y-[3px] rounded-none bg-[#2f2229]" })), _jsxs("div", { className: `relative ${fill ? 'flex-1' : ''} border-0 border-l-[1.5px] border-t-[1.5px] border-[#2f2229] ${PADDING_CLASS[padding]} ${highlight ? 'bg-primary/15' : 'bg-base-200'} ${active ? 'ring-1 ring-inset ring-[color:var(--color-papercut-ink)]' : ''} text-base-content ${className ?? ''}`, ...rest, children: [tape && (_jsx("span", { "aria-hidden": true, className: "pointer-events-none absolute -top-1.5 left-1/2 z-10 h-4 w-16 -translate-x-1/2 rotate-2 bg-[#fef9c3]/70" })), children] })] }));
}
//# sourceMappingURL=Panel.js.map