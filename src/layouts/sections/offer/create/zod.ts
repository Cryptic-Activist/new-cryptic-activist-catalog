import { z } from 'zod';

export const ZodFiat = z.object({
  id: z.string().min(2),
  name: z.string().min(2),
  symbol: z.string().min(2),
});
export const ZodCryptocurrency = z.object({
  coingeckoId: z.string().min(2),
  id: z.string().min(2),
  name: z.string().min(2),
  symbol: z.string().min(2),
});
export const ZodOfferType = z.string().min(3);
export const ZodPaymentMethodId = z.string().min(2);
export const ZodTradePricingType = z.string().min(1);
export const ZodListAt = z.number().min(1);
export const ZodLimitMax = z.number().min(1);
export const ZodLimitMin = z.number().min(1);
export const ZodTimeLimit = z.number().min(1);
