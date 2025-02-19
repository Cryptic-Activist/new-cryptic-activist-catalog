import { Connector } from 'wagmi';

export type Address = `0x${string}`;

export type Account = {
  address: Address;
};

export type Balance = {
  decimals: number;
  formatted: string;
  symbol: string;
  value: bigint;
};

export type BlockchainState = {
  connector?: Connector;
  chain?: any;
  wallet?: string;
  provider?: any;
  account?: Account;
  balance?: Balance;
};

export type BlockchainSetter = {
  connector?: Connector;
  chain?: any;
  wallet?: string;
  provider?: any;
  account?: Account;
  balance?: Balance;
};

export type SetChainParam = any;

export type SetProviderParam = any;
