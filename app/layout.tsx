import { Poppins } from 'next/font/google';
import "./globals.css";
import { ReactNode } from 'react';
import Sidebar from '@/lib/Sidebar';

const poppins = Poppins({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
});

export const metadata = {
  title: 'Agin Music',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={`${poppins.variable}`}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body>
        <Sidebar>
          {children}
        </Sidebar>
      </body>
    </html>
  );
}
