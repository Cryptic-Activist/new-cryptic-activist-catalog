import { FC } from 'react';

import { Brand } from './types';

import styles from './index.module.scss';

const Brand: FC<Brand> = ({ href = '/' }) => {
  return (
    <a className={styles.brand} href={href}>
      <h1>Cryptic Activist</h1>
      <h2>Catalog</h2>
    </a>
  );
};

export default Brand;
