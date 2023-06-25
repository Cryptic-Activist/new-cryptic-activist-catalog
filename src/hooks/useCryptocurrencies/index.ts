import {
  $cryptocurrencies,
  getCryptocurrencies as getCryptocurrenciesStore,
  setValue,
} from '@/store';
import { Cryptocurrency } from '@/store/cryptocurrency/types';
import { useStore } from '@nanostores/react';
import { CryptocurrencyCoinGeckoId } from './types';

const useCryptocurrency = () => {
  const cryptocurrencies = useStore($cryptocurrencies);

  const getCryptocurrencies = () => {
    getCryptocurrenciesStore();
  };

  const getCryptocurrency = (coingeckoId: CryptocurrencyCoinGeckoId) => {
    if (!cryptocurrencies.data) {
      return null;
    }

    const cryptocurrency = cryptocurrencies.data.filter(
      (crypto) => crypto.coingeckoId === coingeckoId
    );

    const hasFound = cryptocurrency.length > 0;

    if (!hasFound) {
      return null;
    }

    return cryptocurrency[0];
  };

  const setCryptocurrency = (cryptocurrency: Cryptocurrency) => {
    setValue({
      defaults: {
        cryptocurrency: {
          id: cryptocurrency.id,
          name: cryptocurrency.name,
          symbol: cryptocurrency.symbol,
          coingeckoId: cryptocurrency.coingeckoId,
        },
      },
    });
  };

  return {
    cryptocurrencies,
    getCryptocurrencies,
    getCryptocurrency,
    setCryptocurrency,
  };
};

export default useCryptocurrency;
