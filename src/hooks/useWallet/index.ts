'use client';

import { BRAVE_WALLET, COINBASE_WALLET, METAMASK } from '@/constants';
import { Brave, Coinbase, MetaMask } from '@/assets';
import { useEffect, useState } from 'react';

import { copyToClipboard } from '@/utils';
import useBlockchain from '../useBlockchain';
import useNavigationBar from '../useNavigationBar';
import useUser from '../useUser';

const useWallet = () => {
  const [isOpened, setIsOpened] = useState(false);
  const [isCopied, setIsCopied] = useState(false);
  const [providerImage, setProviderImage] = useState('');

  const { toggleDrawer } = useNavigationBar();
  const { blockchain, onDisconnectWallet } = useBlockchain();
  const { user } = useUser();

  const closeWallet = () => {
    setIsOpened((prev) => !prev);
    setTimeout(() => {
      toggleDrawer('wallet');
    }, 600);
  };

  const onCopyAddress = () => {
    copyToClipboard(blockchain.account?.address);
    setIsCopied((prev) => !prev);
  };

  useEffect(() => {
    setTimeout(() => {
      setIsCopied(false);
    }, 1500);
  }, [isCopied]);

  useEffect(() => {
    const getProviderImage = (providerName: string) => {
      switch (providerName) {
        case METAMASK: {
          return MetaMask.src;
        }
        case BRAVE_WALLET: {
          return Brave.src;
        }
        case COINBASE_WALLET: {
          return Coinbase.src;
        }
      }
    };

    if (blockchain.wallet) {
      const providerImage = getProviderImage(blockchain.wallet);
      setProviderImage(providerImage);
    }
  }, [blockchain.wallet]);

  return {
    onCopyAddress,
    closeWallet,
    onDisconnectWallet,
    user,
    blockchain,
    isCopied,
    isOpened,
    provider: {
      image: providerImage,
      name: blockchain.wallet,
    },
  };
};

export default useWallet;
