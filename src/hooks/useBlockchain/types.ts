import { IconType } from 'react-icons';

import { Blockchain } from '@/store/blockchain/types';

export type BlockchainsList = {
  label: Blockchain;
  icon: IconType;
  onClick: () => void;
}[];
