/**
 * 主题包统一出口（供应用层的主题注册表使用）。
 *
 * 约定：所有 @salta/theme-xxx 都以相同结构导出 `theme` 对象：
 *   { id, name, components: { 同名基础组件集 } }
 * 应用层据此注册/切换主题 —— 切主题 = 换 components 里的组件。
 *
 * 当前为「主题先行」阶段：仅提供配色与统一出口，组件集后续按需补齐。
 */
export const theme = {
    id: "teririblocks",
    name: "TeririBlocks",
    components: {},
};
//# sourceMappingURL=theme.js.map