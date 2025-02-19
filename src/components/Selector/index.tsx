'use client';

import { BuildLabel, SelectorProps } from './types';
import { FC, useEffect, useState } from 'react';
import { toCapitalize, toUpperCase } from '@/utils';
import { useApp, useNavigationBar } from '@/hooks';

import styles from './index.module.scss';

const Selector: FC<SelectorProps> = ({ type, hasLabel = true }) => {
  const [label, setLabel] = useState('No data');

  const { app } = useApp();
  const { toggleModal } = useNavigationBar();
  const { defaults } = app;

  const buildLabel: BuildLabel = (symbol, name) => {
    return `${toUpperCase(symbol)} - ${toCapitalize(name)}`;
  };

  const getButtonLabel = () => {
    let localLabel = 'No Data';
    switch (type) {
      case 'cryptocurrency': {
        localLabel = buildLabel(
          defaults.cryptocurrency?.symbol!,
          defaults.cryptocurrency?.name!
        );
        break;
      }
      case 'fiat': {
        localLabel = buildLabel(defaults.fiat?.symbol!, defaults.fiat?.name!);
        break;
      }
    }

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
    console.log({ defaults });
  }, [defaults, type]);

  console.log({ label });

  return (
    <div className={styles.container}>
      {hasLabel && (
        <label htmlFor={styles.selector} className={styles.label}>
          {toCapitalize(type)}
        </label>
      )}
      <button className={styles.selector} onClick={handleClick}>
        {label}
      </button>
    </div>
  );
};

export default Selector;
