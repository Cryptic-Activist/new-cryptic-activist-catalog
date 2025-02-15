import { map } from 'nanostores';

import type {
  Account,
  BlockchainSetter,
  BlockchainState,
  SetBlockchainParam,
  SetEthereumProviderParam,
  Wallet,
} from './types';

export const $blockchain = map<BlockchainState>();

const setter = ({
  blockchain: bc,
  wallet,
  provider,
  account,
}: BlockchainSetter) => {
  const blockchain = $blockchain.get();

  $blockchain.set({
    blockchain: bc ?? blockchain.blockchain,
    wallet: wallet ?? blockchain.wallet,
    provider: provider ?? blockchain.provider,
    account: account ?? blockchain.account,
  });
};

export const setBlockchain = async (blockchain: SetBlockchainParam) => {
  setter({ blockchain });
};

export const setProvider = async (provider: SetEthereumProviderParam) => {
  setter({ provider });
};

export const setWallet = async (wallet: Wallet) => {
  setter({ wallet });
};

export const setAccount = async (account: Account) => {
  setter({ account });
};
