import { $fiats, getFiats as getFiatsStore, setValue } from '@/store';
import { Fiat } from '@/store/fiat/types';
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

    const fiat = fiats.data.filter((f) => f.symbol === symbol);

    const hasFound = fiat.length > 0;

    if (!hasFound) {
      return null;
    }

    return fiat[0];
  };

  const setFiat = (fiat: Fiat) => {
    setValue({
      defaults: {
        fiat: { id: fiat.id, name: fiat.name, symbol: fiat.symbol },
      },
    });
  };

  return { fiats, getFiats, getFiat, setFiat };
};

export default useFiats;
