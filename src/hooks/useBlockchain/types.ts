import { Blockchain } from '@/store/blockchain/types';

export type BlockchainsList = {
  label: Blockchain;
  icon: string;
  onClick: () => void;
}[];
