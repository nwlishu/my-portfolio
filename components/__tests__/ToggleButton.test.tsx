import { render, screen, fireEvent } from '@testing-library/react'
import ToggleButton from '../ToggleButton'

describe('ToggleButton Component', () => {
  const mockSetOpen = jest.fn()

  beforeEach(() => {
    mockSetOpen.mockClear()
  })

  it('renders the toggle button', () => {
    render(<ToggleButton setOpen={mockSetOpen} />)

    const button = screen.getByRole('button', { name: 'Toggle navigation menu' })
    expect(button).toBeInTheDocument()
  })

  it('has correct aria-label', () => {
    render(<ToggleButton setOpen={mockSetOpen} />)

    const button = screen.getByRole('button')
    expect(button).toHaveAttribute('aria-label', 'Toggle navigation menu')
  })

  it('has aria-expanded attribute', () => {
    render(<ToggleButton setOpen={mockSetOpen} />)

    const button = screen.getByRole('button')
    expect(button).toHaveAttribute('aria-expanded')
  })

  it('calls setOpen when button is clicked', () => {
    render(<ToggleButton setOpen={mockSetOpen} />)

    const button = screen.getByRole('button')
    fireEvent.click(button)

    expect(mockSetOpen).toHaveBeenCalledTimes(1)
    expect(mockSetOpen).toHaveBeenCalledWith(expect.any(Function))
  })

  it('toggles state correctly when clicked multiple times', () => {
    render(<ToggleButton setOpen={mockSetOpen} />)

    const button = screen.getByRole('button')

    // Click once
    fireEvent.click(button)
    expect(mockSetOpen).toHaveBeenCalledTimes(1)

    // Click again
    fireEvent.click(button)
    expect(mockSetOpen).toHaveBeenCalledTimes(2)

    // Click third time
    fireEvent.click(button)
    expect(mockSetOpen).toHaveBeenCalledTimes(3)
  })

  it('renders SVG hamburger icon', () => {
    const { container } = render(<ToggleButton setOpen={mockSetOpen} />)

    const svg = container.querySelector('svg.svg-hambur')
    expect(svg).toBeInTheDocument()
    expect(svg).toHaveAttribute('width', '23')
    expect(svg).toHaveAttribute('height', '23')
  })

  it('has correct CSS class', () => {
    render(<ToggleButton setOpen={mockSetOpen} />)

    const button = screen.getByRole('button')
    expect(button).toHaveClass('button-sidebar')
  })

  it('renders three path elements in SVG', () => {
    const { container } = render(<ToggleButton setOpen={mockSetOpen} />)

    const paths = container.querySelectorAll('path')
    expect(paths).toHaveLength(3)
  })

  it('passes correct props to setOpen callback', () => {
    let capturedCallback: any

    const testSetOpen = jest.fn((callback) => {
      capturedCallback = callback
    })

    render(<ToggleButton setOpen={testSetOpen} />)

    const button = screen.getByRole('button')
    fireEvent.click(button)

    // Test that the callback toggles the value
    expect(capturedCallback(false)).toBe(true)
    expect(capturedCallback(true)).toBe(false)
  })

  it('button is keyboard accessible', () => {
    render(<ToggleButton setOpen={mockSetOpen} />)

    const button = screen.getByRole('button')

    // Simulate Enter key press
    fireEvent.keyDown(button, { key: 'Enter', code: 'Enter' })

    // Button should be focusable
    button.focus()
    expect(document.activeElement).toBe(button)
  })
})
