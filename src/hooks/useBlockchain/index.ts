'use client';

import {
  $blockchain,
  setAccount,
  setChain,
  setConnector,
  setProvider,
  setWallet,
  toggleModal,
} from '@/store';
import { EthereumLogo, PolygonLogo, SolanaLogo } from '@/assets';
import { useStore } from '@nanostores/react';
import { Connector, useConnect, WagmiProvider, useAccount } from 'wagmi';

import { connectWallet } from '@/services/blockchain';

const useBlockchain = () => {
  const blockchain = useStore($blockchain);
  const { connect, connectors } = useConnect();
  const { chain } = useAccount();

  const onConnectWallet = async (connector: Connector) => {
    const wallet = await connectWallet(connector);

    setProvider(wallet.provider);
    setConnector(wallet.connector);
    setAccount({ address: wallet.accountAddress });
    setChain(chain);
    setWallet(wallet.connector.name);
    connect({ connector });
    toggleModal('blockchain');
  };

  console.log(blockchain);

  return {
    blockchain,
    connectors,
    connect,
    setProvider,
    onConnectWallet,
  };
};

export default useBlockchain;
