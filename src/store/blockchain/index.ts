import { map } from 'nanostores';

import type {
  BlockchainSetter,
  BlockchainState,
  SetBlockchainParam,
  SetEthereumProviderParam,
} from './types';

export const $blockchain = map<BlockchainState>();

const setter = ({ blockchain: bc, wallet, provider }: BlockchainSetter) => {
  const blockchain = $blockchain.get();

  $blockchain.set({
    blockchain: bc ?? blockchain.blockchain,
    wallet: wallet ?? blockchain.wallet,
    provider: provider ?? blockchain.provider,
  });
};

export const setBlockchain = async (blockchain: SetBlockchainParam) => {
  setter({ blockchain });
};

export const setEthereumProvider = async (
  provider: SetEthereumProviderParam
) => {
  setter({ provider });
};
