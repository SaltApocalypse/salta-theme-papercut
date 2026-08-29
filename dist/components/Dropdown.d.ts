import type { SelectHTMLAttributes } from 'react';
export interface DropdownOption {
    value: string;
    label: string;
}
export interface DropdownProps extends Omit<SelectHTMLAttributes<HTMLSelectElement>, 'onChange' | 'value'> {
    options: DropdownOption[];
    value: string;
    onChange: (value: string) => void;
}
/**
 * Dropdown —— 纸刻风下拉选择（基于 daisyUI `select`）：
 * 浅色纸面 + 底部 1.5px 深色书写线 + 主色聚焦环，与 Input/Button 同语言。
 */
export declare function Dropdown({ options, value, onChange, className, ...rest }: DropdownProps): import("react").JSX.Element;
//# sourceMappingURL=Dropdown.d.ts.map