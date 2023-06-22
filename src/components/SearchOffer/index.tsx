import { FC } from 'react';

import { Selector } from '@/components';

import CurrentPrice from '../CurrentPrice';

import { SelectWithInput } from '@/components';
import TypeSelector from './TypeSelector';
import styles from './index.module.scss';
import { SearchOfferProps } from './types';

const SearchOffer: FC<SearchOfferProps> = () => {
  return (
    <div className={styles.container}>
      <TypeSelector />
      <div className={styles.main}>
        <section className={styles.section}>
          <Selector type="cryptocurrency" />
          <CurrentPrice />
        </section>
        <section className={styles.section}>
          <SelectWithInput type="payment-method" />
        </section>
        <section className={styles.section}>
          <SelectWithInput type="amount" />
        </section>
      </div>
    </div>
  );
};

export default SearchOffer;
