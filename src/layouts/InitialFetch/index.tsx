'use client';

import { useEffect } from 'react';

import { useCryptocurrencies, useFiats } from '@/hooks';

const InitialFetch = () => {
  const { getFiats } = useFiats();
  const { getCryptocurrencies } = useCryptocurrencies();

  useEffect(() => {
    getCryptocurrencies();
    getFiats();
  }, []);

  return <></>;
};

export default InitialFetch;
