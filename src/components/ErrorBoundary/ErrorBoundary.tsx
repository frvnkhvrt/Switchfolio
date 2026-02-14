'use client'

import React, { Component, ErrorInfo, ReactNode } from 'react'

interface Props {
  children: ReactNode
  fallback?: ReactNode
  onError?: (error: Error, errorInfo: ErrorInfo) => void
}

interface State {
  hasError: boolean
  error?: Error
  errorInfo?: ErrorInfo
}

export class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error }
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('ErrorBoundary caught an error:', error, errorInfo)

    this.setState({
      error,
      errorInfo,
    })

    // Call optional error handler
    this.props.onError?.(error, errorInfo)
  }

  render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback
      }

      return (
        <div className="min-h-screen flex items-center justify-center bg-surface dark:bg-surface-dark text-ink dark:text-ink-dark p-4">
          <div className="max-w-md w-full bg-surface-alt dark:bg-surface-alt-dark border-4 border-black dark:border-white shadow-neo p-6">
            <div className="flex items-center mb-4">
              <div className="flex-shrink-0">
                <svg
                  className="h-8 w-8 text-brand dark:text-accent"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z"
                  />
                </svg>
              </div>
              <div className="ml-3">
                <h3 className="text-sm font-semibold text-ink dark:text-ink-dark">
                  Something went wrong
                </h3>
              </div>
            </div>
            <div className="mb-4">
              <p className="text-sm text-ink-secondary dark:text-ink-secondary-dark">
                We encountered an unexpected error. Please try refreshing the page.
              </p>
            </div>
            <div className="flex justify-end">
              <button
                onClick={() => window.location.reload()}
                className="bg-brand hover:opacity-90 text-white dark:bg-accent dark:text-black dark:hover:opacity-90 px-4 py-2 border-2 border-black dark:border-white font-semibold text-sm transition-opacity duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand dark:focus-visible:outline-accent"
              >
                Refresh Page
              </button>
            </div>
            {process.env.NODE_ENV === 'development' && this.state.error && (
              <details className="mt-4">
                <summary className="text-sm text-ink-secondary dark:text-ink-secondary-dark cursor-pointer">
                  Error Details (Development)
                </summary>
                <pre className="mt-2 text-xs text-ink dark:text-ink-dark bg-surface dark:bg-surface-dark border-2 border-black dark:border-white p-2 overflow-auto">
                  {this.state.error.toString()}
                  {this.state.errorInfo?.componentStack}
                </pre>
              </details>
            )}
          </div>
        </div>
      )
    }

    return this.props.children
  }
}
