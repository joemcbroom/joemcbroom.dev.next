'use client';
import { useState, useEffect, Suspense, lazy } from 'react';
import { useTheme } from 'next-themes';
const LightSwitch = lazy(() => import('./LightSwitch'));
import LoadingSpinner from './LoadingSpinner';

const DarkToggle = () => {
  const { theme, setTheme } = useTheme();
  const [isDark, setIsDark] = useState<boolean | null>(null);

  const toggleTheme = () => {
    setIsDark((prev) => !prev);
    setTheme(isDark ? 'light' : 'dark');
  };

  useEffect(() => {
    setIsDark(
      theme === 'dark' ||
        (theme === 'system' &&
          window.matchMedia('(prefers-color-scheme: dark)').matches),
    );
  }, [theme]);

  if (isDark === null) return null;

  return (
    <Suspense
      fallback={
        <span className='relative grid h-20 w-20 place-items-center md:absolute md:-right-10 md:-top-7'></span>
      }
    >
      <LightSwitch isDark={isDark} toggleTheme={toggleTheme} />
    </Suspense>
  );
};

export default DarkToggle;
