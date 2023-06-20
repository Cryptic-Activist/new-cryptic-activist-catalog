'use client';

import { useEffect } from 'react';

import { DEFAULT_CRYPTOCURRENCY_ID, DEFAULT_FIAT_SYMBOL } from '@/constants';
import { useApp, useCryptocurrencies, useFiats } from '@/hooks';
import { CryptocurrencyCoinGeckoId, FiatSymbol } from './types';

const InitialSettings = () => {
  const { getFiats, getFiat, fiats } = useFiats();
  const { getCryptocurrencies, getCryptocurrency, cryptocurrencies } =
    useCryptocurrencies();
  const { setValue } = useApp();

  const setDefaultCryptocurrency = (coinGeckoId: CryptocurrencyCoinGeckoId) => {
    const cryptocurrency = getCryptocurrency(coinGeckoId);

    setValue({
      defaults: {
        cryptocurrency: {
          coingeckoId: cryptocurrency?.coingeckoId!,
          id: cryptocurrency?.id!,
          name: cryptocurrency?.name!,
          symbol: cryptocurrency?.symbol!,
        },
      },
    });
  };

  const setDefaultFiat = (symbol: FiatSymbol) => {
    const fiat = getFiat(symbol);
    setValue({
      defaults: {
        fiat: {
          id: fiat?.id!,
          name: fiat?.name!,
          symbol: fiat?.symbol!,
        },
      },
    });
  };

  useEffect(() => {
    getCryptocurrencies();
    getFiats();
  }, []);

  useEffect(() => {
    if (cryptocurrencies.data) {
      setDefaultCryptocurrency(DEFAULT_CRYPTOCURRENCY_ID);
    }
  }, [cryptocurrencies.data]);

  useEffect(() => {
    if (fiats.data) {
      setDefaultFiat(DEFAULT_FIAT_SYMBOL);
    }
  }, [fiats.data]);

  return <></>;
};

export default InitialSettings;
