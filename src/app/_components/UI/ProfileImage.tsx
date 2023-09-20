'use client';

import profileImage from '@/_assets/img/headshot.png';
import Image from 'next/image';
import { useEffect, useRef } from 'react';

const ProfileImage = () => {
  const image = useRef<HTMLImageElement>(null);
  // change from `grayscale` to `grayscale-0` on mount
  useEffect(() => {
    image.current?.classList.remove('grayscale');
    image.current?.classList.add('grayscale-0');
  }, []);

  return (
    <figure className='block-shadow relative mx-auto w-3/4 overflow-hidden rounded-t-full border-2 '>
      <Image
        ref={image}
        src={profileImage}
        className='headshot grayscale transition-all duration-1000 ease-in-out hover:grayscale-0'
        alt='Picture of the Joe McBroom'
      />
    </figure>
  );
};

export default ProfileImage;
