import { describe, it, expect } from 'vitest';
import { render, screen, waitFor, within } from '@testing-library/react';
import { Navbar } from '../navbar';
import userEvent from '@testing-library/user-event';

const title = 'AI Code Compare';
const logo = <span>LOGO</span>;
const links = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
];

describe('Navbar', () => {
  it('renders the logo', () => {
    render(<Navbar logo={logo} title={title} links={links} />);
    expect(screen.getByText('LOGO')).toBeInTheDocument();
  });

  it('renders the brand text', () => {
    render(<Navbar logo={logo} title={title} links={links} />);
    expect(screen.getByText(title)).toBeInTheDocument();
  });

  it('renders all navigation links (desktop)', () => {
    render(<Navbar logo={logo} title={title} links={links} />);
    links.forEach(({ label }) => {
      expect(screen.getByRole('link', { name: label })).toBeInTheDocument();
    });
  });

  it('opens and closes the mobile menu', async () => {
    render(<Navbar logo={logo} title={title} links={links} />);
    const menuButton = screen.getByRole('button', { name: /menu/i });
    expect(menuButton).toBeInTheDocument();

    await userEvent.click(menuButton);

    const mobileNav = await screen.findByTestId('mobile-nav');
    links.forEach(({ label }) => {
      expect(within(mobileNav).getByRole('link', { name: label })).toBeInTheDocument();
    });

    await userEvent.click(within(mobileNav).getByRole('link', { name: links[0].label }));
    await waitFor(() => {
      expect(screen.queryByTestId('mobile-nav')).not.toBeInTheDocument();
    });
  });
});
