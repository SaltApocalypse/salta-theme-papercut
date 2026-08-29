import { jsx as _jsx } from "react/jsx-runtime";
/**
 * Dropdown —— 纸刻风下拉选择（基于 daisyUI `select`）：
 * 浅色纸面 + 底部 1.5px 深色书写线 + 主色聚焦环，与 Input/Button 同语言。
 */
export function Dropdown({ options, value, onChange, className, ...rest }) {
    return (_jsx("select", { className: `select w-full rounded-none border-0 border-b-[1.5px] border-[#2f2229] bg-base-100 text-sm text-base-content focus:outline-none focus:ring-2 focus:ring-primary/60 ${className ?? ''}`, value: value, onChange: (event) => onChange(event.target.value), ...rest, children: options.map((option) => (_jsx("option", { value: option.value, children: option.label }, option.value))) }));
}
//# sourceMappingURL=Dropdown.js.map