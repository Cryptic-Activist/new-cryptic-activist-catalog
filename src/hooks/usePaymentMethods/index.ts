import { useApp } from '@/hooks';
import {
  $paymentMethodCategories,
  $paymentMethods,
  getPaymentMethodCategories as getPaymentMethodCategoriesStore,
  getPaymentMethodsByCategory as getPaymentMethodsByCategoryStore,
  getPaymentMethods as getPaymentMethodsStore,
} from '@/store';
import { PaymentMethod } from '@/store/paymentMethod/types';
import { useStore } from '@nanostores/react';

const usePaymentMethods = () => {
  const { setValue } = useApp();

  const paymentMethods = useStore($paymentMethods);
  const paymentMethodCategories = useStore($paymentMethodCategories);

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

  return {
    paymentMethods,
    paymentMethodCategories,
    getPaymentMethods,
    // getPaymentMethod,
    getPaymentMethodCategories,
    getPaymentMethodsByCategories,
    setPaymentMethod,
  };
};

export default usePaymentMethods;
