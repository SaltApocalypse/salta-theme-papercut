import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useRef, useState } from 'react';
const VARIANT_BG = {
    info: 'bg-primary/15',
    success: 'bg-success/15',
    warning: 'bg-warning/15',
    error: 'bg-error/15',
};
const VARIANT_BAR = {
    info: 'bg-primary',
    success: 'bg-success',
    warning: 'bg-warning',
    error: 'bg-error',
};
/**
 * Alert —— 顶部 Toast 提示条（纸刻风，基于 daisyUI `alert`）：
 * 固定于视口顶部居中，从上方滑入 + 淡入，停留 duration 后淡化消失（触发 onClose）。
 * `pointer-events-none` 不拦截交互、无遮罩，不会使屏幕变暗/覆盖屏幕。
 */
export function Alert({ children, className, variant = 'info', duration = 2500, onClose, ...rest }) {
    const [visible, setVisible] = useState(false);
    const onCloseRef = useRef(onClose);
    useEffect(() => {
        onCloseRef.current = onClose;
    }, [onClose]);
    useEffect(() => {
        // 入场：从上方滑入 + 淡入
        const frame = requestAnimationFrame(() => setVisible(true));
        const hideTimer = window.setTimeout(() => setVisible(false), duration);
        const closeTimer = window.setTimeout(() => onCloseRef.current?.(), duration + 300);
        return () => {
            cancelAnimationFrame(frame);
            window.clearTimeout(hideTimer);
            window.clearTimeout(closeTimer);
        };
    }, [duration]);
    return (_jsx("div", { className: "pointer-events-none fixed inset-x-0 top-6 z-[100] flex justify-center px-4", children: _jsxs("div", { role: "alert", className: `alert relative overflow-hidden rounded-none border-0 border-l-[1.5px] border-t-[1.5px] border-[#2f2229] text-base-content transition-all duration-300 ${visible ? 'translate-y-0 opacity-100' : '-translate-y-4 opacity-0'} ${VARIANT_BG[variant]} ${className ?? ''}`, ...rest, children: [_jsx("span", { "aria-hidden": true, className: `pointer-events-none absolute bottom-0 left-0 top-0 w-1.5 ${VARIANT_BAR[variant]}` }), children] }) }));
}
//# sourceMappingURL=Alert.js.map