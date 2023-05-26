'use client';

import { usePathname } from 'next/navigation';

const routes = [
  { path: '/', name: 'Home', backgroundClass: 'bg-sky-900' },
  { path: '/about', name: 'About', backgroundClass: 'bg-sky-800' },
  { path: '/resume', name: 'Resume', backgroundClass: 'bg-sky-700' },
  { path: '/contact', name: 'Contact', backgroundClass: 'bg-sky-600' },
];

const useRoutes = () => {
  const currentPathname = usePathname();

  const { backgroundClass } = routes.find(
    (route) => route.path === currentPathname
  ) || { backgroundClass: '' };

  return { routes, currentPathname, backgroundClass };
};

export default useRoutes;
