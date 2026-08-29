import type { HTMLAttributes, ReactNode } from 'react';
export interface PanelProps extends HTMLAttributes<HTMLDivElement> {
    children: ReactNode;
    /** 内边距档位 */
    padding?: 'none' | 'sm' | 'md' | 'lg';
    /** 强调：纸面染主色淡底 */
    highlight?: boolean;
    /** 顶部胶带（默认显示） */
    tape?: boolean;
    /** 轻微贴歪（便利贴感，默认 -1°） */
    tilt?: boolean;
    /** 黑色后层纸片（错位叠放，与背景区隔；默认显示） */
    layered?: boolean;
    /** 占满父容器宽度（wrapper 为 flex w-full，前层 flex-1） */
    fill?: boolean;
}
/**
 * Panel —— 便利贴样式内容面板（纸刻风 / 贴纸语言）。
 *
 * 前层一张浅色纸片（棱角、轻微贴歪、顶部胶带）；后层一张错位的黑色纸片，
 * 与按钮同语言——两个独立平面图形叠放，黑色层在浅色背景上建立明显区隔，
 * 避免面板与背景融为一体。
 */
export declare function Panel({ children, className, padding, highlight, tape, tilt, layered, fill, ...rest }: PanelProps): import("react").JSX.Element;
//# sourceMappingURL=Panel.d.ts.map