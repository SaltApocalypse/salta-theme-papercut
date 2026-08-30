import { Alert, Button, Dropdown, Input, LightButton, Panel, Switch, ThemeBackground, Tooltip } from './components';
/**
 * 主题包统一出口（供应用层的主题注册表使用）。
 *
 * 约定：所有 @salta/theme-xxx 都以相同结构导出 `theme` 对象：
 *   { id, name, components: { 同名基础组件集 } }
 * 应用层据此注册/切换主题 —— 切主题 = 换 components 里的组件。
 */
export declare const theme: {
    readonly id: "papercut";
    readonly name: "Papercut";
    readonly components: {
        readonly Alert: typeof Alert;
        readonly Button: typeof Button;
        readonly Dropdown: typeof Dropdown;
        readonly Input: typeof Input;
        readonly LightButton: typeof LightButton;
        readonly Panel: typeof Panel;
        readonly Switch: typeof Switch;
        readonly ThemeBackground: typeof ThemeBackground;
        readonly Tooltip: typeof Tooltip;
    };
};
//# sourceMappingURL=theme.d.ts.map