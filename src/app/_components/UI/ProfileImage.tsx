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
    <figure className='profile-image block-shadow relative mx-auto w-3/4 max-w-max rounded-t-full border-2 '>
      <Image
        ref={image}
        src={profileImage}
        priority
        className='headshot rounded-t-full grayscale transition-all delay-1000 duration-1000 ease-in-out hover:grayscale-0'
        alt='Picture of the Joe McBroom'
        placeholder='blur'
      />
    </figure>
  );
};

export default ProfileImage;
