'use client';

import { BrowserProvider } from 'ethers';

import { $blockchain, setBlockchain, setEthereumProvider } from '@/store';
import { BitcoinLogo, EthereumLogo, PolygonLogo, SolanaLogo } from '@/assets';
import { useStore } from '@nanostores/react';

import useNavigationBar from '../useNavigationBar';
import { BlockchainsList } from './types';
import { useQueries, useQuery } from '@tanstack/react-query';

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

  const checkForEthereumProvider = async () => {
    const provider = await loadEthereumBlockchainData();

    if (!provider) {
      throw Error('Unable to connect to Ethereum blockchain');
    }

    // setBlockchain('ethereum');
    // setEthereumProvider(provider);
    resetNavigationBar();
    return provider;
  };

  const checkForPolygonProvider = () => {
    setBlockchain('polygon');
    throw Error('Unable to connect to Polygon blockchain');
  };

  const checkForSolanaProvider = () => {
    setBlockchain('solana');
    throw Error('Unable to connect to Solana blockchain');
  };

  const getAccountAddress = async () => {
    const account = await blockchain.provider?.send('eth_requestAccounts', []);
    console.log({ account: account[0] });
  };

  const blockchainsList: BlockchainsList = [
    {
      label: 'ethereum',
      onConnect: checkForEthereumProvider,
      icon: EthereumLogo,
      onClick: getAccountAddress,
    },
    {
      label: 'polygon',
      onConnect: checkForPolygonProvider,
      icon: PolygonLogo,
      onClick: () => null,
    },
    {
      label: 'solana',
      onConnect: checkForSolanaProvider,
      icon: SolanaLogo,
      onClick: () => null,
    },
  ];

  const queries = useQueries({
    queries: blockchainsList.map((chain) => ({
      queryKey: ['blockchain', chain.label],
      queryFn: chain.onConnect,
      staleTime: Infinity,
    })),
  });

  return {
    blockchain,
    blockchainsList,
    queries,
    setBlockchain,
    loadEthereumBlockchainData,
    getAccountAddress,
  };
};

export default useBlockchain;
