import { $fiats, getFiats as getFiatsStore } from '@/store';
import { useStore } from '@nanostores/react';
import { FiatSymbol } from './types';

const useFiats = () => {
  const fiats = useStore($fiats);

  const getFiats = () => {
    getFiatsStore();
  };

  const getFiat = (symbol: FiatSymbol) => {
    if (!fiats.data) {
      return null;
    }

    const fiat = fiats.data.filter((f) => {
      f.symbol === symbol;
    });

    const hasFound = fiat.length > 0;

    if (!hasFound) {
      return null;
    }

    return fiat[0];
  };
  return { fiats, getFiats, getFiat };
};

export default useFiats;
