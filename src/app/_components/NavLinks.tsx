'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const NavLinks = () => {
  const pathname = usePathname();
  const onClick = () => {
    document.getElementById('menu-toggle')?.click();
  };

  const navLinks = [
    {
      name: 'Home',
      path: '/',
    },
    {
      name: 'About',
      path: '/about',
    },
    {
      name: 'Resume',
      path: '/resume',
    },
  ];

  return (
    <ul className='flex flex-col items-center space-y-4 md:flex-row md:space-x-4 md:space-y-0'>
      {navLinks.map(({ name, path }) => {
        const isActive = pathname === path;
        return (
          <span
            className={`flex flex-col items-center justify-center ${
              isActive ? 'text-teal-600' : ''
            }`}
            key={name}
            onClick={onClick}
          >
            <Link href={path}>{name}</Link>

            <span
              className={`hidden hidden h-2 w-2 rounded-full md:block ${
                isActive ? 'bg-teal-600' : 'bg-transparent'
              }`}
            />
          </span>
        );
      })}
      {/* <DarkToggle /> */}
    </ul>
  );
};

export default NavLinks;
