import { Inter } from 'next/font/google';

import { Footer, NavigationBar } from '@/layouts';

import './index.css';
import styles from './layout.module.scss';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <title>Cryptic Activist Catalog</title>
      </head>
      <body className={`${inter.className} ${styles.body}`}>
        <NavigationBar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
