'use client';
import { useStore } from '@nanostores/react';

import {
  $app,
  setCurrentPrice as setCurrentPriceStore,
  setValue as setValueStore,
} from '@/store';
import { Value } from '@/store/app/types';

const useApp = () => {
  const app = useStore($app);

  const setValue = (value: Value) => {
    setValueStore(value);
  };

  const setCurrentPrice = async () => {
    if (app.defaults.cryptocurrency?.coingeckoId && app.defaults.fiat?.symbol) {
      setCurrentPriceStore(
        app.defaults.cryptocurrency?.coingeckoId,
        app.defaults.fiat?.symbol
      );
    }
  };

  return { app, setValue, setCurrentPrice };
};

export default useApp;
