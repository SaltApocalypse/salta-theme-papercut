import type { ButtonHTMLAttributes, ReactNode } from 'react'
import type { ButtonSize } from './Button'

export interface LightButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
  size?: ButtonSize
  /** 选中态高亮：前层提升为主色纸片（模式选择等场景） */
  active?: boolean
  /** 方形（等宽高，图标按钮用） */
  square?: boolean
}

const SIZE_CLASS: Record<ButtonSize, string> = {
  xs: 'btn-xs',
  sm: 'btn-sm',
  md: 'btn-md',
  lg: 'btn-lg',
}

/**
 * LightButton —— 纸刻风（flat layered cutout）轻量按钮。
 *
 * 与 Button 同语言：前层一张浅色纸片 + 后层一张错位的黑色纸片（更小错位、更安静）。
 * 仅上/左 1.5px 描边，右/下边由后层纸片构成外轮廓。
 * active 时前层提升为主色纸片（选中反馈）；hover/active 位移改变层叠关系。
 */
export function LightButton({
  children,
  className,
  size = 'md',
  active = false,
  square = false,
  ...rest
}: LightButtonProps) {
  const frontTone = active ? 'bg-primary text-primary-content' : 'bg-base-200 text-base-content'

  return (
    <span className={`relative inline-flex ${className ?? ''}`}>
      {/* 后层：黑色纸片（独立几何图形，小错位 + 微旋转） */}
      <span
        aria-hidden
        className="pointer-events-none absolute inset-0 -rotate-1 translate-x-1 translate-y-1 rounded-none bg-[#2f2229]"
      />
      {/* 前层：浅色纸片（承载内容；hover/active 位移改变层叠） */}
      <button
        type="button"
        className={`btn ${square ? 'btn-square' : 'w-full'} ${SIZE_CLASS[size]} relative rounded-none border-0 border-l-[1.5px] border-t-[1.5px] border-[#2f2229] font-semibold shadow-none transition-transform duration-150 ease-out hover:translate-x-0.5 hover:translate-y-0.5 active:translate-x-1 active:translate-y-1 disabled:pointer-events-none disabled:border-neutral/50 disabled:bg-neutral/40 disabled:text-neutral/50 ${frontTone}`}
        {...rest}
      >
        {children}
      </button>
    </span>
  )
}
