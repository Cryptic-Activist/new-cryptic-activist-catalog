'use client';

import {
  $blockchain,
  setAccount,
  setBlockchain,
  setProvider,
  setWallet,
  toggleModal,
} from '@/store';
import { EthereumLogo, PolygonLogo, SolanaLogo } from '@/assets';
import { useStore } from '@nanostores/react';

import useNavigationBar from '../useNavigationBar';
import { WalletName, WalletsList } from './types';
import { useQueries } from '@tanstack/react-query';
import { getAccountAddress, getProvider } from '@/services/blockchain';
import { useEffect } from 'react';
import { setLocalStorage } from '@/utils';

const useBlockchain = () => {
  const blockchain = useStore($blockchain);
  const { resetNavigationBar } = useNavigationBar();

  const checkForMetamask = async () => {
    const provider = await getProvider();

    if (!provider) {
      throw Error('Unable to get the provider');
    }

    const { ethereum } = window;

    if (!ethereum.isMetaMask) {
      throw Error('Unable to get MetaMask');
    }

    return provider;
  };

  const checkForTrustWallet = async () => {
    const provider = await getProvider();

    if (!provider) {
      throw Error('Unable to get the provider');
    }

    const { ethereum } = window;

    if (!ethereum.isTrust) {
      throw Error('Unable to get Trust Wallet');
    }

    return provider;
  };

  const checkForCoinbase = async () => {
    const provider = await getProvider();

    if (!provider) {
      throw Error('Unable to get the provider');
    }

    const { ethereum } = window;

    if (!ethereum.isCoinbaseWallet) {
      throw Error('Unable to get Coinbase Walelt');
    }

    return provider;
  };

  const selectWallet = async (wallet: WalletName) => {
    const provider = await getProvider();

    if (provider) {
      setProvider(provider);
      setWallet(wallet);
      setLocalStorage('connectedWallet', wallet);
    }

    toggleModal('blockchain');
  };

  const walletsList: WalletsList = [
    {
      label: 'metamask',
      onConnect: checkForMetamask,
      icon: EthereumLogo,
      onClick: selectWallet,
    },
    {
      label: 'trust',
      onConnect: checkForTrustWallet,
      icon: PolygonLogo,
      onClick: selectWallet,
    },
    {
      label: 'coinbase',
      onConnect: checkForCoinbase,
      icon: SolanaLogo,
      onClick: selectWallet,
    },
  ];

  useEffect(() => {
    if (blockchain.provider) {
      getAccountAddress(blockchain.provider).then((accountAddress) => {
        setAccount({ address: accountAddress });
      });
    }
  }, [blockchain.provider]);

  const queries = useQueries({
    queries: walletsList.map((wallet) => ({
      queryKey: ['wallet', wallet.label],
      queryFn: wallet.onConnect,
      staleTime: Infinity,
    })),
  });

  return {
    blockchain,
    walletsList,
    queries,
    setBlockchain,
    setProvider,
    getAccountAddress,
    selectWallet,
  };
};

export default useBlockchain;
