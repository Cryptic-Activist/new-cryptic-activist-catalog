'use client';

import { FC, useEffect, useState } from 'react';

import { useApp, useNavigationBar } from '@/hooks';
import { toCapitalize, toUpperCase } from '@/utils';

import styles from './index.module.scss';
import { BuildLabel, SelectorProps } from './types';

const Selector: FC<SelectorProps> = ({ type }) => {
  const [label, setLabel] = useState('No data');

  const { app } = useApp();
  const { toggleModal } = useNavigationBar();
  const { defaults } = app;

  const buildLabel: BuildLabel = (symbol, name) => {
    return `${toUpperCase(symbol)} - ${toCapitalize(name)}`;
  };

  const getButtonLabel = () => {
    const localLabel =
      type === 'cryptocurrency'
        ? buildLabel(
            defaults.cryptocurrency?.symbol!,
            defaults.cryptocurrency?.name!
          )
        : buildLabel(defaults.fiat?.symbol!, defaults.fiat?.name!);

    setLabel(localLabel);
  };

  const handleClick = () => {
    if (type === 'fiat') {
      toggleModal('fiats');
    }
    if (type === 'cryptocurrency') {
      toggleModal('cryptocurrencies');
    }
  };

  useEffect(() => {
    if (defaults.cryptocurrency && defaults.fiat) {
      getButtonLabel();
    }
  }, [defaults, type]);

  return (
    <div className={styles.container}>
      <label htmlFor={styles.selector} className={styles.label}>
        {toCapitalize(type)}
      </label>
      <button
        className={styles.selector}
        id={styles.selector}
        onClick={handleClick}
      >
        {label}
      </button>
    </div>
  );
};

export default Selector;
