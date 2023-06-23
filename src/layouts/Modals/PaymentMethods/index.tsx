'use client';

import { useHorizontalScroll, usePaymentMethods } from '@/hooks';
import { ListTemplate } from '@/layouts/Modals';

import { toCapitalize } from '@/utils';
import { useRef } from 'react';
import styles from './index.module.scss';

const PaymentMethods = () => {
  const ref = useRef<HTMLUListElement | null>(null);
  const _scroll = useHorizontalScroll(ref);
  const { paymentMethods } = usePaymentMethods();
  return (
    <ListTemplate width="20vw" height="25vh" heading="PaymentMethods">
      <ul className={styles.list} ref={ref}>
        {paymentMethods.data?.map((paymentMethod, index) => (
          <li key={index}>
            <button>{toCapitalize(paymentMethod.name ?? '')}</button>
          </li>
        ))}
      </ul>
    </ListTemplate>
  );
};

export default PaymentMethods;
