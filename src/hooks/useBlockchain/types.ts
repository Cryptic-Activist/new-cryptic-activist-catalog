import { Blockchain } from '@/store/blockchain/types';

export type BlockchainsList = {
  label: Blockchain;
  icon: string;
  onConnect: () => void;
  onClick: () => void;
}[];
