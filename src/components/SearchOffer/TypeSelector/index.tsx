'use client';

import { useApp } from '@/hooks';

import { useState } from 'react';
import styles from './index.module.scss';
import { Selected } from './types';

const TypeSelector = () => {
  const { app } = useApp();
  const [selected, setSelected] = useState<Selected>('buy');

  const selectType = () => {
    setSelected((prev) => (prev === 'buy' ? 'sell' : 'buy'));
  };

  return (
    <div className={styles.container}>
      <button
        className={selected === 'buy' ? styles.selected : ''}
        onClick={selectType}
      >
        Buy
      </button>
      <button
        className={selected === 'sell' ? styles.selected : ''}
        onClick={selectType}
      >
        Sell
      </button>
    </div>
  );
};

export default TypeSelector;
