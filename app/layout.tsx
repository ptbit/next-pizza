import { Nunito } from 'next/font/google';
import './globals.css';

const nunito = Nunito({
  variable: '--font-nunito',
  subsets: ['cyrillic'],
  weight: ['400', '500', '600', '700', '800', '900'],
});

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <head>
        <link rel='icon' href='/logo.png' type='image' data-rh='true' />
      </head>
      <body className={nunito.variable}>{children}</body>
    </html>
  );
}
