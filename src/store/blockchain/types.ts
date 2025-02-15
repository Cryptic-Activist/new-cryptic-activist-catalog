import { BrowserProvider } from 'ethers';

export type Blockchain = 'ethereum' | 'polygon' | 'solana';

export type Wallet = 'metamask' | 'trust' | 'coinbase';

export type Account = {
  address: string;
};

export type BlockchainState = {
  blockchain: Blockchain | null;
  wallet: Wallet | null;
  provider: BrowserProvider | null;
  account: Account | null;
};

export type BlockchainSetter = {
  blockchain?: Blockchain | null;
  wallet?: Wallet | null;
  provider?: BrowserProvider | null;
  account?: Account | null;
};

export type SetBlockchainParam = Blockchain;

export type SetEthereumProviderParam = BrowserProvider;
