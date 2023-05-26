import Navbar from './(nav)/NavBar';
import './globals.css';

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
    <html lang='en'>
      <body className='h-screen'>
        <Navbar />
        <main className='pt-10'>{children}</main>
      </body>
    </html>
  );
}
