import type { ReactNode } from 'react';
export type TooltipPosition = 'top' | 'bottom' | 'left' | 'right';
export interface TooltipProps {
    /** 提示内容 */
    content: ReactNode;
    /** 出现方位（默认 top） */
    position?: TooltipPosition;
    /** 触发元素（悬停 / 聚焦时显示提示） */
    children: ReactNode;
    className?: string;
}
/**
 * Tooltip —— 纸刻风提示标签。
 *
 * 悬停 / 聚焦时在指定方位浮出一张浅色纸片：无圆角、上/左 1.5px 纸刻墨线、
 * 后层墨线纸片错位 1.5px（与 Button/Panel 同语言），文字用 base-content。
 * 随 data-theme 自动适配深浅主题（纸面 base-200 / 墨线 papercut-ink）。
 */
export declare function Tooltip({ content, position, children, className }: TooltipProps): import("react").JSX.Element;
//# sourceMappingURL=Tooltip.d.ts.map