import type { SelectHTMLAttributes } from 'react'

export interface DropdownOption {
  value: string
  label: string
  /** 单个选项禁用（暂不开放等场景） */
  disabled?: boolean
}

export type DropdownWidth = 'content' | 'sm' | 'md' | 'lg'

export interface DropdownProps
  extends Omit<SelectHTMLAttributes<HTMLSelectElement>, 'onChange' | 'value'> {
  options: DropdownOption[]
  value: string
  onChange: (value: string) => void
  /**
   * 宽度预设：content（默认，随内容自适应）/ sm / md / lg。
   * 预设是最小宽度——内容未达预设按预设宽，内容超过则随内容撑开。
   */
  width?: DropdownWidth
}

const WIDTH_CLASS: Record<DropdownWidth, string> = {
  content: '',
  sm: 'min-w-24 sm:min-w-28',
  md: 'min-w-28 sm:min-w-36',
  lg: 'min-w-32 sm:min-w-48',
}

/**
 * Dropdown —— 纸刻风下拉选择（基于 daisyUI `select`）：
 * 无圆角纸面 + 底部 1.5px 纸刻墨线 + 主色聚焦环，与 Input/Button 同语言。
 * 宽度随内容自适应，可传 width 预设最小宽。
 */
export function Dropdown({
  options,
  value,
  onChange,
  className,
  width = 'content',
  ...rest
}: DropdownProps) {
  return (
    <select
      className={`select rounded-none border-0 border-b-[1.5px] border-[color:var(--color-papercut-ink)] bg-base-100 text-sm text-base-content focus:outline-none focus:ring-2 focus:ring-primary/60 ${WIDTH_CLASS[width]} ${className ?? ''}`}
      value={value}
      onChange={(event) => onChange(event.target.value)}
      {...rest}
    >
      {options.map((option) => (
        <option key={option.value} value={option.value} disabled={option.disabled}>
          {option.label}
        </option>
      ))}
    </select>
  )
}
