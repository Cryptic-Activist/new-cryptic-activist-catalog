import { SearchOffer } from '@/components';
import styles from './index.module.scss';

const OfferListSection = () => {
  return (
    <section className={styles.offerListSection}>
      <SearchOffer />
    </section>
  );
};

export default OfferListSection;
