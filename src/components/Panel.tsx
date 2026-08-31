import type { HTMLAttributes, ReactNode } from 'react'

export interface PanelProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode
  /** 焦点/高亮态：叠加 1.5px 内嵌墨线成完整方框（与 SaltLab 窗体焦点态约定一致） */
  active?: boolean
  /** 内边距档位 */
  padding?: 'none' | 'sm' | 'md' | 'lg'
  /** 强调：纸面染主色淡底 */
  highlight?: boolean
  /** 顶部胶带（默认显示） */
  tape?: boolean
  /** 轻微贴歪（便利贴感，默认 -1°） */
  tilt?: boolean
  /** 黑色后层纸片（错位叠放，与背景区隔；默认显示） */
  layered?: boolean
  /** 占满父容器宽度（wrapper 为 flex w-full，前层 flex-1） */
  fill?: boolean
}

const PADDING_CLASS = {
  none: '',
  sm: 'p-2',
  md: 'p-3',
  lg: 'p-4',
}

/**
 * Panel —— 便利贴样式内容面板（纸刻风 / 贴纸语言）。
 *
 * 前层一张浅色纸片（棱角、轻微贴歪、顶部胶带）；后层一张错位的黑色纸片，
 * 与按钮同语言——两个独立平面图形叠放，黑色层在浅色背景上建立明显区隔，
 * 避免面板与背景融为一体。
 */
export function Panel({
  children,
  className,
  active = false,
  padding = 'md',
  highlight = false,
  tape = true,
  tilt = true,
  layered = true,
  fill = false,
  ...rest
}: PanelProps) {
  return (
    <div
      className={`${fill ? 'flex h-full w-full' : 'relative inline-flex'} ${tilt ? '-rotate-1' : ''}`}
    >
      {/* 后层：黑色纸片（错位 3px，区隔背景） */}
      {layered && (
        <span
          aria-hidden
          className="pointer-events-none absolute inset-0 translate-x-[3px] translate-y-[3px] rounded-none bg-[#2f2229]"
        />
      )}
      {/* 前层：浅色纸片（承载内容；仅上/左 1.5px 描边，右/下边由后层纸片构成外轮廓） */}
      <div
        className={`relative ${fill ? 'flex-1' : ''} border-0 border-l-[1.5px] border-t-[1.5px] border-[#2f2229] ${PADDING_CLASS[padding]} ${
          highlight ? 'bg-primary/15' : 'bg-base-200'
        } ${active ? 'ring-1 ring-inset ring-[color:var(--color-papercut-ink)]' : ''} text-base-content ${className ?? ''}`}
        {...rest}
      >
        {/* 顶部胶带 */}
        {tape && (
          <span
            aria-hidden
            className="pointer-events-none absolute -top-1.5 left-1/2 z-10 h-4 w-16 -translate-x-1/2 rotate-2 bg-[#fef9c3]/70"
          />
        )}
        {children}
      </div>
    </div>
  )
}
