import { jsx as _jsx } from "react/jsx-runtime";
const WIDTH_CLASS = {
    content: '',
    sm: 'min-w-24 sm:min-w-28',
    md: 'min-w-28 sm:min-w-36',
    lg: 'min-w-32 sm:min-w-48',
};
/**
 * Dropdown —— 纸刻风下拉选择（基于 daisyUI `select`）：
 * 无圆角纸面 + 底部 1.5px 纸刻墨线 + 主色聚焦环，与 Input/Button 同语言。
 * 宽度随内容自适应，可传 width 预设最小宽。
 */
export function Dropdown({ options, value, onChange, className, width = 'content', ...rest }) {
    return (_jsx("select", { className: `select rounded-none border-0 border-b-[1.5px] border-[color:var(--color-papercut-ink)] bg-base-100 text-sm text-base-content focus:outline-none focus:ring-2 focus:ring-primary/60 ${WIDTH_CLASS[width]} ${className ?? ''}`, value: value, onChange: (event) => onChange(event.target.value), ...rest, children: options.map((option) => (_jsx("option", { value: option.value, disabled: option.disabled, children: option.label }, option.value))) }));
}
//# sourceMappingURL=Dropdown.js.map