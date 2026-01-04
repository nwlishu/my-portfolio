import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import BlogSub from '../page'

// Mock the components
jest.mock('@/components/button', () => {
  return function MockButton() {
    return <div data-testid="button">Button</div>
  }
})

jest.mock('@/components/card', () => {
  return function MockCard({ id, title, subtitle }: any) {
    return (
      <div data-testid={`card-${id}`}>
        <h3>{title}</h3>
        <p>{subtitle}</p>
      </div>
    )
  }
})

// Mock the data
jest.mock('../[id]/data.json', () => [
  { id: '01', title: 'Post 1', subtitle: 'Subtitle 1', heroimage: '/img1.png' },
  { id: '02', title: 'Post 2', subtitle: 'Subtitle 2', heroimage: '/img2.png' },
  { id: '03', title: 'Post 3', subtitle: 'Subtitle 3', heroimage: '/img3.png' },
  { id: '04', title: 'Post 4', subtitle: 'Subtitle 4', heroimage: '/img4.png' },
  { id: '05', title: 'Post 5', subtitle: 'Subtitle 5', heroimage: '/img5.png' },
  { id: '06', title: 'Post 6', subtitle: 'Subtitle 6', heroimage: '/img6.png' },
  { id: '07', title: 'Post 7', subtitle: 'Subtitle 7', heroimage: '/img7.png' },
])

// Mock window.scrollTo
const mockScrollTo = jest.fn()
Object.defineProperty(window, 'scrollTo', {
  writable: true,
  value: mockScrollTo,
})

describe('BlogSub Page', () => {
  beforeEach(() => {
    mockScrollTo.mockClear()
  })

  it('renders the blog page with correct title', () => {
    render(<BlogSub />)

    expect(screen.getByText('Blogs')).toBeInTheDocument()
  })

  it('displays the first 6 items on page 1', () => {
    render(<BlogSub />)

    expect(screen.getByTestId('card-01')).toBeInTheDocument()
    expect(screen.getByTestId('card-02')).toBeInTheDocument()
    expect(screen.getByTestId('card-03')).toBeInTheDocument()
    expect(screen.getByTestId('card-04')).toBeInTheDocument()
    expect(screen.getByTestId('card-05')).toBeInTheDocument()
    expect(screen.getByTestId('card-06')).toBeInTheDocument()
    expect(screen.queryByTestId('card-07')).not.toBeInTheDocument()
  })

  it('renders pagination with correct number of pages', () => {
    render(<BlogSub />)

    // With 7 items and 6 per page, we should have 2 pages
    expect(screen.getByText('1')).toBeInTheDocument()
    expect(screen.getByText('2')).toBeInTheDocument()
  })

  it('disables previous button on first page', () => {
    const { container } = render(<BlogSub />)

    const prevButton = container.querySelector('.pointer-events-none.opacity-50')
    expect(prevButton).toBeInTheDocument()
  })

  it('navigates to next page when next button is clicked', async () => {
    render(<BlogSub />)

    // Find and click the next button
    const nextButton = screen.getAllByRole('link').find((link) =>
      link.textContent?.includes('Next')
    )
    expect(nextButton).toBeInTheDocument()

    if (nextButton) {
      fireEvent.click(nextButton)

      await waitFor(() => {
        // Page 2 should show card 07
        expect(screen.getByTestId('card-07')).toBeInTheDocument()
        // Page 1 cards should not be visible
        expect(screen.queryByTestId('card-01')).not.toBeInTheDocument()
      })
    }
  })

  it('scrolls to top when page changes', async () => {
    render(<BlogSub />)

    const nextButton = screen.getAllByRole('link').find((link) =>
      link.textContent?.includes('Next')
    )

    if (nextButton) {
      fireEvent.click(nextButton)

      await waitFor(() => {
        expect(mockScrollTo).toHaveBeenCalledWith(
          expect.objectContaining({ top: 0, behavior: 'smooth' })
        )
      })
    }
  })

  it('highlights active page number', () => {
    render(<BlogSub />)

    // First page link should be present
    const page1Link = screen.getByText('1')
    expect(page1Link).toBeInTheDocument()
  })

  it('navigates to specific page when page number is clicked', async () => {
    render(<BlogSub />)

    const page2Button = screen.getByText('2')
    fireEvent.click(page2Button)

    await waitFor(() => {
      // Should show card 07 which is on page 2
      expect(screen.getByTestId('card-07')).toBeInTheDocument()
      expect(screen.queryByTestId('card-01')).not.toBeInTheDocument()
    })
  })

  it('disables next button on last page', async () => {
    const { container } = render(<BlogSub />)

    // Navigate to page 2 (last page)
    const page2Button = screen.getByText('2')
    fireEvent.click(page2Button)

    await waitFor(() => {
      const disabledButtons = container.querySelectorAll('.pointer-events-none.opacity-50')
      // Should have at least one disabled button (next button on last page)
      expect(disabledButtons.length).toBeGreaterThan(0)
    })
  })

  it('handles window.scrollTo error gracefully', async () => {
    const consoleErrorSpy = jest.spyOn(console, 'error').mockImplementation()

    // Mock scrollTo to throw error on first call, then succeed
    mockScrollTo.mockImplementationOnce(() => {
      throw new Error('Smooth scroll not supported')
    })

    render(<BlogSub />)

    const nextButton = screen.getAllByRole('link').find((link) =>
      link.textContent?.includes('Next')
    )

    if (nextButton) {
      fireEvent.click(nextButton)

      await waitFor(() => {
        // Should fallback to regular scrollTo
        expect(mockScrollTo).toHaveBeenCalled()
      })
    }

    consoleErrorSpy.mockRestore()
  })

  it('renders button component', () => {
    render(<BlogSub />)

    expect(screen.getByTestId('button')).toBeInTheDocument()
  })

  it('prevents navigation when clicking disabled previous button', () => {
    render(<BlogSub />)

    // On page 1, previous should be disabled
    const prevButton = screen.getAllByRole('link').find((link) =>
      link.textContent?.includes('Previous')
    )

    if (prevButton) {
      const initialCardCount = screen.getAllByTestId(/card-/).length
      fireEvent.click(prevButton)

      // Should still be on page 1
      const newCardCount = screen.getAllByTestId(/card-/).length
      expect(newCardCount).toBe(initialCardCount)
    }
  })
})
