import type { HTMLAttributes, ReactNode } from 'react';
export type AlertVariant = 'info' | 'success' | 'warning' | 'error';
export interface AlertProps extends HTMLAttributes<HTMLDivElement> {
    children: ReactNode;
    variant?: AlertVariant;
    /** 显示时长（ms）后自动淡化消失，缺省 2500 */
    duration?: number;
    /** 淡出结束后回调（调用方据此卸载） */
    onClose?: () => void;
}
/**
 * Alert —— 顶部 Toast 提示条（纸刻风，基于 daisyUI `alert`）：
 * 固定于视口顶部居中，从上方滑入 + 淡入，停留 duration 后淡化消失（触发 onClose）。
 * `pointer-events-none` 不拦截交互、无遮罩，不会使屏幕变暗/覆盖屏幕。
 */
export declare function Alert({ children, className, variant, duration, onClose, ...rest }: AlertProps): import("react").JSX.Element;
//# sourceMappingURL=Alert.d.ts.map