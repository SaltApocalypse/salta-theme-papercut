import type { ButtonHTMLAttributes } from 'react';
export interface ToggleProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'onChange' | 'value' | 'type'> {
    checked: boolean;
    onChange: (checked: boolean) => void;
}
/**
 * Toggle —— 纸刻风开关：
 * 纸面轨道（上/左 1.5px 纸刻墨线）+ 方形纸片滑块（同语言，无圆角）。
 * 开 = 主色轨道 + 滑块右移；关 = 沉底纸色 + 滑块左移。随 data-theme 自动适配。
 */
export declare function Toggle({ checked, onChange, disabled, className, ...rest }: ToggleProps): import("react").JSX.Element;
//# sourceMappingURL=Toggle.d.ts.map