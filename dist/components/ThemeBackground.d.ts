import type { HTMLAttributes } from 'react';
export interface ThemeBackgroundProps extends HTMLAttributes<HTMLDivElement> {
    /** 网格间距（px），默认 24 */
    gridSize?: number;
    /** 网格线强度（透明度比例，默认 0.08） */
    gridAlpha?: number;
}
/**
 * ThemeBackground —— 方格速写涂写本式淡色细网格背景（页面级背景层）。
 *
 * 背景色用主题 base-100；细网格线用主题 base-content 的低透明度叠出，
 * 随主题自动适配（浅色主题下即为浅色网格）。固定铺满视口、位于内容之后（-z-10）。
 */
export declare function ThemeBackground({ className, gridSize, gridAlpha, ...rest }: ThemeBackgroundProps): import("react").JSX.Element;
//# sourceMappingURL=ThemeBackground.d.ts.map