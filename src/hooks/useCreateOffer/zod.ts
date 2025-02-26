import {
  ZodCryptocurrency,
  ZodFiat,
  ZodLimitMax,
  ZodLimitMin,
  ZodListAt,
  ZodOfferType,
  ZodPaymentMethodId,
  ZodTimeLimit,
} from '@/layouts/sections/offer/create/zod';

import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

export const CreateOfferPaymentMethod = z
  .object({
    fiat: ZodFiat,
    cryptocurrency: ZodCryptocurrency,
    offerType: ZodOfferType,
    paymentMethodId: ZodPaymentMethodId,
  })
  .superRefine(({ offerType }, ctx) => {
    if (offerType !== 'sell' && offerType !== 'buy') {
      ctx.addIssue({
        code: 'custom',
        message: "Offer type must be either 'sell' or 'buy'",
        path: ['offerType'],
      });
    }
  });

export const createOfferPaymentMethodResolver = zodResolver(
  CreateOfferPaymentMethod
);

export const CreateOfferTradePricing = z
  .object({
    listAt: ZodListAt,
    limitMax: ZodLimitMax,
    limitMin: ZodLimitMin,
    timeLimit: ZodTimeLimit,
  })
  .superRefine(({ listAt }, ctx) => {
    if (listAt !== 'fixed' && listAt !== 'market') {
      ctx.addIssue({
        code: 'custom',
        message: "Rate type must be either 'fixed' or 'market'",
        path: ['listAt'],
      });
    }
  });

export const createOfferTradePricing = zodResolver(CreateOfferTradePricing);
