import { Montserrat } from 'next/font/google';

import { AllModals, Footer, InitialFetch, NavigationBar } from '@/layouts';

import './index.css';
import styles from './layout.module.scss';

const montserrat = Montserrat({ subsets: ['latin'] });

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <title>Cryptic Activist Catalog</title>
      </head>
      <body className={`${montserrat.className}`}>
        <InitialFetch />
        <AllModals />
        <NavigationBar />
        <main className={styles.main}>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

export default RootLayout;
