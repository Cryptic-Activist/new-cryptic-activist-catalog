'use client';

import {
  useHorizontalScroll,
  useNavigationBar,
  usePaymentMethods,
} from '@/hooks';
import { ListTemplate } from '@/layouts/Modals';

import { PaymentMethod } from '@/store/paymentMethod/types';
import { toCapitalize } from '@/utils';
import { useRef } from 'react';
import styles from './index.module.scss';

const PaymentMethods = () => {
  const ref = useRef<HTMLUListElement | null>(null);
  const _scroll = useHorizontalScroll(ref);
  const { paymentMethodsList, setPaymentMethod, filterPaymentMethods } =
    usePaymentMethods();
  const { toggleModal } = useNavigationBar();

  const selectPaymentMethod = (paymentMethod: PaymentMethod) => {
    setPaymentMethod(paymentMethod);
    toggleModal('paymentMethods');
  };

  return (
    <ListTemplate
      width="20vw"
      height="25vh"
      heading="PaymentMethods"
      onFilter={filterPaymentMethods}
    >
      <ul className={styles.list} ref={ref}>
        {paymentMethodsList?.map((paymentMethod, index) => (
          <li key={index}>
            <button onClick={() => selectPaymentMethod(paymentMethod)}>
              {toCapitalize(paymentMethod.name ?? '')}
            </button>
          </li>
        ))}
      </ul>
    </ListTemplate>
  );
};

export default PaymentMethods;
