import React, { FC } from 'react';

import { FaSearch } from 'react-icons/fa';
import { SelectPaymentMethodProps } from './types';
import styles from './index.module.scss';
import { usePaymentMethods } from '@/hooks';

const SelectPaymentMethod: FC<SelectPaymentMethodProps> = ({
  handlePaymentMethodCategory,
  handlePaymentMethodSelection,
}) => {
  const {
    paymentMethodCategories,
    paymentMethods,
    getPaymentMethodsByCategory,
  } = usePaymentMethods(true);

  console.log({ paymentMethodCategories });

  return (
    <div className={styles.container}>
      <h3>Search all payment methods</h3>
      <div className={styles.searchContainer}>
        <input className={styles.searchInput} />
        <button className={styles.searchButton}>
          <FaSearch size={16} />
        </button>
      </div>
      <div className={styles.listContainer}>
        <ul className={styles.categoriesList}>
          {paymentMethodCategories.data?.map((category) => (
            <li key={category.id}>
              <button onClick={() => getPaymentMethodsByCategory(category.id)}>
                {category.name}
              </button>
            </li>
          ))}
        </ul>
        <ul className={styles.paymentMethodsList}>
          {paymentMethods.data?.map((paymentMethod) => (
            <li key={paymentMethod.id}>
              <button>{paymentMethod.name}</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SelectPaymentMethod;
