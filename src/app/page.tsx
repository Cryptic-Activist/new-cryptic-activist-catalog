import styles from './page.module.scss';

import { OfferList } from '@/layouts';

export default function Home() {
  return (
    <div className={styles.container}>
      <OfferList />
    </div>
  );
}
