import type { SelectHTMLAttributes } from 'react';
export interface DropdownOption {
    value: string;
    label: string;
    /** 单个选项禁用（暂不开放等场景） */
    disabled?: boolean;
}
export type DropdownWidth = 'content' | 'sm' | 'md' | 'lg';
export interface DropdownProps extends Omit<SelectHTMLAttributes<HTMLSelectElement>, 'onChange' | 'value'> {
    options: DropdownOption[];
    value: string;
    onChange: (value: string) => void;
    /**
     * 宽度预设：content（默认，随内容自适应）/ sm / md / lg。
     * 预设是最小宽度——内容未达预设按预设宽，内容超过则随内容撑开。
     */
    width?: DropdownWidth;
}
/**
 * Dropdown —— 纸刻风下拉选择（基于 daisyUI `select`）：
 * 无圆角纸面 + 底部 1.5px 纸刻墨线 + 主色聚焦环，与 Input/Button 同语言。
 * 宽度随内容自适应，可传 width 预设最小宽。
 */
export declare function Dropdown({ options, value, onChange, className, width, ...rest }: DropdownProps): import("react").JSX.Element;
//# sourceMappingURL=Dropdown.d.ts.map