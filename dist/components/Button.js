import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
const SIZE_CLASS = {
    xs: 'btn-xs',
    sm: 'btn-sm',
    md: 'btn-md',
    lg: 'btn-lg',
};
/** 后层黑色纸片颜色 */
const PAPER_BACK = '#2f2229';
/**
 * Button —— 纸刻风（flat layered cutout）主操作按钮。
 *
 * 不是 3D 按钮 / 不是 drop shadow：前层是一张主色纸片，后层是一张故意错位的
 * 黑色纸片，两个「独立的平面图形」叠放。黑色层只负责建立层级与趣味，无厚度、
 * 无 bevel、无内阴影、不模拟光源。后层微旋转（-2°）+ 错位制造「随手盖上去」感。
 *
 * 交互：hover / active 时前层纸片位移、改变层叠关系（如把上层纸片按平对齐），
 * 这只是反馈，不是默认视觉的核心。
 */
export function Button({ children, className, size = 'md', square = false, ghost = false, ...rest }) {
    if (ghost) {
        return (_jsx("button", { type: "button", className: `btn btn-ghost ${SIZE_CLASS[size]} ${square ? 'btn-square' : ''} ${className ?? ''}`, ...rest, children: children }));
    }
    return (_jsxs("span", { className: `relative inline-flex ${className ?? ''}`, children: [_jsx("span", { "aria-hidden": true, className: "pointer-events-none absolute inset-0 -rotate-2 translate-x-1.5 translate-y-1.5 rounded-none bg-[#2f2229]" }), _jsx("button", { type: "button", className: `btn ${square ? 'btn-square' : 'w-full'} ${SIZE_CLASS[size]} relative rounded-none border-0 border-l-[1.5px] border-t-[1.5px] border-[#2f2229] bg-primary font-bold text-primary-content shadow-none transition-transform duration-150 ease-out hover:translate-x-1 hover:translate-y-1 hover:bg-primary active:translate-x-1.5 active:translate-y-1.5 disabled:pointer-events-none disabled:border-neutral/50 disabled:bg-neutral/40 disabled:text-neutral/50`, ...rest, children: children })] }));
}
//# sourceMappingURL=Button.js.map