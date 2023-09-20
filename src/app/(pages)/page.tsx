import Heading from '@/_components/UI/Heading';
import Highlight from '@/_components/UI/Highlight';
import InverseWrapper from '@/_components/UI/InverseWrapper';
import ProfileImage from '@/_components/UI/ProfileImage';
import Tools from '@/_components/UI/Tools';
import Link from 'next/link';

export default function HomePage() {
  return (
    <>
      <section className='container mx-auto flex max-w-6xl flex-col md:grid md:grid-cols-2'>
        <div className='mx-auto flex flex-col justify-center gap-4 p-8 text-left'>
          <Heading type='h1' fontFamily='font-mono'>
            <Highlight>Software</Highlight> engineer
          </Heading>
          <p className='text-balance text-lg'>
            Hi! I&apos;m Joe. I specialize in building exceptional digital
            experiences.
            <span className='block text-sm'>
              Currently at{' '}
              <Link
                className='text-emerald-500'
                target='_blank'
                href='https://willowtreeapps.com'
              >
                Willowtree
              </Link>
              .
            </span>
          </p>
        </div>
        <div className='p-12'>
          <ProfileImage />
        </div>
      </section>
      <InverseWrapper>
        <div className='block-shadow container mx-auto flex flex-col items-center justify-center rounded-lg border-2 p-4 md:flex-row'>
          <div className='basis-5/12 text-center md:text-left'>
            <Heading type='h4' fontFamily='font-mono'>
              <Highlight variant='inverse'>my tool kit.</Highlight>
            </Heading>
            <p className='text-balance'>
              My current favorite tools for full stack development.
            </p>
          </div>

          <Tools />
        </div>
      </InverseWrapper>
    </>
  );
}
