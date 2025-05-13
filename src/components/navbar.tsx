import Link from 'next/link';
import type { FC } from 'react';
import { NavbarMobileMenu } from './navbar-mobile-menu';
import { DarkModeToggle } from './dark-mode-toggle';

type NavbarLink = {
  href: string;
  label: string;
};

export type NavbarProps = {
  links: NavbarLink[];
  logo: React.ReactNode;
  title: string;
};

export const Navbar: FC<NavbarProps> = ({ links, logo, title }) => {
  return (
    <nav className="sticky top-0 z-50 w-full border-b border-gray-200 dark:border-gray-700 bg-white dark:bg-black backdrop-blur supports-[backdrop-filter]:bg-white/80 supports-[backdrop-filter]:dark:bg-black/80 py-4 px-6 flex items-center justify-between">
      <div className="flex items-center gap-6 flex-1 min-w-0">
        <Link
          href="/"
          className="flex items-center gap-3 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded shrink-0"
        >
          {logo}
          <span className="hidden md:inline text-xl font-semibold tracking-tight text-gray-900 dark:text-gray-100 select-none">
            {title}
          </span>
        </Link>
        {/* Desktop links */}
        <ul className="hidden md:flex gap-6">
          {links.map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                className="text-gray-800 dark:text-gray-100 hover:underline font-medium"
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="flex items-center gap-2">
        <DarkModeToggle />
        <div className="md:hidden">
          <NavbarMobileMenu title={title} links={links} />
        </div>
      </div>
    </nav>
  );
};
