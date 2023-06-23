export type PaymentMethod = {
  id: string;
  name: string;
  symbol: string;
};

export type PaymentMethodsState = {
  data?: PaymentMethod[];
  loading: boolean;
  fetched: boolean;
  errors: string[];
};

export type PaymentMethodsSetter = PaymentMethodsState;
