import ImageSlider from '@/_components/ImageSlider';
import { faker } from '@faker-js/faker';

const AboutPage = () => {
  const defaultImages = [...Array(15)].map((_, index) => ({
    url: faker.image.urlPicsumPhotos({
      width: 650,
      height: 490,
    }),
    alt: '',
    caption: faker.music.songName(),
  }));
  return (
    <div className='grid h-full place-items-center'>
      <ImageSlider serverImages={defaultImages} />
    </div>
  );
};

export default AboutPage;
