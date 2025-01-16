import Link from 'next/link';
import { FC } from 'react';

import type { Brand } from './types';

import styles from './index.module.scss';

const Brand: FC<Brand> = ({ href = '/' }) => {
  return (
    <Link className={styles.brand} href={href}>
      <h1>Cryptic Activist</h1>
      <h2>Catalog</h2>
    </Link>
  );
};

export default Brand;
