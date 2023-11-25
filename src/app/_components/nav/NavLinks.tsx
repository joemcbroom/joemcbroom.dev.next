'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Fragment } from 'react';
import DarkToggle from '@/_components/ui/DarkToggle';
import { cn } from '@/_lib/utils';
import LinkHighlight from '../ui/LinkHighlight';

const NavLinks = () => {
  const pathname = usePathname();
  const onClick = () => {
    document.getElementById('menu-toggle')?.click();
  };

  const navLinks = [
    {
      name: 'Home',
      path: '/',
      left: 'left-[2rem]',
    },
    {
      name: 'About',
      path: '/about',
      left: 'left-[7.35rem]',
    },
    {
      name: 'Resume',
      path: '/resume',
      left: 'left-[12.65rem]',
    },
  ];

  return (
    <>
      <ul className='relative flex flex-col items-center space-y-4 md:w-[15rem] md:flex-row md:gap-4 md:space-y-0 md:pr-10'>
        {navLinks.map(({ name, path }) => {
          const isActive = pathname === path;
          return (
            <Fragment key={name}>
              <LinkHighlight
                isActive={isActive}
                onClick={onClick}
                path={path}
                name={name}
              />
            </Fragment>
          );
        })}
        <DarkToggle />
      </ul>
    </>
  );
};

export default NavLinks;
