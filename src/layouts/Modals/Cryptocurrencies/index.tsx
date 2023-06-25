'use client';

import { useCryptocurrencies, useHorizontalScroll } from '@/hooks';
import { ListTemplate } from '@/layouts/Modals';

import { toggleModal } from '@/store';
import { Cryptocurrency } from '@/store/cryptocurrency/types';
import { toCapitalize, toUpperCase } from '@/utils';
import { useRef } from 'react';
import styles from './index.module.scss';

const Cryptocurrencies = () => {
  const ref = useRef<HTMLUListElement | null>(null);
  const _scroll = useHorizontalScroll(ref);
  const { cryptocurrencies, setCryptocurrency } = useCryptocurrencies();

  const selectCryptocurrency = (cryptocurrency: Cryptocurrency) => {
    setCryptocurrency(cryptocurrency);
    toggleModal('cryptocurrencies');
  };

  return (
    <ListTemplate width="70vw" height="70vh" heading="Cryptocurrencies">
      <ul className={styles.list} ref={ref}>
        {cryptocurrencies.data?.map((cryptocurrency, index) => (
          <li key={index}>
            <button
              onClick={() => selectCryptocurrency(cryptocurrency)}
            >{`${toUpperCase(cryptocurrency.symbol)} - ${toCapitalize(
              cryptocurrency.name
            )}`}</button>
          </li>
        ))}
      </ul>
    </ListTemplate>
  );
};

export default Cryptocurrencies;
