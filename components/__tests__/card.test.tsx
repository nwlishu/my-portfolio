import { render, screen } from '@testing-library/react'
import Card from '../card'

describe('Card Component', () => {
  const mockProps = {
    id: '01',
    title: 'Test Blog Post',
    subtitle: 'This is a test subtitle',
    image: '/test-image.png',
  }

  it('renders card with all props correctly', () => {
    render(<Card {...mockProps} />)

    // Check if title is rendered
    expect(screen.getByText('Test Blog Post')).toBeInTheDocument()

    // Check if subtitle is rendered
    expect(screen.getByText('This is a test subtitle')).toBeInTheDocument()

    // Check if image is rendered with correct alt text
    const image = screen.getByAltText('Test Blog Post - blog post cover image')
    expect(image).toBeInTheDocument()
    expect(image).toHaveAttribute('src', '/test-image.png')

    // Check if "More" button is rendered
    expect(screen.getByText('More')).toBeInTheDocument()

    // Check if link is correct
    const link = screen.getByRole('link')
    expect(link).toHaveAttribute('href', '/blog/01')
  })

  it('renders button with correct aria-label', () => {
    render(<Card {...mockProps} />)

    const button = screen.getByRole('button', { name: 'Read more about Test Blog Post' })
    expect(button).toBeInTheDocument()
  })

  it('returns null when id is missing', () => {
    const consoleErrorSpy = jest.spyOn(console, 'error').mockImplementation()

    const { container } = render(<Card {...mockProps} id="" />)

    expect(container.firstChild).toBeNull()
    expect(consoleErrorSpy).toHaveBeenCalledWith(
      'Card component missing required props:',
      expect.objectContaining({ id: '' })
    )

    consoleErrorSpy.mockRestore()
  })

  it('returns null when title is missing', () => {
    const consoleErrorSpy = jest.spyOn(console, 'error').mockImplementation()

    const { container } = render(<Card {...mockProps} title="" />)

    expect(container.firstChild).toBeNull()
    expect(consoleErrorSpy).toHaveBeenCalled()

    consoleErrorSpy.mockRestore()
  })

  it('returns null when image is missing', () => {
    const consoleErrorSpy = jest.spyOn(console, 'error').mockImplementation()

    const { container } = render(<Card {...mockProps} image="" />)

    expect(container.firstChild).toBeNull()
    expect(consoleErrorSpy).toHaveBeenCalled()

    consoleErrorSpy.mockRestore()
  })

  it('renders with subtitle when provided', () => {
    render(<Card {...mockProps} subtitle="Custom subtitle" />)

    expect(screen.getByText('Custom subtitle')).toBeInTheDocument()
  })

  it('has correct CSS classes for styling', () => {
    const { container } = render(<Card {...mockProps} />)

    const cardDiv = container.querySelector('.bg-\\[\\#F5F5F7\\]')
    expect(cardDiv).toBeInTheDocument()
    expect(cardDiv).toHaveClass('rounded-2xl', 'p-4', 'flex', 'flex-col')
  })
})
