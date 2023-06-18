import styles from './page.module.scss';

import { SearchOffer } from '@/components';

export default function Home() {
  return (
    <div className={styles.container}>
      <SearchOffer />
      <SearchOffer />

      <SearchOffer />
      <SearchOffer />
    </div>
  );
}
