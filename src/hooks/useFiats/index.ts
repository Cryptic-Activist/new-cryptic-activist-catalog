import { $fiats, getFiats as getFiatsStore, setValue } from '@/store';
import { Fiat } from '@/store/fiat/types';
import { toLowerCase } from '@/utils';
import { useStore } from '@nanostores/react';
import { useState } from 'react';
import { FiatSymbol } from './types';

const useFiats = () => {
  const fiats = useStore($fiats);
  const [fiatsList, setFiatsList] = useState(fiats.data);

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

  const filterFiats = (term: string) => {
    if (!fiats.data) return;
    const filtered = fiats.data.filter((fiat) => {
      const lowerFiatName = toLowerCase(fiat.name);
      const lowerFiatSymbol = toLowerCase(fiat.symbol);
      const lowerTerm = toLowerCase(term);

      return (
        lowerFiatName.includes(lowerTerm) ||
        lowerFiatSymbol.includes(lowerTerm) ||
        `${lowerFiatSymbol} - ${lowerFiatName}`.includes(lowerTerm)
      );
    });

    setFiatsList(filtered);
  };

  return { fiats, fiatsList, getFiats, getFiat, setFiat, filterFiats };
};

export default useFiats;
