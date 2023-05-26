import Navbar from '@/components/NavBar/NavBar';
import './globals.css';
import BodyWrapper from '@/components/layout/Body';

export const metadata = {
  title: 'Joe McBroom',
  description: 'Software Engineer',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en' className='h-full'>
      <BodyWrapper>
        <Navbar />
        <main className='h-full pt-10 text-slate-50 sm:pt-0'>{children}</main>
      </BodyWrapper>
    </html>
  );
}
