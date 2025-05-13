import Link from 'next/link';
import type { FC } from 'react';
import { NavbarMobileMenu } from './navbar-mobile-menu';

type NavbarLink = {
  href: string;
  label: string;
};

export type NavbarProps = {
  links: NavbarLink[];
  logo: React.ReactNode;
  title: string;
};

export const Navbar: FC<NavbarProps> = (props) => {
  const { links, logo, title } = props;
  return (
    <nav className="sticky top-0 z-50 w-full flex items-center justify-between py-4 px-6 border-b border-gray-200 dark:border-gray-700 bg-white dark:bg-black backdrop-blur supports-[backdrop-filter]:bg-white/80 supports-[backdrop-filter]:dark:bg-black/80">
      <Link
        href="/"
        className="flex items-center gap-3 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded"
      >
        {logo}
        <span className="text-xl font-semibold tracking-tight text-gray-900 dark:text-gray-100 select-none">
          {title}
        </span>
      </Link>
      {/* Desktop menu */}
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
      <NavbarMobileMenu {...props} />
    </nav>
  );
};
