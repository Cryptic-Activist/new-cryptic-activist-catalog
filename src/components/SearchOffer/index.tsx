import { FC } from 'react';

import { Selector } from '@/components';

import CurrentPrice from '../CurrentPrice';
import SelectorWithInput from '../SelectWithInput';
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
          <SelectorWithInput label="" />
        </section>
      </div>
    </div>
  );
};

export default SearchOffer;
