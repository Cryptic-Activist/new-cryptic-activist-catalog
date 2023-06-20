import {
  $cryptocurrencies,
  getCryptocurrencies as getCryptocurrenciesStore,
} from '@/store';
import { useStore } from '@nanostores/react';
import { CryptocurrencyId } from './types';

const useCryptocurrency = () => {
  const cryptocurrencies = useStore($cryptocurrencies);

  const getCryptocurrencies = () => {
    getCryptocurrenciesStore();
  };

  const getCryptocurrency = (id: CryptocurrencyId) => {
    if (!cryptocurrencies.data) {
      return null;
    }

    const cryptocurrency = cryptocurrencies.data.filter((crypto) => {
      crypto.id === id;
    });

    const hasFound = cryptocurrency.length > 0;

    if (!hasFound) {
      return null;
    }

    return cryptocurrency[0];
  };

  return { cryptocurrencies, getCryptocurrencies, getCryptocurrency };
};

export default useCryptocurrency;
