import type { ReactNode } from 'react'

export type TooltipPosition = 'top' | 'bottom' | 'left' | 'right'

export interface TooltipProps {
  /** 提示内容 */
  content: ReactNode
  /** 出现方位（默认 top） */
  position?: TooltipPosition
  /** 触发元素（悬停 / 聚焦时显示提示） */
  children: ReactNode
  className?: string
}

const POSITION_CLASS: Record<TooltipPosition, string> = {
  top: 'bottom-full left-1/2 mb-2 -translate-x-1/2',
  bottom: 'left-1/2 top-full mt-2 -translate-x-1/2',
  left: 'right-full top-1/2 mr-2 -translate-y-1/2',
  right: 'left-full top-1/2 ml-2 -translate-y-1/2',
}

/**
 * Tooltip —— 纸刻风提示标签。
 *
 * 悬停 / 聚焦时在指定方位浮出一张浅色纸片：无圆角、上/左 1.5px 纸刻墨线、
 * 后层墨线纸片错位 1.5px（与 Button/Panel 同语言），文字用 base-content。
 * 随 data-theme 自动适配深浅主题（纸面 base-200 / 墨线 papercut-ink）。
 */
export function Tooltip({ content, position = 'top', children, className }: TooltipProps) {
  return (
    <span className={`group relative inline-flex ${className ?? ''}`}>
      {children}
      <span
        role="tooltip"
        className={`pointer-events-none absolute z-50 w-max max-w-60 whitespace-normal text-center opacity-0 transition-opacity duration-150 group-hover:opacity-100 group-focus-within:opacity-100 ${POSITION_CLASS[position]}`}
      >
        {/* 后层：墨线纸片（错位 1.5px，纸刻深度） */}
        <span
          aria-hidden
          className="absolute inset-0 translate-x-[1.5px] translate-y-[1.5px] bg-[var(--color-papercut-ink)]"
        />
        {/* 前层：浅色纸片（上/左 1.5px 墨线；block 铺满整块，多行时背景为实心矩形） */}
        <span className="relative block rounded-none border-0 border-l-[1.5px] border-t-[1.5px] border-[color:var(--color-papercut-ink)] bg-base-200 px-2 py-1 text-xs leading-snug text-base-content">
          {content}
        </span>
      </span>
    </span>
  )
}
