import styles from './page.module.scss';

import { Hero, OfferList } from '@/layouts';

export default function Home() {
  return (
    <div className={styles.container}>
      <Hero />
      <OfferList />
    </div>
  );
}
