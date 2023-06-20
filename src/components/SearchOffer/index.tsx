import { FC } from 'react';

import { Selector } from '@/components';

import styles from './index.module.scss';
import { SearchOfferProps } from './types';

const SearchOffer: FC<SearchOfferProps> = () => {
  return (
    <div className={styles.container}>
      <Selector type="fiat" />
    </div>
  );
};

export default SearchOffer;
