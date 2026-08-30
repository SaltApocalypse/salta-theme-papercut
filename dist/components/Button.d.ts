import type { ButtonHTMLAttributes, ReactNode } from 'react';
export type ButtonSize = 'xs' | 'sm' | 'md' | 'lg';
export type ButtonVariant = 'primary' | 'success' | 'warning' | 'error' | 'info' | 'neutral';
export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode;
    size?: ButtonSize;
    /** 方形（等宽高，图标按钮 / 强调按钮用） */
    square?: boolean;
    /** 透明/无边框变体（btn-ghost，暂保持平面） */
    ghost?: boolean;
    /** 颜色变体：primary（默认）/ success / warning / error / info / neutral */
    variant?: ButtonVariant;
}
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
export declare function Button({ children, className, size, square, ghost, variant, ...rest }: ButtonProps): import("react").JSX.Element;
//# sourceMappingURL=Button.d.ts.map