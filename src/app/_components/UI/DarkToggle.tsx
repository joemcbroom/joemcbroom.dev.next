'use client';
import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import LightSwitch from './LightSwitch';

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

  return <LightSwitch isDark={isDark} toggleTheme={toggleTheme} />;
};

export default DarkToggle;
