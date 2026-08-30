import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
const POSITION_CLASS = {
    top: 'bottom-full left-1/2 mb-2 -translate-x-1/2',
    bottom: 'left-1/2 top-full mt-2 -translate-x-1/2',
    left: 'right-full top-1/2 mr-2 -translate-y-1/2',
    right: 'left-full top-1/2 ml-2 -translate-y-1/2',
};
/**
 * Tooltip —— 纸刻风提示标签。
 *
 * 悬停 / 聚焦时在指定方位浮出一张浅色纸片：无圆角、上/左 1.5px 纸刻墨线、
 * 后层墨线纸片错位 1.5px（与 Button/Panel 同语言），文字用 base-content。
 * 随 data-theme 自动适配深浅主题（纸面 base-200 / 墨线 papercut-ink）。
 */
export function Tooltip({ content, position = 'top', children, className }) {
    return (_jsxs("span", { className: `group relative inline-flex ${className ?? ''}`, children: [children, _jsxs("span", { role: "tooltip", className: `pointer-events-none absolute z-50 w-max max-w-60 whitespace-normal text-center opacity-0 transition-opacity duration-150 group-hover:opacity-100 group-focus-within:opacity-100 ${POSITION_CLASS[position]}`, children: [_jsx("span", { "aria-hidden": true, className: "absolute inset-0 translate-x-[1.5px] translate-y-[1.5px] bg-[var(--color-papercut-ink)]" }), _jsx("span", { className: "relative block rounded-none border-0 border-l-[1.5px] border-t-[1.5px] border-[color:var(--color-papercut-ink)] bg-base-200 px-2 py-1 text-xs leading-snug text-base-content", children: content })] })] }));
}
//# sourceMappingURL=Tooltip.js.map