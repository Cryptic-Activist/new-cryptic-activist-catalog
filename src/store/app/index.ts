import { map } from 'nanostores';

import { fetchCurrentPrice } from '@/services/app';

import { AppState, AppStateSetter, SetCurrentPrice, Value } from './types';

export const $app = map<AppState>({
  defaults: {
    cryptocurrency: null,
    fiat: null,
    paymentMethod: null,
  },
  dimensions: [0, 0],
  isMobile: false,
  type: 'buy',
  warning: [],
  currentPrice: null,
});

const setter = ({
  defaults,
  dimensions,
  isMobile,
  type,
  warnings,
  currentPrice,
}: AppStateSetter) => {
  const app = $app.get();

  $app.set({
    defaults: {
      fiat: defaults?.fiat ?? app.defaults.fiat,
      cryptocurrency: defaults?.cryptocurrency ?? app.defaults.cryptocurrency,
      paymentMethod: defaults?.paymentMethod ?? app.defaults.paymentMethod,
    },
    dimensions: dimensions ?? app.dimensions,
    isMobile: isMobile ?? app.isMobile,
    type: type ?? app.type,
    warning: warnings ?? app.warning,
    currentPrice: currentPrice ?? app.currentPrice,
  });
};

export const setValue = (value: Value) => {
  setter(value);
};

export const setCurrentPrice: SetCurrentPrice = async (id, fiatSymbol) => {
  const currentPrice = await fetchCurrentPrice(id, fiatSymbol);

  if (!currentPrice) {
    return;
  }

  const crypto = Object.values(currentPrice.data)[0] as object;
  const price: number = Object.values(crypto)[0];

  setter({ currentPrice: price });
};
