'use client';

import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';
import { Button } from '@/components/ui/button';
import { useIsMounted } from 'usehooks-ts';

export const DarkModeToggle = () => {
  const { resolvedTheme, setTheme } = useTheme();
  const isMounted = useIsMounted();

  if (!isMounted) return null;

  const isDark = resolvedTheme === 'dark';
  const toggleTheme = () => {
    setTheme(isDark ? 'light' : 'dark');
  };

  return (
    <Button variant="ghost" size="icon" onClick={toggleTheme} aria-label="Toggle dark mode">
      {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
};
