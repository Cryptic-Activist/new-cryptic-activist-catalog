import {
  $cryptocurrencies,
  getCryptocurrencies as getCryptocurrenciesStore,
} from '@/store';
import { useStore } from '@nanostores/react';

const useCryptocurrency = () => {
  const cryptocurrencies = useStore($cryptocurrencies);

  const getCryptocurrencies = () => {
    getCryptocurrenciesStore();
  };

  return { cryptocurrencies, getCryptocurrencies };
};

export default useCryptocurrency;
