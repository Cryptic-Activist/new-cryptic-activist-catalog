import { switchChain } from '@wagmi/core';
import { mainnet } from '@wagmi/core/chains';
import { Connector, WagmiProvider } from 'wagmi';
import { wagmiConfig } from '@/config';

export const getProvider = async (connector: Connector) => {
  const provider = (await connector.getProvider()) as any;
  return provider;
};

export const connectWallet = async (connector: Connector) => {
  const provider = await getProvider(connector);
  const accountAddress = await connector.getAccounts();

  return {
    provider,
    connector,
    accountAddress: accountAddress[0],
  };
};

export const checkInstalledWallet = async (connector: Connector) => {
  const provider = (await connector.getProvider()) as any;

  if (
    provider.isCoinbaseWallet ||
    provider.isMetaMask ||
    provider.isTrust ||
    provider.isBraveWallet ||
    provider.isSafe
  ) {
    return true;
  }

  return false;
};

export const changeChain = async (chainId: 1 | 8453) => {
  await switchChain(wagmiConfig, { chainId });
};
