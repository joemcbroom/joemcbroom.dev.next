import Heading from '@/_components/ui/Heading';
import Highlight from '@/_components/ui/Highlight';
import InverseWrapper from '@/_components/ui/InverseWrapper';
import ProfileImage from '@/_components/ui/ProfileImage';
import Tools from '@/_components/ui/Tools';
import Link from 'next/link';

export default function HomePage() {
  return (
    <>
      <section className='mx-auto flex max-w-5xl flex-col md:grid md:grid-cols-2'>
        <div className='mx-auto flex flex-col justify-center gap-4 text-left'>
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
        <div className='flex w-full items-end justify-end'>
          <ProfileImage />
        </div>
      </section>
      <InverseWrapper>
        <div className='block-shadow mx-auto flex max-w-5xl flex-col items-center justify-evenly space-y-6 rounded-lg border-2 p-4 md:flex-row'>
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
