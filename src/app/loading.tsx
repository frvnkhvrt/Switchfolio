import LoadingSquare from "@/components/ui/LoadingSquare"

export default function Loading() {
  return (
    <div
      className="min-h-screen bg-surface dark:bg-surface-dark flex items-center justify-center"
      aria-live="polite"
      aria-busy="true"
      aria-label="Loading"
    >
      <div className="flex flex-col items-center gap-6">
        <LoadingSquare size="lg" className="text-brand dark:text-accent" />
        <span className="font-terminal text-ink dark:text-ink-dark text-sm uppercase tracking-widest">
          SYSTEM_LOADING...
        </span>
      </div>
    </div>
  )
}
