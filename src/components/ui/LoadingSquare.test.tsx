import React from 'react'
import { render } from '@testing-library/react'
import LoadingSquare from './LoadingSquare'
import '@testing-library/jest-dom'

describe('LoadingSquare', () => {
  it('renders correctly with default props', () => {
    const { container } = render(<LoadingSquare />)
    const square = container.firstChild
    expect(square).toHaveClass('w-8 h-8 border-[3px]')
  })

  it('renders with custom size', () => {
    const { container } = render(<LoadingSquare size="lg" />)
    const square = container.firstChild
    expect(square).toHaveClass('w-12 h-12 border-4')
  })

  it('applies custom color', () => {
    const { container } = render(<LoadingSquare color="red" />)
    const square = container.firstChild as HTMLElement
    expect(square.style.borderColor).toBe('red')
  })

  it('contains internal fix elements for the "missing line" bug', () => {
    const { container } = render(<LoadingSquare />)
    const internalElements = container.querySelectorAll('.absolute')
    // Should have 2 internal divs (one for opacity, one for the fix)
    expect(internalElements.length).toBe(2)
  })
})
