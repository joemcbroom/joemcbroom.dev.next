'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Fragment } from 'react';
import DarkToggle from '@/_components/UI/DarkToggle';

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
      <ul className='relative flex flex-col items-center space-y-4 md:w-[15rem] md:flex-row md:gap-4 md:space-y-0'>
        {navLinks.map(({ name, path }) => {
          const isActive = pathname === path;
          const { left } =
            navLinks.find((link) => link.path === pathname) || {};
          return (
            <Fragment key={name}>
              <span
                className={`druation relative flex flex-col items-center justify-center transition-colors duration-75 md:grid md:h-full md:w-1/3 md:place-items-center md:text-center ${
                  isActive ? 'text-sky-500' : ''
                }`}
                key={name}
                onClick={onClick}
              >
                <Link href={path}>{name}</Link>
              </span>
              <span
                className={`absolute ${left} top-full hidden h-2 w-2 rounded-full transition-all md:block ${
                  isActive ? 'bg-sky-400' : 'bg-transparent'
                }`}
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
