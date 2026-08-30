import {
  Alert,
  Button,
  Dropdown,
  Input,
  LightButton,
  Panel,
  Switch,
  ThemeBackground,
  Tooltip,
} from './components'

/**
 * 主题包统一出口（供应用层的主题注册表使用）。
 *
 * 约定：所有 @salta/theme-xxx 都以相同结构导出 `theme` 对象：
 *   { id, name, components: { 同名基础组件集 } }
 * 应用层据此注册/切换主题 —— 切主题 = 换 components 里的组件。
 */
export const theme = {
  id: "papercut",
  name: 'Papercut',
  components: {
    Alert,
    Button,
    Dropdown,
    Input,
    LightButton,
    Panel,
    Switch,
    ThemeBackground,
    Tooltip,
  },
} as const
