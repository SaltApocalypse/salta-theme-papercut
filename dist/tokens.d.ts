/**
 * teriri 主题的配色 token（与 src/index.css 保持一致）
 *
 * 命名与 daisyui 主题编辑器的配色范围一致，供无法使用 Tailwind 工具类的场景引用：
 * SVG 描边/填充、动画、内联样式等。修改配色时请同时同步主题 CSS 与这里。
 */
export declare const theme: {
    readonly colors: {
        readonly base100: "#fffaf8";
        readonly base200: "#f6efec";
        readonly base300: "#e9dfda";
        readonly baseContent: "#443a4d";
        readonly primary: "#ff8da0";
        readonly primaryContent: "#4a1020";
        readonly secondary: "#87ecff";
        readonly secondaryContent: "#043a4a";
        readonly accent: "#9fc9ff";
        readonly accentContent: "#152a54";
        readonly neutral: "#a89fb0";
        readonly neutralContent: "#2a2431";
        readonly info: "#0ea5e9";
        readonly infoContent: "#082f49";
        readonly success: "#16a34a";
        readonly successContent: "#052e16";
        readonly warning: "#d97706";
        readonly warningContent: "#431407";
        readonly error: "#e11d48";
        readonly errorContent: "#4c0519";
    };
};
export type ThemeColorName = keyof typeof theme.colors;
//# sourceMappingURL=tokens.d.ts.map