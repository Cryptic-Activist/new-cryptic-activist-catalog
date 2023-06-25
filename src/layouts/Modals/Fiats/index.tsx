'use client';

import { useFiats, useHorizontalScroll } from '@/hooks';
import { ListTemplate } from '@/layouts/Modals';

import { toggleModal } from '@/store';
import { Fiat } from '@/store/fiat/types';
import { toCapitalize, toUpperCase } from '@/utils';
import { useRef } from 'react';
import styles from './index.module.scss';

const Fiats = () => {
  const ref = useRef<HTMLUListElement | null>(null);
  const _scroll = useHorizontalScroll(ref);
  const { fiats, setFiat } = useFiats();

  const selectFiat = (fiat: Fiat) => {
    setFiat(fiat);
    toggleModal('fiats');
  };

  return (
    <ListTemplate width="70vw" height="70vh" heading="Fiats">
      <ul className={styles.list} ref={ref}>
        {fiats.data?.map((fiat, index) => (
          <li key={index}>
            <button onClick={() => selectFiat(fiat)}>{`${toUpperCase(
              fiat.symbol
            )} - ${toCapitalize(fiat.name)}`}</button>
          </li>
        ))}
      </ul>
    </ListTemplate>
  );
};

export default Fiats;
