import Link from 'next/link';
import type { FC } from 'react';
import { NavbarMobileMenu } from './navbar-mobile-menu';
import { DarkModeToggle } from './theme/dark-mode-toggle';
import { GitHubLogo } from './icons/github-logo';
import { Button } from './ui/button';

type NavbarLink = {
  href: string;
  label: string;
};

export type NavbarProps = {
  links: NavbarLink[];
  logo: React.ReactNode;
  title: string;
};

const GitHubButton: FC = () => (
  <Button asChild variant="ghost" size="icon" aria-label="GitHub Repository">
    <a
      href="https://github.com/Alexanderdunlop/aicodecompare"
      target="_blank"
      rel="noopener noreferrer"
      tabIndex={-1}
    >
      <GitHubLogo className="w-5 h-5 text-foreground" />
    </a>
  </Button>
);

export const Navbar: FC<NavbarProps> = ({ links, logo, title }) => {
  return (
    <nav className="sticky top-0 z-50 w-full border-b border-accent dark:border-accent bg-background backdrop-blur supports-[backdrop-filter]:bg-background/80 py-4 px-6 flex items-center justify-between">
      <div className="flex items-center gap-6 flex-1 min-w-0">
        <Link
          href="/"
          className="flex items-center gap-3 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded shrink-0"
        >
          {logo}
          <span className="hidden md:inline text-xl font-semibold tracking-tight text-foreground dark:text-foreground select-none">
            {title}
          </span>
        </Link>
        {/* Desktop links */}
        <ul className="hidden md:flex gap-6">
          {links.map(({ href, label }) => (
            <li key={href}>
              <Link href={href} className="text-foreground hover:underline font-medium">
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="flex items-center gap-2">
        <GitHubButton />
        <DarkModeToggle />
        <div className="md:hidden">
          <NavbarMobileMenu title={title} links={links} />
        </div>
      </div>
    </nav>
  );
};
