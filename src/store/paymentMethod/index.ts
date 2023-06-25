import { map } from 'nanostores';

import type {
  PaymentMethod,
  PaymentMethodSetter,
  PaymentMethodState,
} from './types';

export const $paymentMethod = map<PaymentMethodState>({});

const setter = ({ id, name, symbol }: PaymentMethodSetter) => {
  $paymentMethod.set({
    id,
    name,
    symbol,
  });
};

export const setPaymentMethod = (paymentMethod: PaymentMethod) => {
  setter(paymentMethod);
};
