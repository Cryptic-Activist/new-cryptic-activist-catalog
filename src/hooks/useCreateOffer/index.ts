'use client';

import { $createOffer } from '@/store';
import { setCreateOfferValues } from '@/store';
import useApp from '../useApp';
import { useEffect } from 'react';
import { useStore } from '@nanostores/react';

const useCreateOffer = () => {
  const createOffer = useStore($createOffer);
  const {
    app: { defaults },
  } = useApp();

  useEffect(() => {
    setCreateOfferValues({
      data: {
        section: { paymentMethod: true },
        fiat: defaults.fiat,
        cryptocurrency: defaults.cryptocurrency,
      },
    });
  }, [defaults.cryptocurrency, defaults.fiat]);

  return { createOffer, setCreateOfferValues };
};

export default useCreateOffer;
