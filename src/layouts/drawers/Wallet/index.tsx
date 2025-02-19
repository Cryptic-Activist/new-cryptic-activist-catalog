'use client';

import { AccountInfoProps, ValueContainerProps } from './types';
import { BRAVE_WALLET, COINBASE_WALLET, METAMASK } from '@/constants';
import { Brave, Coinbase, MetaMask } from '@/assets';
import { FaChevronRight, FaPowerOff } from 'react-icons/fa';
import React, { FC, useEffect, useState } from 'react';
import { useBlockchain, useNavigationBar, useUser } from '@/hooks';

import { copyToClipboard } from '@/utils';
import styles from './index.module.scss';

const AccountInfo: FC<AccountInfoProps> = ({
  address,
  isCopied,
  onCopyAddress,
  profileColor,
  providerName,
}) => {
  const [providerImage, setProviderImage] = useState();

  useEffect(() => {
    const getProviderImage = () => {
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

    const providerImage = getProviderImage();
    setProviderImage(providerImage);
  }, []);

  return (
    <button
      className={styles.accountInfo}
      type="button"
      onClick={onCopyAddress}
    >
      <div className={styles.profileColorProvider}>
        <span
          className={styles.profileColor}
          style={{
            backgroundColor: profileColor,
          }}
        />
        <div
          className={styles.provider}
          style={{
            backgroundImage: `url(${providerImage})`,
          }}
          title={providerName}
        />
      </div>

      <p className={styles.address}>{isCopied ? 'Address copied' : address}</p>
    </button>
  );
};

const ValueContainer: FC<ValueContainerProps> = ({ label, value }) => {
  const valueType = typeof value;
  const isValueNumber = valueType === 'number';
  const isValueString = valueType === 'string';

  return (
    <div className={styles.valueContainer}>
      <label className={styles.label}>{label}</label>
      <span
        className={`${isValueNumber ? styles.valueNumber : ''} ${
          isValueString ? styles.valueString : ''
        }`}
      >
        {value}
      </span>
    </div>
  );
};

const Wallet = () => {
  const [isOpened, setIsOpened] = useState(false);
  const [isCopied, setIsCopied] = useState(false);

  const { toggleDrawer, navigationBar } = useNavigationBar();
  const { blockchain, onDisconnectWallet } = useBlockchain();
  const { user } = useUser();

  const walletStyle = isOpened ? styles.closed : styles.opened;

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

  return (
    <aside className={`${styles.container} ${walletStyle}`}>
      <button className={styles.closeButton} onClick={closeWallet}>
        <FaChevronRight size={18} />
      </button>
      <div className={styles.content}>
        <div className={styles.header}>
          <AccountInfo
            address={blockchain.account?.address}
            isCopied={isCopied}
            onCopyAddress={onCopyAddress}
            profileColor={user.profileColor}
            providerName={blockchain.wallet}
          />
          <button className={styles.disconnect} onClick={onDisconnectWallet}>
            <FaPowerOff size={24} />
          </button>
        </div>
        <section className={styles.section}>
          <ValueContainer
            label={'Balance'}
            value={
              blockchain.balance?.formatted
                ? parseFloat(blockchain.balance?.formatted)
                : ''
            }
          />
          <ValueContainer label={'Blockchain'} value={blockchain.chain?.name} />
        </section>
      </div>
    </aside>
  );
};

export default Wallet;
