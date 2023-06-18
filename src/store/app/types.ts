import { Cryptocurrency } from '@/store/cryptocurrency/types';
import { Fiat } from '@/store/fiat/types';

type Dimensions = [number, number];

type Type = 'buy' | 'sell';

type Defaults = {
  fiat: Fiat | null;
  cryptocurrency: Cryptocurrency | null;
};

export type AppState = {
  isMobile: boolean;
  dimensions: Dimensions;
  warning: string[];
  type: Type;
  defaults: Defaults;
};

export type AppStateSetter = {
  isMobile?: boolean;
  dimensions?: Dimensions;
  warnings?: string[];
  type?: Type;
  defaults?: {
    fiat?: Fiat | null;
    cryptocurrency?: Cryptocurrency | null;
  };
};
