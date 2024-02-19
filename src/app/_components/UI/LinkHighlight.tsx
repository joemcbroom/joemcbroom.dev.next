'use client';
import { cn } from '@/_lib/utils';
import Link from 'next/link';
import { useState } from 'react';

/* Make sure `group` class is added to the parent element */
const LinkHighlight = ({
  isActive,
  onClick,
  path,
  name,
}: {
  isActive?: boolean;
  onClick?: () => void;
  path: string;
  name: string;
}) => {
  const [direction, setDirection] = useState<'left' | 'right'>('left');
  const [isHovered, setIsHovered] = useState(false);

  return (
    <span
      className=' relative flex flex-col items-center justify-center whitespace-nowrap transition-colors duration-75 md:grid md:h-full md:w-1/3 md:place-items-center md:text-center'
      onClick={onClick}
      onMouseEnter={(e) => {
        // check if mouse entered from left or right
        const { clientX } = e;
        const { left, right } = e.currentTarget.getBoundingClientRect();
        const center = (left + right) / 2;
        const direction = clientX < center ? 'left' : 'right';
        setDirection(direction);
        setTimeout(() => {
          setIsHovered(true);
        }, 100);
      }}
      onMouseLeave={() => {
        setTimeout(() => {
          setIsHovered(false);
        }, 100);
      }}
    >
      <Link href={path}>{name}</Link>
      <span
        className={cn(
          'absolute bottom-0 left-0 -z-10 h-2/3 w-full rotate-1 scale-x-0 bg-sky-200 transition-all dark:bg-sky-800',
          direction === 'left' ? 'origin-left' : 'origin-right',
          (isActive || isHovered) && 'scale-x-100',
        )}
      />
    </span>
  );
};

export default LinkHighlight;
