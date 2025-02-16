'use client';

import {
  $blockchain,
  resetBlockchain,
  resetNavigationBar,
  setAccount,
  setBalance,
  setChain,
  setConnector,
  setProvider,
  setWallet,
  toggleModal,
} from '@/store';
import { useStore } from '@nanostores/react';
import { Connector, useConnect, useAccountEffect, useBalance } from 'wagmi';

import { useUser } from '@/hooks';
import { useEffect } from 'react';

const useBlockchain = () => {
  const blockchain = useStore($blockchain);
  const { connect, connectors } = useConnect();
  const balance = useBalance({ address: blockchain.account?.address });
  const { isLoggedIn } = useUser();

  const onConnectWallet = async (connector: Connector) => {
    connect({ connector });
    toggleModal('blockchain');
  };

  const onDisconnectWallet = async () => {
    await blockchain.connector?.disconnect();
  };

  const isWalletConnected =
    isLoggedIn() &&
    blockchain.provider &&
    blockchain.account?.address &&
    blockchain.account?.address?.length > 0;

  useAccountEffect({
    async onConnect({ address, chain, connector, isReconnected }) {
      const provider = await connector.getProvider();

      setAccount({ address });
      setChain(chain);
      setConnector(connector);
      setWallet(connector.name);
      setProvider(provider);
    },
    onDisconnect() {
      resetNavigationBar();
      resetBlockchain();
    },
  });

  useEffect(() => {
    if (balance.isSuccess) {
      setBalance(balance.data);
    }
  }, [balance.isSuccess]);

  return {
    blockchain,
    connectors,
    isWalletConnected,
    connect,
    setProvider,
    onConnectWallet,
    onDisconnectWallet,
  };
};

export default useBlockchain;
