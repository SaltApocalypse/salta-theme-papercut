import { jsx as _jsx } from "react/jsx-runtime";
/**
 * Switch —— 纸刻风开关：
 * 纸面轨道（上/左 1.5px 纸刻墨线）+ 方形纸片滑块（同语言，无圆角）。
 * 开 = 主色轨道 + 滑块右移；关 = 沉底纸色 + 滑块左移。随 data-theme 自动适配。
 */
export function Switch({ checked, onChange, disabled, className, ...rest }) {
    return (_jsx("button", { type: "button", role: "switch", "aria-checked": checked, disabled: disabled, onClick: () => onChange(!checked), className: `relative h-5 w-10 shrink-0 rounded-none border-0 border-l-[1.5px] border-t-[1.5px] border-[color:var(--color-papercut-ink)] transition-colors duration-150 ${checked ? 'bg-primary' : 'bg-base-300'} ${disabled ? 'cursor-not-allowed opacity-50 saturate-50' : 'cursor-pointer'} ${className ?? ''}`, ...rest, children: _jsx("span", { "aria-hidden": true, className: `absolute top-[2px] size-4 rounded-none border-0 border-l-[1.5px] border-t-[1.5px] border-[color:var(--color-papercut-ink)] bg-base-100 transition-all duration-150 ${checked ? 'left-[20px]' : 'left-[2px]'}` }) }));
}
//# sourceMappingURL=Switch.js.map