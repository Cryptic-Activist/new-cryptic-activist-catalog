'use client';

import { BrowserProvider, parseUnits } from 'ethers';
import { useEffect } from 'react';
import { FaBitcoin } from 'react-icons/fa6';

import { $blockchain, setBlockchain } from '@/store';
import { useStore } from '@nanostores/react';

import { BlockchainsList } from './types';

const useBlockchain = () => {
  const blockchain = useStore($blockchain);

  const connectToEthereum = () => {
    setBlockchain('ethereum');
  };

  const connectToPolygon = () => {
    setBlockchain('polygon');
  };

  const connectToSolana = () => {
    setBlockchain('solana');
  };

  const loadBlockchainData = async () => {
    // @ts-ignore
    if (window && !window.ethereum) {
      console.log('Metamask is not installed');
      return;
    }

    // @ts-ignore
    const provider = new BrowserProvider(window.ethereum);

    console.log({ provider, network: await provider.getNetwork() });
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

  console.log({ blockchain });

  useEffect(() => {
    loadBlockchainData().then();
  }, []);

  return { blockchain, blockchainsList, setBlockchain };
};

export default useBlockchain;
