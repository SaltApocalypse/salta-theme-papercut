import type { ButtonHTMLAttributes, ReactNode } from 'react';
import type { ButtonSize } from './Button';
export interface LightButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode;
    size?: ButtonSize;
    /** 选中态高亮：前层提升为主色纸片（模式选择等场景） */
    active?: boolean;
    /** 方形（等宽高，图标按钮用） */
    square?: boolean;
}
/**
 * LightButton —— 纸刻风（flat layered cutout）轻量按钮。
 *
 * 与 Button 同语言：前层一张浅色纸片 + 后层一张错位的黑色纸片（更小错位、更安静）。
 * 仅上/左 1.5px 描边，右/下边由后层纸片构成外轮廓。
 * active 时前层提升为主色纸片（选中反馈）；hover/active 位移改变层叠关系。
 */
export declare function LightButton({ children, className, size, active, square, ...rest }: LightButtonProps): import("react").JSX.Element;
//# sourceMappingURL=LightButton.d.ts.map