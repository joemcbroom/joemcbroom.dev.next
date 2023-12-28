'use client';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { cn } from '@/_lib/utils';
import type { SliderImage } from '@/_lib/types';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTrigger,
} from './ui/dialog';
import { Search } from 'lucide-react';

interface ImageSliderProps {
  images?: SliderImage[];
}

const ImageSlider: React.FC<ImageSliderProps> = ({ images = [] }) => {
  const [activeSlide, setActiveSlide] = useState(0);

  // if images changes, reset activeSlide to 0 and scroll to first slide
  useEffect(() => {
    setActiveSlide(0);
    scrollToSlide(0);
  }, [images]);

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
        className='gallery mb-24 w-screen snap-x snap-mandatory overflow-x-scroll py-[2lh]'
        onScroll={handleScroll}
      >
        <ul className='m-0 flex w-fit list-none gap-3'>
          {images.map((image, index) => (
            <li
              className='snap-center'
              key={'slide-' + image.url}
              id={`slide-${index}`}
            >
              <figure
                className='relative w-72 text-center md:w-96'
                onClick={() => scrollToSlide(index)}
              >
                <Image
                  src={image.url}
                  alt={image.alt}
                  width={384}
                  height={576}
                  className='slider-image relative'
                  key={'slide-' + image.id}
                  style={{
                    zIndex: images.length - index,
                  }}
                />
                <Dialog>
                  <DialogTrigger className='expand-trigger absolute bottom-6 left-1/2 z-50 -translate-x-1/2 translate-y-1/2 transform rounded border px-2 py-1'>
                    <Search className='h-6 w-6 text-white' />
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>{image.title}</DialogHeader>
                    {image.description && (
                      <p className='text-gray-500'>{image.description}</p>
                    )}
                  </DialogContent>
                </Dialog>
                <figcaption className='my-6 w-full p-4 text-center'>
                  {image.caption}
                </figcaption>
              </figure>
            </li>
          ))}
        </ul>
      </section>
      <div className='absolute bottom-0 left-0 right-0 flex justify-center gap-2'>
        {images.map((image, index) => (
          <button
            key={'button-' + image.url}
            className={cn(
              `size-2 md:size-4 rounded-full border-2 border-gray-300 bg-gray-300`,
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
