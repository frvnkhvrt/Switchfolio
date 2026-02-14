import Link from "next/link"

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-surface dark:bg-surface-dark text-ink dark:text-ink-dark p-4">
      <div className="max-w-md w-full bg-surface-alt dark:bg-surface-alt-dark border-4 border-black dark:border-white shadow-neo p-8 text-center">
        <h1 className="text-4xl font-black uppercase tracking-tighter mb-2">
          404
        </h1>
        <p className="text-ink-secondary dark:text-ink-secondary-dark mb-6">
          This page could not be found.
        </p>
        <Link
          href="/"
          className="inline-block bg-brand hover:opacity-90 text-white dark:bg-accent dark:text-black px-6 py-3 border-2 border-black dark:border-white font-semibold focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand dark:focus-visible:outline-accent"
        >
          Return home
        </Link>
      </div>
    </div>
  )
}
