'use client';

import profileImage from '@/_assets/img/headshot.png';
import { cn } from '@/_lib/utils';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';

const ProfileImage = () => {
  const [isServer, setIsServer] = useState(true);

  useEffect(() => {
    setIsServer(false);
  }, []);

  return (
    <figure
      className={cn(
        isServer && 'grayscale',
        'block-shadow relative my-12 rounded-lg rounded-t-full border-2 transition-all duration-1000 ease-in-out dark:border-neutral-700',
      )}
    >
      <Image
        // ref={image}
        src={profileImage}
        priority
        className='rounded-lg rounded-t-full'
        alt='Picture of the Joe McBroom'
        placeholder='blur'
      />
    </figure>
  );
};

export default ProfileImage;
