import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Navbar } from './navbar';

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

  it('renders all navigation links', () => {
    render(<Navbar logo={logo} title={title} links={links} />);
    links.forEach(({ label }) => {
      expect(screen.getByRole('link', { name: label })).toBeInTheDocument();
    });
  });
});
