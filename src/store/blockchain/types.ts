import { Connector, WagmiProvider } from 'wagmi';

export type Account = {
  address: string;
};

export type BlockchainState = {
  connector: Connector;
  chain: any;
  wallet: string;
  provider: typeof WagmiProvider;
  account: Account;
};

export type BlockchainSetter = {
  connector?: Connector;
  chain?: any;
  wallet?: string;
  provider?: typeof WagmiProvider;
  account?: Account;
};

export type SetChainParam = any;

export type SetProviderParam = typeof WagmiProvider;
