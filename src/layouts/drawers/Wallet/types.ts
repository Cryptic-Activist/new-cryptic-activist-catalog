import { Address } from '@/store/blockchain/types';

export type ValueContainerProps = {
  label: string;
  value: string | number;
};

export type AccountInfoProps = {
  address?: Address;
  profileColor: `#${number}`;
  isCopied: boolean;
  provider?: {
    image?: string;
    name?: string;
  };
  onCopyAddress: () => void;
};
