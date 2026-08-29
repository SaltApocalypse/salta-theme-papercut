import type { SelectHTMLAttributes } from 'react'

export interface DropdownOption {
  value: string
  label: string
}

export interface DropdownProps
  extends Omit<SelectHTMLAttributes<HTMLSelectElement>, 'onChange' | 'value'> {
  options: DropdownOption[]
  value: string
  onChange: (value: string) => void
}

/**
 * Dropdown —— 纸刻风下拉选择（基于 daisyUI `select`）：
 * 浅色纸面 + 底部 1.5px 深色书写线 + 主色聚焦环，与 Input/Button 同语言。
 */
export function Dropdown({ options, value, onChange, className, ...rest }: DropdownProps) {
  return (
    <select
      className={`select w-full rounded-none border-0 border-b-[1.5px] border-[#2f2229] bg-base-100 text-sm text-base-content focus:outline-none focus:ring-2 focus:ring-primary/60 ${className ?? ''}`}
      value={value}
      onChange={(event) => onChange(event.target.value)}
      {...rest}
    >
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  )
}
