import { jsx as _jsx } from "react/jsx-runtime";
/**
 * Input —— 纸刻风输入框：
 * 浅色纸面（base-100，比面板更亮以区分字段区）+ 底部 1.5px 纸刻墨线 + 主色聚焦环。
 * 棱角（无圆角），与按钮/面板同语言。
 */
export function Input({ className, ...rest }) {
    return (_jsx("input", { className: `w-full rounded-none border-0 border-b-[1.5px] border-[color:var(--color-papercut-ink)] bg-base-100 px-2 py-1.5 text-sm text-base-content placeholder:text-base-content/40 focus:outline-none focus:ring-2 focus:ring-primary/60 ${className ?? ''}`, ...rest }));
}
//# sourceMappingURL=Input.js.map