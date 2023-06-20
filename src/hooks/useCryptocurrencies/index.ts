import {
  $cryptocurrencies,
  getCryptocurrencies as getCryptocurrenciesStore,
} from '@/store';
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

  return { cryptocurrencies, getCryptocurrencies, getCryptocurrency };
};

export default useCryptocurrency;
