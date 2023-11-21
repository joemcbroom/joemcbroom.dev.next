'use client';
import { useState, useEffect, useRef } from 'react';
import { useTheme } from 'next-themes';
import { Switch } from '@headlessui/react';
import Lottie, { LottieRef, useLottie } from 'lottie-react';
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

  return (
    <LightSwitch isDark={isDark} toggleTheme={toggleTheme} />
    // <Switch
    //   checked={isDark}
    //   onChange={toggleTheme}
    //   className={`relative md:absolute md:-right-24`}
    // >
    //   {View}
    //   {/* <span
    //     className={`${
    //       isDark ? 'translate-x-0' : 'translate-x-full'
    //     } inline-block h-6 w-6 transform overflow-hidden rounded-full bg-white transition`}
    //   >

    //   </span> */}
    // </Switch>
  );
};

export default DarkToggle;
