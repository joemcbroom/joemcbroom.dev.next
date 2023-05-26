'use client';

import Link from 'next/link';
import NavLink from './NavLink';
import { useState } from 'react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';
import useRoutes from '@/lib/hooks/useRoutes';
import Image from 'next/image';

const Navbar = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const { routes, currentPathname, backgroundClass } = useRoutes();

  const iconClassNames =
    'absolute right-1 top-1 h-8 w-8 cursor-pointer text-slate-50';

  return (
    <>
      <div
        className={`bg-color-transition fixed z-10 h-10 w-full sm:hidden ${backgroundClass}`}
      >
        <span onClick={() => setIsExpanded(!isExpanded)}>
          {isExpanded ? (
            <XMarkIcon className={iconClassNames} />
          ) : (
            <Bars3Icon className={iconClassNames} />
          )}
        </span>
      </div>
      <nav
        className={`fixed w-full overflow-hidden border-0 border-b bg-inherit p-4 text-slate-100 transition-transform delay-0 duration-500 sm:relative ${
          isExpanded ? 'translate-y-0' : '-translate-y-full sm:translate-y-0'
        }`}
      >
        <div
          className={`bg-color-transition z-20 flex h-screen w-full flex-shrink-0 flex-col items-center justify-center gap-4 sm:h-full sm:flex-row sm:justify-end `}
        >
          <Link href='/' className='mr-auto hidden sm:block'>
            <Image src='/img/logo.png' width={48} height={48} alt='' />
          </Link>
          {routes.map((route) => (
            <NavLink
              text={route.name}
              isActive={route.path === currentPathname}
              href={route.path}
              key={route.path}
              backgroundClass={route.backgroundClass}
              onClick={() => {
                setTimeout(() => setIsExpanded(false), 500);
              }}
            />
          ))}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
