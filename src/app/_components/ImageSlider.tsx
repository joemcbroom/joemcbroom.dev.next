'use client';
import Image from 'next/image';
import { faker } from '@faker-js/faker';
import { useEffect, useMemo, useState } from 'react';
import { cn } from '@/_lib/utils';

type Image = {
  url: string;
  alt: string;
  caption: React.ReactNode | string;
};
interface ImageSliderProps {
  serverImages?: Image[];
}

const ImageSlider: React.FC<ImageSliderProps> = ({ serverImages = [] }) => {
  const [images, setImages] = useState<Image[]>([]);
  const [activeSlide, setActiveSlide] = useState(0);

  const defaultImages = useMemo(() => {
    return [...Array(15)].map((_, index) => ({
      url: faker.image.urlPicsumPhotos({
        width: 650,
        height: 490,
      }),
      alt: '',
      caption: faker.music.songName(),
    }));
  }, []);

  useEffect(() => {
    if (serverImages.length) {
      setImages(serverImages);
      return;
    }
    setImages(defaultImages);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const scrollToSlide = (index: number) => {
    const slide = document.getElementById(`slide-${index}`);
    if (!slide) return;
    slide.scrollIntoView({
      behavior: 'smooth',
      block: 'center',
      inline: 'center',
    });
  };

  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const scrollLeft = e.currentTarget.scrollLeft;
    const scrollWidth = e.currentTarget.scrollWidth;
    const clientWidth = e.currentTarget.clientWidth;
    const scrollPosition = scrollLeft / (scrollWidth - clientWidth);
    const activeSlide = Math.round(scrollPosition * (images.length - 1));
    setActiveSlide(activeSlide);
  };

  if (!images.length) return null;

  const colors = [
    'bg-red-500',
    'bg-orange-500',
    'bg-yellow-500',
    'bg-green-500',
    'bg-blue-500',
    'bg-indigo-500',
    'bg-violet-500',
  ];

  return (
    <div className='relative'>
      <section
        className='gallery w-screen snap-x snap-mandatory overflow-x-scroll'
        onScroll={handleScroll}
      >
        <ul className='m-0 flex w-fit list-none gap-3'>
          {images.map((image, index) => (
            <li className='snap-center' key={image.url} id={`slide-${index}`}>
              <figure
                className='w-96 text-center'
                onClick={() => scrollToSlide(index)}
              >
                <Image
                  src={image.url}
                  alt={image.alt}
                  width={650}
                  height={490}
                  className='slider-image relative'
                  placeholder='blur'
                  blurDataURL={faker.image.dataUri({
                    width: 20,
                    height: 30,
                    type: 'svg-base64',
                  })}
                  style={{
                    zIndex: images.length - index,
                  }}
                />
                <figcaption className='w-full p-4 text-center'>
                  {image.caption}
                </figcaption>
              </figure>
            </li>
          ))}
        </ul>
      </section>
      <div className='absolute bottom-0 left-0 right-0 flex justify-center gap-2'>
        {images.map((_, index) => (
          <button
            key={index}
            className={cn(
              `h-4 w-4 rounded-full border-2 border-gray-300 bg-gray-300`,
              index === activeSlide && colors[index % colors.length],
            )}
            onClick={() => scrollToSlide(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
