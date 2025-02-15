import { BrowserProvider } from 'ethers';

export const getProvider = async (): Promise<BrowserProvider | null> => {
  if (window && !window.ethereum) {
    return null;
  }

  const provider = new BrowserProvider(window.ethereum);
  return provider;
};

export const getAccountAddress = async (provider: BrowserProvider) => {
  const account = await provider.send('eth_requestAccounts', []);
  const accountAddress = account[0] as string;
  return accountAddress;
};
