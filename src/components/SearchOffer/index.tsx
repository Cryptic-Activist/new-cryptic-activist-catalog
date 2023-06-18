import { FC } from 'react';

import styles from './index.module.scss';
import { SearchOfferProps } from './types';

const SearchOffer: FC<SearchOfferProps> = () => {
  return <div className={styles.container}>SearchOffer</div>;
};

export default SearchOffer;
