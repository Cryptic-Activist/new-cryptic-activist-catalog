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
import { BRAVE_WALLET, WAGNI_LOCALSTORAGE } from '@/constants';
import { Connector, useAccountEffect, useBalance, useConnect } from 'wagmi';
import { getCookie, removeLocalStorage } from '@/utils';

import { useEffect } from 'react';
import { useStore } from '@nanostores/react';
import { useUser } from '@/hooks';

const useBlockchain = () => {
  const blockchain = useStore($blockchain);
  const { connect, connectors } = useConnect();
  const balance = useBalance({ address: blockchain.account?.address });
  const { isLoggedIn } = useUser();

  const resetWalletNavigation = () => {
    resetNavigationBar();
    resetBlockchain();
  };

  const onConnectWallet = async (connector: Connector) => {
    console.log({ connector });
    connect({ connector });
    toggleModal('blockchain');
  };

  const clearConnectedWalletLocalStorage = () => {
    WAGNI_LOCALSTORAGE.forEach((storage) => {
      console.log(storage);
      removeLocalStorage(storage);
    });
  };

  const onDisconnectWallet = async () => {
    if (blockchain.connector?.name === BRAVE_WALLET) {
      resetWalletNavigation();
      clearConnectedWalletLocalStorage();
    }
    const disconnected = await blockchain.connector?.disconnect();
    console.log({ disconnected });
  };

  const isWalletConnected =
    isLoggedIn() &&
    blockchain.provider &&
    blockchain.account?.address &&
    blockchain.account?.address?.length > 0;

  // console.log({
  //   isWalletConnected,
  //   provider: blockchain.provider,
  //   blockchainAddress: blockchain.account?.address,
  //   blockchainAddressLength: blockchain.account?.address?.length,
  // });

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
      resetWalletNavigation();
    },
  });

  const onReconnectWallet = () => {
    // const walletCookie = getCookie();
  };

  useEffect(() => {
    if (balance.isSuccess) {
      setBalance(balance.data);
    }
  }, [balance.isSuccess]);

  useEffect(() => {}, []);

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
