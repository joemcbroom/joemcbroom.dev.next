import { Bars3Icon, XMarkIcon } from '@heroicons/react/20/solid';
import Link from 'next/link';
import NavLinks from './NavLinks';

const Title = ({ isMobile }: { isMobile?: boolean }) => {
  return (
    <Link
      href='/'
      className={`${
        isMobile ? '' : ''
      } font-semibold uppercase tracking-wider text-inherit text-lg`}
    >
      Joe McBroom
    </Link>
  );
};

const Nav = () => {
  return (
    <>
      <div className='sticky top-0 z-50 flex min-h-[4rem] w-full items-center justify-between border-b px-4 py-2 text-sky-500 backdrop-blur-md md:hidden'>
        <Title isMobile />
        <input
          type='checkbox'
          id='menu-toggle'
          className='peer/menu-toggle hidden'
        />
        <label
          htmlFor='menu-toggle'
          className='z-50 block text-inherit peer-checked/menu-toggle:hidden'
        >
          <Bars3Icon className='h-6 w-6 ' />
        </label>
        <label
          htmlFor='menu-toggle'
          className='z-50 hidden justify-self-end peer-checked/menu-toggle:block'
        >
          <XMarkIcon className='h-6 w-6 text-inherit' />
        </label>

        <div className='fixed left-0 top-0 z-40 flex h-screen w-screen -translate-y-full flex-col place-items-center items-center justify-center bg-neutral-100 transition-all ease-in-out peer-checked/menu-toggle:z-30 peer-checked/menu-toggle:translate-y-0 dark:bg-neutral-900'>
          <NavLinks />
        </div>
      </div>
      <div className='sticky inset-0 z-40 mx-auto hidden min-h-[4rem] w-full border-b backdrop-blur-md md:flex md:items-center md:justify-between md:px-36 md:py-2'>
        <Title />
        <NavLinks />
      </div>
    </>
  );
};

export default Nav;
