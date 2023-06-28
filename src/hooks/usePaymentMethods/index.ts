import { useApp } from '@/hooks';
import {
  $paymentMethodCategories,
  $paymentMethods,
  getPaymentMethodCategories as getPaymentMethodCategoriesStore,
  getPaymentMethodsByCategory as getPaymentMethodsByCategoryStore,
  getPaymentMethods as getPaymentMethodsStore,
} from '@/store';
import { PaymentMethod } from '@/store/paymentMethod/types';
import { toLowerCase } from '@/utils';
import { useStore } from '@nanostores/react';
import { useState } from 'react';

const usePaymentMethods = () => {
  const { setValue } = useApp();

  const paymentMethods = useStore($paymentMethods);
  const paymentMethodCategories = useStore($paymentMethodCategories);
  const [paymentMethodsList, setPaymentMethodsList] = useState(
    paymentMethods.data
  );

  const getPaymentMethods = () => {
    getPaymentMethodsStore();
  };

  const getPaymentMethodCategories = () => {
    getPaymentMethodCategoriesStore();
  };

  const getPaymentMethodsByCategories = (categoryId: string) => {
    getPaymentMethodsByCategoryStore(categoryId);
  };

  const setPaymentMethod = (paymentMethod: PaymentMethod) => {
    setValue({
      defaults: {
        paymentMethod: { id: paymentMethod.id, name: paymentMethod.name },
      },
    });
  };

  // const getPaymentMethod = (symbol: FiatSymbol) => {
  //   if (!paymentMethods.data) {
  //     return null;
  //   }

  //   const paymentMethod = paymentMethods.data.filter(
  //     (f) => f.symbol === symbol
  //   );

  //   const hasFound = paymentMethod.length > 0;

  //   if (!hasFound) {
  //     return null;
  //   }

  //   return paymentMethod[0];
  // };

  const filterPaymentMethods = (term: string) => {
    if (!paymentMethods.data) return;
    const filtered = paymentMethods.data.filter((paymentMethod) => {
      const lowerFiatName = toLowerCase(paymentMethod.name);
      const lowerTerm = toLowerCase(term);

      return lowerFiatName.includes(lowerTerm);
    });

    setPaymentMethodsList(filtered);
  };

  return {
    paymentMethods,
    paymentMethodCategories,
    paymentMethodsList,
    getPaymentMethods,
    // getPaymentMethod,
    getPaymentMethodCategories,
    getPaymentMethodsByCategories,
    setPaymentMethod,
    filterPaymentMethods,
  };
};

export default usePaymentMethods;
