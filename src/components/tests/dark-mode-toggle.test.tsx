import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { DarkModeToggle } from '../dark-mode-toggle';

vi.mock('next-themes', () => ({
  useTheme: () => ({
    resolvedTheme: mockResolvedTheme,
    setTheme: mockSetTheme,
  }),
}));

vi.mock('usehooks-ts', () => ({
  useIsMounted: () => true,
}));

let mockResolvedTheme = 'light';
const mockSetTheme = vi.fn();

describe('DarkModeToggle', () => {
  beforeEach(() => {
    mockSetTheme.mockClear();
  });

  it('should render the button and moon icon when theme is light', () => {
    mockResolvedTheme = 'light';
    render(<DarkModeToggle />);
    expect(screen.getByRole('button', { name: /toggle dark mode/i })).toBeInTheDocument();
    expect(screen.getByTestId('moon-icon')).toBeInTheDocument();
  });

  it('should render the button and sun icon when theme is dark', () => {
    mockResolvedTheme = 'dark';
    render(<DarkModeToggle />);
    expect(screen.getByRole('button', { name: /toggle dark mode/i })).toBeInTheDocument();
    expect(screen.getByTestId('sun-icon')).toBeInTheDocument();
  });

  it('should toggle theme from light to dark', async () => {
    mockResolvedTheme = 'light';
    render(<DarkModeToggle />);
    await userEvent.click(screen.getByRole('button', { name: /toggle dark mode/i }));
    expect(mockSetTheme).toHaveBeenCalledWith('dark');
  });

  it('should toggle theme from dark to light', async () => {
    mockResolvedTheme = 'dark';
    render(<DarkModeToggle />);
    await userEvent.click(screen.getByRole('button', { name: /toggle dark mode/i }));
    expect(mockSetTheme).toHaveBeenCalledWith('light');
  });
});
