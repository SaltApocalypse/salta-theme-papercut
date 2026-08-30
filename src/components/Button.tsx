import type { ButtonHTMLAttributes, ReactNode } from 'react'

export type ButtonSize = 'xs' | 'sm' | 'md' | 'lg'

export type ButtonVariant = 'primary' | 'success' | 'warning' | 'error' | 'info' | 'neutral'

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
  size?: ButtonSize
  /** 方形（等宽高，图标按钮 / 强调按钮用） */
  square?: boolean
  /** 透明/无边框变体（btn-ghost，暂保持平面） */
  ghost?: boolean
  /** 颜色变体：primary（默认）/ success / warning / error / info / neutral */
  variant?: ButtonVariant
}

/** 变体 → 前层纸片的配色（bg + 内容色 + hover） */
const VARIANT_CLASS: Record<ButtonVariant, string> = {
  primary: 'bg-primary text-primary-content hover:bg-primary',
  success: 'bg-success text-success-content hover:bg-success',
  warning: 'bg-warning text-warning-content hover:bg-warning',
  error: 'bg-error text-error-content hover:bg-error',
  info: 'bg-info text-info-content hover:bg-info',
  neutral: 'bg-neutral text-neutral-content hover:bg-neutral',
}

const SIZE_CLASS: Record<ButtonSize, string> = {
  xs: 'btn-xs',
  sm: 'btn-sm',
  md: 'btn-md',
  lg: 'btn-lg',
}

/** 后层黑色纸片颜色（随主题的纸刻墨线令牌） */
const PAPER_BACK = 'var(--color-papercut-ink)'

/**
 * Button —— 纸刻风（flat layered cutout）主操作按钮。
 *
 * 不是 3D 按钮 / 不是 drop shadow：前层是一张主色纸片，后层是一张故意错位的
 * 黑色纸片，两个「独立的平面图形」叠放。黑色层只负责建立层级与趣味，无厚度、
 * 无 bevel、无内阴影、不模拟光源。后层微旋转（-2°）+ 错位制造「随手盖上去」感。
 *
 * 交互：hover / active 时前层纸片位移、改变层叠关系（如把上层纸片按平对齐），
 * 这只是反馈，不是默认视觉的核心。
 */
export function Button({
  children,
  className,
  size = 'md',
  square = false,
  ghost = false,
  variant = 'primary',
  ...rest
}: ButtonProps) {
  const toneClass = VARIANT_CLASS[variant]

  if (ghost) {
    return (
      <button
        type="button"
        className={`btn btn-ghost ${SIZE_CLASS[size]} ${square ? 'btn-square' : ''} ${className ?? ''}`}
        {...rest}
      >
        {children}
      </button>
    )
  }

  return (
    <span className={`relative inline-flex h-fit ${className ?? ''}`}>
      {/* 后层：黑色纸片（独立几何图形，错位 + 微旋转，无边框） */}
      <span
        aria-hidden
        className="pointer-events-none absolute inset-0 -rotate-2 translate-x-1.5 translate-y-1.5 rounded-none bg-[var(--color-papercut-ink)]"
      />
      {/* 前层：纸片（承载内容；仅上/左 1.5px 描边，右/下边由后层纸片构成外轮廓；hover/active 位移改变层叠） */}
      <button
        type="button"
        className={`btn ${square ? 'btn-square' : 'w-full'} ${SIZE_CLASS[size]} relative whitespace-nowrap rounded-none border-0 border-l-[1.5px] border-t-[1.5px] border-[color:var(--color-papercut-ink)] font-bold shadow-none transition-transform duration-150 ease-out ${toneClass} hover:translate-x-1 hover:translate-y-1 active:translate-x-1.5 active:translate-y-1.5 disabled:pointer-events-none disabled:border-neutral/50 disabled:bg-neutral/40 disabled:text-neutral/50`}
        {...rest}
      >
        {children}
      </button>
    </span>
  )
}
