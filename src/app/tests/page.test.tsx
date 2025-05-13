import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import Home from '../page';

describe('Home', () => {
  it('renders the Deploy now link', () => {
    render(<Home />);
    expect(screen.getByRole('link', { name: /deploy now/i })).toBeInTheDocument();
  });

  it('renders the Read our docs link', () => {
    render(<Home />);
    expect(screen.getByRole('link', { name: /read our docs/i })).toBeInTheDocument();
  });
});
