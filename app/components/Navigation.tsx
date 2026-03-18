'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navigation() {
  const pathname = usePathname();

  const isActive = (path: string) => {
    if (path === '/') return pathname === path ? 'active' : '';
    return pathname.startsWith(path) ? 'active' : '';
  };

  return (
    <nav>
      <Link href="/" className="nav-logo">
        AgentCFO
      </Link>
      <div className="nav-links">
        <Link href="/" className={isActive('/')}>Home</Link>
        <Link href="/episodes" className={isActive('/episodes')}>Episodes</Link>
        <Link href="/guests" className={isActive('/guests')}>Guests</Link>
        <Link href="/topics" className={isActive('/topics')}>Topics</Link>
        <Link href="/blog" className={isActive('/blog')}>Blog</Link>
        <Link href="/glossary" className={isActive('/glossary')}>Glossary</Link>
        <Link href="/newsletter" className={isActive('/newsletter')}>Newsletter</Link>
        <Link href="/about" className={isActive('/about')}>About</Link>
      </div>
      <Link href="/submit-guest" className="nav-cta">
        <i className="fa-solid fa-microphone" style={{fontSize:'13px'}}></i> Be a Guest
      </Link>
    </nav>
  );
}
