import { render, screen } from '@testing-library/react'
import Navbar from '../navbar'

// Mock the Sidebar component
jest.mock('../sidebar', () => {
  return function MockSidebar() {
    return <div data-testid="sidebar">Sidebar</div>
  }
})

describe('Navbar Component', () => {
  it('renders navigation with correct role and aria-label', () => {
    render(<Navbar activeSection="Home" />)

    const nav = screen.getByRole('navigation', { name: 'Main navigation' })
    expect(nav).toBeInTheDocument()
  })

  it('renders all navigation links', () => {
    render(<Navbar activeSection="Home" />)

    expect(screen.getByText('Home')).toBeInTheDocument()
    expect(screen.getByText('About')).toBeInTheDocument()
    expect(screen.getByText('Projects')).toBeInTheDocument()
    expect(screen.getByText('Blog')).toBeInTheDocument()
    expect(screen.getByText('Contact')).toBeInTheDocument()
  })

  it('highlights the active section correctly', () => {
    render(<Navbar activeSection="About" />)

    const aboutLink = screen.getByText('About')
    expect(aboutLink).toHaveClass('underline')
    // About section should be rendered as a link
    expect(aboutLink.closest('a')).toBeTruthy()
  })

  it('does not highlight inactive sections', () => {
    render(<Navbar activeSection="Home" />)

    const aboutLink = screen.getByText('About')
    expect(aboutLink).not.toHaveClass('underline')
    // aria-current will be undefined when not active, not absent
    expect(aboutLink.getAttribute('aria-current')).toBeNull()
  })

  it('renders social media links with correct aria-labels', () => {
    render(<Navbar activeSection="Home" />)

    expect(screen.getByLabelText('Visit my GitHub profile')).toBeInTheDocument()
    expect(screen.getByLabelText('Visit my LinkedIn profile')).toBeInTheDocument()
    expect(screen.getByLabelText('Send me an email')).toBeInTheDocument()
    expect(screen.getByLabelText('Visit my YouTube channel')).toBeInTheDocument()
  })

  it('renders social media icons with correct alt text', () => {
    render(<Navbar activeSection="Home" />)

    expect(screen.getByAltText('GitHub logo')).toBeInTheDocument()
    expect(screen.getByAltText('LinkedIn logo')).toBeInTheDocument()
    expect(screen.getByAltText('Gmail logo')).toBeInTheDocument()
    expect(screen.getByAltText('YouTube logo')).toBeInTheDocument()
  })

  it('all external links have rel="noopener noreferrer"', () => {
    render(<Navbar activeSection="Home" />)

    const githubLink = screen.getByLabelText('Visit my GitHub profile')
    expect(githubLink).toHaveAttribute('rel', 'noopener noreferrer')

    const linkedinLink = screen.getByLabelText('Visit my LinkedIn profile')
    expect(linkedinLink).toHaveAttribute('rel', 'noopener noreferrer')

    const youtubeLink = screen.getByLabelText('Visit my YouTube channel')
    expect(youtubeLink).toHaveAttribute('rel', 'noopener noreferrer')
  })

  it('email link does not have target="_blank"', () => {
    render(<Navbar activeSection="Home" />)

    const emailLink = screen.getByLabelText('Send me an email')
    expect(emailLink).not.toHaveAttribute('target')
  })

  it('renders sidebar component', () => {
    render(<Navbar activeSection="Home" />)

    expect(screen.getByTestId('sidebar')).toBeInTheDocument()
  })

  it('hides scroll indicator when on Contact section', () => {
    const { container } = render(<Navbar activeSection="Contact" />)

    const scrollIndicator = container.querySelector('.hidden')
    expect(scrollIndicator).toBeInTheDocument()
  })

  it('shows scroll indicator when not on Contact section', () => {
    const { container } = render(<Navbar activeSection="Home" />)

    const scrollIndicator = container.querySelector('.block')
    expect(scrollIndicator).toBeInTheDocument()
  })

  it('navigation links have correct href attributes', () => {
    render(<Navbar activeSection="Home" />)

    const homeLink = screen.getByText('Home')
    expect(homeLink).toHaveAttribute('href', '#Home')

    const aboutLink = screen.getByText('About')
    expect(aboutLink).toHaveAttribute('href', '#About')

    const projectsLink = screen.getByText('Projects')
    expect(projectsLink).toHaveAttribute('href', '#Projects')

    const blogLink = screen.getByText('Blog')
    expect(blogLink).toHaveAttribute('href', '#Blog')

    const contactLink = screen.getByText('Contact')
    expect(contactLink).toHaveAttribute('href', '#Contact')
  })

  it('social media section has correct aria-label', () => {
    render(<Navbar activeSection="Home" />)

    const socialSection = screen.getByLabelText('Social media links')
    expect(socialSection).toBeInTheDocument()
    expect(socialSection).toHaveAttribute('role', 'complementary')
  })
})
