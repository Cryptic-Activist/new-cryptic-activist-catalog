'use client';

import {
  $app,
  setCurrentPrice as setCurrentPriceStore,
  setValue,
} from '@/store';
import { useStore } from '@nanostores/react';

const useApp = () => {
  const app = useStore($app);

  const setCurrentPrice = async () => {
    if (app.defaults.cryptocurrency?.coingeckoId && app.defaults.fiat?.symbol) {
      setCurrentPriceStore(
        app.defaults.cryptocurrency?.coingeckoId,
        app.defaults.fiat?.symbol
      );
    }
  };

  console.log({ app });

  return { app, setValue, setCurrentPrice };
};

export default useApp;
