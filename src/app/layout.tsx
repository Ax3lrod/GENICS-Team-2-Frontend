import type { Metadata } from 'next';
import './globals.css';
import Providers from '@/app/providers';

export const metadata: Metadata = {
  title: 'ShareITS',
  description:
    'Receive constructive anonymous feedback from professors and peers to improve your learning quality',
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/apple-touch-icon.png',
    other: {
      rel: 'icon',
      url: '/favicon-32x32.png',
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' className='light'>
      <body className='antialiased'>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
