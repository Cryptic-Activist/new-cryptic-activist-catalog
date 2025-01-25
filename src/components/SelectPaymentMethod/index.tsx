'use client';

import React, { FC, useState } from 'react';

import { FaSearch } from 'react-icons/fa';
import { SelectPaymentMethodProps } from './types';
import styles from './index.module.scss';
import { usePaymentMethods } from '@/hooks';

const SelectPaymentMethod: FC<SelectPaymentMethodProps> = ({
  handlePaymentMethod,
}) => {
  const {
    paymentMethodCategories,
    paymentMethods,
    getPaymentMethodsByCategory,
  } = usePaymentMethods(true);

  const [selectedCategoryIndex, setSelectedCategoryIndex] = useState<
    null | number
  >(null);
  const [selectedPaymentMethodIndex, setSelectPaymentMethodIndex] = useState<
    null | number
  >(null);

  const selectCategory = (id: string, index: number) => {
    setSelectedCategoryIndex(index);
    getPaymentMethodsByCategory(id);
  };

  const selectPaymentMethod = (id: string, index: number) => {
    setSelectPaymentMethodIndex(index);
    handlePaymentMethod(id);
  };

  return (
    <div className={styles.container}>
      <div className={styles.searchContainer}>
        <input
          className={styles.searchInput}
          placeholder="Search payment methods"
        />
        <button className={styles.searchButton}>
          <FaSearch size={16} />
        </button>
      </div>
      <div className={styles.listContainer}>
        <ul className={styles.categoriesList}>
          {paymentMethodCategories.data?.map((category, index) => {
            const selected =
              index === selectedCategoryIndex ? styles.selected : '';
            return (
              <li key={category.id} className={selected}>
                <button onClick={() => selectCategory(category.id, index)}>
                  {category.name}
                </button>
              </li>
            );
          })}
        </ul>
        <ul className={styles.paymentMethodsList}>
          {paymentMethods.data?.map((paymentMethod, index) => {
            const selected =
              index === selectedPaymentMethodIndex ? styles.selected : '';
            return (
              <li key={paymentMethod.id} className={selected}>
                <button
                  onClick={() => selectPaymentMethod(paymentMethod.id, index)}
                >
                  {paymentMethod.name}
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default SelectPaymentMethod;
