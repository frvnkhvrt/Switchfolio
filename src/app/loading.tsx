export default function Loading() {
  return (
    <div
      className="min-h-screen bg-surface dark:bg-surface-dark flex items-center justify-center"
      aria-live="polite"
      aria-busy="true"
      aria-label="Loading"
    >
      <div className="flex flex-col items-center gap-4">
        <div className="w-12 h-12 border-4 border-brand dark:border-accent border-t-transparent animate-spin" />
        <span className="font-terminal text-ink dark:text-ink-dark text-sm uppercase tracking-wider">
          Loading...
        </span>
      </div>
    </div>
  )
}
