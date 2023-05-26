'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import NavLink from './NavLink';
import { useState } from 'react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';

const Navbar = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const routes = [
    { path: '/', name: 'Home', backgroundClass: 'bg-sky-900' },
    { path: '/about', name: 'About', backgroundClass: 'bg-sky-800' },
    { path: '/resume', name: 'Resume', backgroundClass: 'bg-sky-700' },
    { path: '/contact', name: 'Contact', backgroundClass: 'bg-sky-600' },
  ];
  const currentPathname = usePathname();
  const { backgroundClass } = routes.find(
    route => route.path === currentPathname
  ) || { backgroundClass: '' };

  return (
    <>
      <div
        className={`fixed z-10 h-10 w-full transition-colors delay-500 duration-500 sm:hidden ${backgroundClass}`}
      >
        <span onClick={() => setIsExpanded(!isExpanded)}>
          {isExpanded ? (
            <XMarkIcon className='absolute right-1 top-1 h-8 w-8 cursor-pointer text-slate-50' />
          ) : (
            <Bars3Icon className='absolute right-1 top-1 h-8 w-8 cursor-pointer text-slate-50' />
          )}
        </span>
      </div>
      <nav
        className={`transition-scale fixed w-full overflow-hidden text-slate-100 delay-0 duration-1000 sm:max-h-min  ${
          !isExpanded ? '-translate-y-full' : 'translate-y-0'
        }`}
      >
        <div
          className={`${backgroundClass} z-20 flex h-screen w-full flex-shrink-0 flex-col items-center justify-center gap-4 p-4 delay-500 duration-500 sm:justify-end`}
        >
          <Link
            href='/'
            className='mr-auto hidden h-12 w-12 place-items-center rounded-full text-xl font-bold outline-slate-50 transition-all hover:border-teal-500 hover:outline sm:grid'
          >
            J
          </Link>
          {routes.map(route => (
            <NavLink
              text={route.name}
              isActive={route.path === currentPathname}
              href={route.path}
              key={route.path}
              backgroundClass={route.backgroundClass}
              onClick={() => {
                setTimeout(() => setIsExpanded(false), 750);
              }}
            />
          ))}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
