import reactLogo from '@/_assets/img/react.svg';
import typescriptLogo from '@/_assets/img/typescript.svg';
import tailwindLogo from '@/_assets/img/tailwind.svg';
import nextjsLogo from '@/_assets/img/nextjs.svg';
import supabaseLogo from '@/_assets/img/supabase.svg';
import Image from 'next/image';

const Tools = () => {
  const tools = [
    {
      name: 'TypeScript',
      logo: typescriptLogo,
    },
    {
      name: 'React',
      logo: reactLogo,
    },
    {
      name: 'Next.js',
      logo: nextjsLogo,
    },
    {
      name: 'Tailwind',
      logo: tailwindLogo,
    },
    {
      name: 'Supabase',
      logo: supabaseLogo,
    },
  ];

  return (
    <div className='flex flex-wrap items-center justify-center space-x-4'>
      {tools.map(({ logo, name }) => (
        <div key={name} className='flex flex-col items-center justify-center'>
          <Image
            src={logo}
            alt={name}
            className='aspect-square w-8 object-contain md:w-10 lg:w-16'
          />
          <span className='text-sm text-neutral-600 dark:text-neutral-400'>
            {name}
          </span>
        </div>
      ))}
    </div>
  );
};

export default Tools;
