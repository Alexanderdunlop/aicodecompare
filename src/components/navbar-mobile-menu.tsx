'use client';

import { useState, type FC } from 'react';
import Link from 'next/link';
import { Menu } from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import type { NavbarProps } from './navbar';

type NavbarMobileMenuProps = Omit<NavbarProps, 'logo'>;

export const NavbarMobileMenu: FC<NavbarMobileMenuProps> = ({ links, title }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden" aria-label="Menu">
          <Menu className="h-5 w-5" />
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-[240px] sm:w-[300px]" data-testid="mobile-nav">
        <SheetTitle
          style={{
            position: 'absolute',
            width: 1,
            height: 1,
            padding: 0,
            margin: -1,
            overflow: 'hidden',
            clip: 'rect(0,0,0,0)',
            whiteSpace: 'nowrap',
            border: 0,
          }}
        >
          {title}
        </SheetTitle>
        <div className="flex flex-col gap-4 py-4">
          <div className="flex flex-col space-y-3 mt-4">
            {links.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className="px-2 py-1 text-gray-800 dark:text-gray-100 hover:underline font-medium"
                onClick={() => setIsOpen(false)}
              >
                {label}
              </Link>
            ))}
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};
