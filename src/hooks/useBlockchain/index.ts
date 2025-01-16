'use client';

import { BrowserProvider } from 'ethers';
import { FaBitcoin } from 'react-icons/fa6';

import { $blockchain, setBlockchain, setEthereumProvider } from '@/store';
import { useStore } from '@nanostores/react';

import useNavigationBar from '../useNavigationBar';
import { BlockchainsList } from './types';

const useBlockchain = () => {
  const blockchain = useStore($blockchain);
  const { resetNavigationBar } = useNavigationBar();

  const loadEthereumBlockchainData =
    async (): Promise<BrowserProvider | null> => {
      // @ts-ignore
      if (window && !window.ethereum) {
        console.log('Metamask is not installed');
        return null;
      }

      // @ts-ignore
      const provider = new BrowserProvider(window.ethereum);
      return provider;
    };

  const connectToEthereum = async () => {
    const provider = await loadEthereumBlockchainData();

    if (!provider) {
      console.log('Unable to connect to Ethereum blockchain');
      return;
    }

    setBlockchain('ethereum');
    setEthereumProvider(provider);
    resetNavigationBar();
  };

  const getAccountAddress = async () => {
    const account = await blockchain.provider?.send('eth_requestAccounts', []);
    console.log({ account: account[0] });
  };

  const connectToPolygon = () => {
    setBlockchain('polygon');
  };

  const connectToSolana = () => {
    setBlockchain('solana');
  };

  const blockchainsList: BlockchainsList = [
    {
      label: 'ethereum',
      onClick: connectToEthereum,
      icon: FaBitcoin,
    },
    {
      label: 'polygon',
      onClick: connectToPolygon,
      icon: FaBitcoin,
    },
    {
      label: 'solana',
      onClick: connectToSolana,
      icon: FaBitcoin,
    },
  ];

  return {
    blockchain,
    blockchainsList,
    setBlockchain,
    loadEthereumBlockchainData,
    getAccountAddress,
  };
};

export default useBlockchain;
