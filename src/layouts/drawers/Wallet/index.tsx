'use client';

import { AccountInfoProps, ValueContainerProps } from './types';
import { BRAVE_WALLET, COINBASE_WALLET, METAMASK } from '@/constants';
import { Brave, Coinbase, MetaMask } from '@/assets';
import { FaChevronRight, FaPowerOff } from 'react-icons/fa';
import React, { FC, useEffect, useState } from 'react';

import styles from './index.module.scss';
import { useWallet } from '@/hooks';

const AccountInfo: FC<AccountInfoProps> = ({
  address,
  isCopied,
  onCopyAddress,
  profileColor,
  provider,
}) => {
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
            backgroundImage: `url(${provider?.image})`,
          }}
          title={provider?.name}
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
  const {
    isOpened,
    isCopied,
    provider,
    blockchain,
    user,
    closeWallet,
    onCopyAddress,
    onDisconnectWallet,
  } = useWallet();
  const walletStyle = isOpened ? styles.closed : styles.opened;

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
            provider={provider}
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
                : 'Unavailable'
            }
          />
          <ValueContainer label={'Blockchain'} value={blockchain.chain?.name} />
        </section>
      </div>
    </aside>
  );
};

export default Wallet;
