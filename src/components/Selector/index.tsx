'use client';

import { FC, useEffect, useState } from 'react';

import { useApp } from '@/hooks';
import { toCapitalize, toUpperCase } from '@/utils';

import styles from './index.module.scss';
import { BuildLabel, SelectorProps } from './types';

const Selector: FC<SelectorProps> = ({ type }) => {
  const [label, setLabel] = useState('No data');

  const { app } = useApp();
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

  useEffect(() => {
    if (defaults.cryptocurrency && defaults.fiat) {
      getButtonLabel();
    }
  }, [defaults, type]);

  return <button className={styles.container}>{label}</button>;
};

export default Selector;
