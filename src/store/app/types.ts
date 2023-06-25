import type { Cryptocurrency } from '@/store/cryptocurrency/types';
import type { Fiat } from '@/store/fiat/types';
import type { PaymentMethod } from '@/store/paymentMethod/types';

type Dimensions = [number, number];

export type Type = 'buy' | 'sell';

type Defaults = {
  fiat: Fiat | null;
  cryptocurrency: Cryptocurrency | null;
  paymentMethod: PaymentMethod | null;
};

type CurrentPrice = number | null;

export type AppState = {
  isMobile: boolean;
  dimensions: Dimensions;
  warning: string[];
  type: Type;
  defaults: Defaults;
  currentPrice: CurrentPrice;
};

export type AppStateSetter = {
  isMobile?: boolean;
  dimensions?: Dimensions;
  warnings?: string[];
  type?: Type;
  defaults?: {
    fiat?: Fiat | null;
    cryptocurrency?: Cryptocurrency | null;
    paymentMethod?: PaymentMethod | null;
  };
  currentPrice?: CurrentPrice;
};

export type Value = AppStateSetter;

export type SetCurrentPrice = (id: string, fiatSymbol: string) => Promise<void>;
