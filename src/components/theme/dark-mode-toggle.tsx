'use client';

import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';
import { Button } from '@/components/ui/button';
import { useIsMounted } from 'usehooks-ts';

const getNextTheme = (currentTheme: string | undefined) =>
  currentTheme === 'dark' ? 'light' : 'dark';

export const DarkModeToggle = () => {
  const { resolvedTheme, setTheme } = useTheme();
  const isMounted = useIsMounted();

  if (!isMounted) return null;

  const handleToggleTheme = () => {
    const nextTheme = getNextTheme(resolvedTheme);
    setTheme(nextTheme);
  };

  const isDark = resolvedTheme === 'dark';

  return (
    <Button variant="ghost" size="icon" onClick={handleToggleTheme} aria-label="Toggle dark mode">
      {isDark ? (
        <Sun data-testid="sun-icon" className="h-5 w-5" />
      ) : (
        <Moon data-testid="moon-icon" className="h-5 w-5" />
      )}
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
};
