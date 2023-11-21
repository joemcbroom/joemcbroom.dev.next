import Image from 'next/image';

type Image = {
  url: string;
  alt: string;
  caption: React.ReactNode | string;
};
interface ImageSliderProps {
  images?: Image[];
}

// https://via.assets.so/album.png?id={index}&w=650&h=490
// 15 example images
const DEFAULT_IMAGES = [
  {
    url: 'https://via.assets.so/album.png?id=1&w=650&h=490',
    alt: 'Example Image One',
    caption: 'Example Image One',
  },
  {
    url: 'https://via.assets.so/album.png?id=2&w=650&h=490',
    alt: 'Example Image Two',
    caption: 'Example Image Two',
  },
  {
    url: 'https://via.assets.so/album.png?id=3&w=650&h=490',
    alt: 'Example Image Three',
    caption: 'Example Image Three',
  },
  {
    url: 'https://via.assets.so/album.png?id=4&w=650&h=490',
    alt: 'Example Image Four',
    caption: 'Example Image Four',
  },
  {
    url: 'https://via.assets.so/album.png?id=5&w=650&h=490',
    alt: 'Example Image Five',
    caption: 'Example Image Five',
  },
  {
    url: 'https://via.assets.so/album.png?id=6&w=650&h=490',
    alt: 'Example Image Six',
    caption: 'Example Image Six',
  },
  {
    url: 'https://via.assets.so/album.png?id=7&w=650&h=490',
    alt: 'Example Image Seven',
    caption: 'Example Image Seven',
  },
  {
    url: 'https://via.assets.so/album.png?id=8&w=650&h=490',
    alt: 'Example Image Eight',
    caption: 'Example Image Eight',
  },
  {
    url: 'https://via.assets.so/album.png?id=9&w=650&h=490',
    alt: 'Example Image Nine',
    caption: 'Example Image Nine',
  },
  {
    url: 'https://via.assets.so/album.png?id=10&w=650&h=490',
    alt: 'Example Image Ten',
    caption: 'Example Image Ten',
  },
  {
    url: 'https://via.assets.so/album.png?id=11&w=650&h=490',
    alt: 'Example Image Eleven',
    caption: 'Example Image Eleven',
  },
  {
    url: 'https://via.assets.so/album.png?id=12&w=650&h=490',
    alt: 'Example Image Twelve',
    caption: 'Example Image Twelve',
  },
  {
    url: 'https://via.assets.so/album.png?id=13&w=650&h=490',
    alt: 'Example Image Thirteen',
    caption: 'Example Image Thirteen',
  },
  {
    url: 'https://via.assets.so/album.png?id=14&w=650&h=490',
    alt: 'Example Image Fourteen',
    caption: 'Example Image Fourteen',
  },
  {
    url: 'https://via.assets.so/album.png?id=15&w=650&h=490',
    alt: 'Example Image Fifteen',
    caption: 'Example Image Fifteen',
  },
];
const ImageSlider: React.FC<ImageSliderProps> = ({
  images = DEFAULT_IMAGES,
}) => {
  return (
    <div className='relative'>
      <section className='gallery w-screen snap-x snap-mandatory overflow-x-scroll'>
        <ul className='m-0 flex w-fit list-none gap-3'>
          {images.map((image, index) => (
            <li className='snap-center' key={image.url}>
              <figure className='w-96 text-center'>
                <Image
                  src={image.url}
                  alt={image.alt}
                  width={650}
                  height={490}
                  className='slider-image relative'
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
    </div>
  );
};

export default ImageSlider;
