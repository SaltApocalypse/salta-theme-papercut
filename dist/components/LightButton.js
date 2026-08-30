import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
const SIZE_CLASS = {
    xs: 'btn-xs',
    sm: 'btn-sm',
    md: 'btn-md',
    lg: 'btn-lg',
};
/**
 * LightButton —— 纸刻风（flat layered cutout）轻量按钮。
 *
 * 与 Button 同语言：前层一张浅色纸片 + 后层一张错位的黑色纸片（更小错位、更安静）。
 * 仅上/左 1.5px 描边，右/下边由后层纸片构成外轮廓。
 * active 时前层提升为主色纸片（选中反馈）；hover/active 位移改变层叠关系。
 */
export function LightButton({ children, className, size = 'md', active = false, square = false, disabled = false, ...rest }) {
    const frontTone = active ? 'bg-primary text-primary-content' : 'bg-base-200 text-base-content';
    return (_jsxs("span", { className: `relative inline-flex h-fit ${disabled ? 'opacity-50 saturate-50' : ''} ${className ?? ''}`, children: [_jsx("span", { "aria-hidden": true, className: "pointer-events-none absolute inset-0 -rotate-1 translate-x-1 translate-y-1 rounded-none bg-[var(--color-papercut-ink)]" }), _jsx("button", { type: "button", disabled: disabled, className: `btn ${square ? 'btn-square' : 'w-full'} ${SIZE_CLASS[size]} relative whitespace-nowrap rounded-none border-0 border-l-[1.5px] border-t-[1.5px] border-[color:var(--color-papercut-ink)] font-semibold shadow-none transition-transform duration-150 ease-out hover:translate-x-0.5 hover:translate-y-0.5 active:translate-x-1 active:translate-y-1 disabled:cursor-not-allowed disabled:pointer-events-none ${disabled ? 'bg-base-300 text-base-content/40' : frontTone}`, ...rest, children: children })] }));
}
//# sourceMappingURL=LightButton.js.map