interface DotClusterProps {
  rows?: number
  cols?: number
  size?: number
  gap?: number
}

export function DotCluster({ rows = 4, cols = 5, size = 9, gap = 10 }: DotClusterProps) {
  return (
    <div
      className="grid"
      style={{
        gridTemplateColumns: `repeat(${cols}, ${size}px)`,
        gridTemplateRows: `repeat(${rows}, ${size}px)`,
        gap: `${gap}px`,
      }}
    >
      {Array.from({ length: rows * cols }).map((_, i) => (
        <span
          key={i}
          className="rounded-full bg-white/[0.06]"
          style={{ width: size, height: size }}
        />
      ))}
    </div>
  )
}
