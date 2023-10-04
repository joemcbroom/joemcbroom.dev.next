'use client';
import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import { Switch } from '@headlessui/react';

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
    <Switch
      checked={isDark}
      onChange={toggleTheme}
      className={`${
        isDark ? 'bg-sky-600' : 'bg-gray-200'
      } relative inline-flex h-6 w-11 items-center rounded-full md:absolute md:-right-24`}
    >
      <span
        className={`${
          isDark ? 'translate-x-0' : 'translate-x-full'
        } inline-block h-6 w-6 transform overflow-hidden rounded-full bg-white transition`}
      >
        {isDark ? '🌙' : '☀️'}
      </span>
    </Switch>
  );
};

export default DarkToggle;
