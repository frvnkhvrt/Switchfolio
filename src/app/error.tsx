"use client"

import { useEffect } from "react"
import Link from "next/link"

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error("Route error:", error)
  }, [error])

  return (
    <div className="min-h-screen flex items-center justify-center bg-surface dark:bg-surface-dark text-ink dark:text-ink-dark p-4">
      <div className="max-w-md w-full bg-surface-alt dark:bg-surface-alt-dark border-4 border-black dark:border-white shadow-neo p-6 text-center">
        <h2 className="text-xl font-bold mb-2">Something went wrong</h2>
        <p className="text-sm text-ink-secondary dark:text-ink-secondary-dark mb-6">
          An error occurred. You can try again or return home.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <button
            onClick={reset}
            className="bg-brand hover:opacity-90 text-white dark:bg-accent dark:text-black px-4 py-2 border-2 border-black dark:border-white font-semibold text-sm focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand dark:focus-visible:outline-accent"
          >
            Try again
          </button>
          <Link
            href="/"
            className="bg-white dark:bg-black text-black dark:text-white hover:opacity-90 px-4 py-2 border-2 border-black dark:border-white font-semibold text-sm focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand dark:focus-visible:outline-accent"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  )
}
