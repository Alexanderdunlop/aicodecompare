import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import Home from '../page';

describe('Home', () => {
  it('renders the DataTable component', () => {
    render(<Home />);
    expect(screen.getByRole('table')).toBeInTheDocument();
  });
});
