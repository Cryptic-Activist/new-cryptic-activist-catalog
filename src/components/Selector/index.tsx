'use client';

import { FC, useEffect } from 'react';

import { useFiats } from '@/hooks';

import styles from './index.module.scss';
import { SelectorProps } from './types';

const Selector: FC<SelectorProps> = ({ type }) => {
  const { getFiats, fiats } = useFiats();

  useEffect(() => {
    getFiats();
  }, []);

  return <button className={styles.container}>Selector</button>;
};

export default Selector;
