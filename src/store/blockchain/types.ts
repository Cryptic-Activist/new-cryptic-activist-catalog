import { BrowserProvider } from 'ethers';

export type Blockchain = 'ethereum' | 'polygon' | 'solana';

export type BlockchainState = {
  blockchain: Blockchain | null;
  wallet: string | null;
  provider: BrowserProvider | null;
};

export type BlockchainSetter = {
  blockchain?: Blockchain | null;
  wallet?: string | null;
  provider?: BrowserProvider | null;
};

export type SetBlockchainParam = Blockchain;

export type SetEthereumProviderParam = BrowserProvider;
