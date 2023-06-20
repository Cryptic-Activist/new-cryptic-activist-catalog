'use client';

import { useEffect } from 'react';

import { DEFAULT_CRYPTOCURRENCY_ID, DEFAULT_FIAT_SYMBOL } from '@/constants';
import { useApp, useCryptocurrencies, useFiats } from '@/hooks';
import { CryptocurrencyId, FiatSymbol } from './types';

const useInitialFetch = () => {
  const { getFiats, getFiat, fiats } = useFiats();
  const { getCryptocurrencies, getCryptocurrency, cryptocurrencies } =
    useCryptocurrencies();
  const { setValue } = useApp();

  const setDefaultCryptocurrency = (id: CryptocurrencyId) => {
    const cryptocurrency = getCryptocurrency(id);

    setValue({
      defaults: {
        cryptocurrency,
      },
    });
  };

  const setDefaultFiat = (symbol: FiatSymbol) => {
    const fiat = getFiat(symbol);
    setValue({
      defaults: {
        fiat,
      },
    });
  };

  useEffect(() => {
    getCryptocurrencies();
    getFiats();
  }, []);

  useEffect(() => {
    setDefaultCryptocurrency(DEFAULT_CRYPTOCURRENCY_ID);
  }, [cryptocurrencies.data]);

  useEffect(() => {
    setDefaultFiat(DEFAULT_FIAT_SYMBOL);
  }, [fiats.data]);

  return <></>;
};

export default useInitialFetch;
