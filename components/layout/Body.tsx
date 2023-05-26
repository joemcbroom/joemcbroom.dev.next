'use client';

import useRoutes from '@/lib/hooks/useRoutes';

const BodyWrapper = ({ children }: { children: React.ReactNode }) => {
  const { backgroundClass } = useRoutes();

  return (
    <body
      className={`bg-color-transition flex h-full flex-col ${backgroundClass}`}
    >
      {children}
    </body>
  );
};

export default BodyWrapper;
