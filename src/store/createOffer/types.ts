import { Cryptocurrency } from '@/store/cryptocurrency/types';
import { Fiat } from '@/store/fiat/types';

type PaymentMethodType = 'sell' | 'buy';

type Category = any;

type TradePricingType = 'market' | 'fixed';

export type CreateOffer = {
  section?: {
    paymentMethod?: boolean;
    tradePricing?: boolean;
    tradeInstructions?: boolean;
  };
  cryptocurrency?: Cryptocurrency | null;
  fiat?: Fiat | null;
  paymentMethodType?: PaymentMethodType;
  category?: Category | null;
  selection?: string | null;
  isPaymentMethodCompleted?: boolean;
  tradePricingType?: TradePricingType;
  listAt?: number;
  limitMin?: number;
  limitMax?: number;
  timeLimit?: number;
  isTradePricingCompleted?: boolean;
  tags?: string[];
  label?: string;
  terms?: string;
  instructions?: string;
  isTradeInstructionsCompleted?: boolean;
  isFilled?: boolean;
  isSubmitted?: boolean;
};

export type CreateOfferState = {
  data?: CreateOffer;
  loading: boolean;
  fetched: boolean;
  errors: string[];
};

export type CreateOfferSetter = {
  data?: CreateOffer;
  loading?: boolean;
  fetched?: boolean;
  errors?: string[];
};

export type SetCreateOfferValues = (params: CreateOfferSetter) => void;
