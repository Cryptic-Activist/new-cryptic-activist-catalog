'use client';

import { useFiats, useHorizontalScroll } from '@/hooks';
import { ListTemplate } from '@/layouts/Modals';

import { toCapitalize, toUpperCase } from '@/utils';
import { useRef } from 'react';
import styles from './index.module.scss';

const Fiats = () => {
  const ref = useRef<HTMLUListElement | null>(null);
  const _scroll = useHorizontalScroll(ref);
  const { fiats } = useFiats();
  return (
    <ListTemplate width="70vw" height="70vh" heading="Fiats">
      <ul className={styles.list} ref={ref}>
        {fiats.data?.map((fiat, index) => (
          <li key={index}>
            <button>{`${toUpperCase(fiat.symbol)} - ${toCapitalize(
              fiat.name
            )}`}</button>
          </li>
        ))}
      </ul>
    </ListTemplate>
  );
};

export default Fiats;
