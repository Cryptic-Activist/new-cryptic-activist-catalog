'use client';

import React, { useState } from 'react';

import styles from './index.module.scss';
import { FaChevronRight, FaPowerOff } from 'react-icons/fa';
import { useBlockchain, useNavigationBar, useUser } from '@/hooks';

const Wallet = () => {
  const [isOpened, setIsOpened] = useState(false);
  const { toggleDrawer } = useNavigationBar();
  const { blockchain } = useBlockchain();
  const { user } = useUser();

  const walletStyle = isOpened ? styles.closed : styles.opened;

  const closeWallet = () => {
    setIsOpened((prev) => !prev);
    setTimeout(() => {
      toggleDrawer('wallet');
    }, 600);
  };

  return (
    <aside className={`${styles.container} ${walletStyle}`}>
      <button className={styles.closeButton} onClick={closeWallet}>
        <FaChevronRight size={18} />
      </button>
      <div className={styles.content}>
        <div className={styles.header}>
          <div className={styles.accountInfo}>
            <div className={styles.profileColorProvider}>
              <span
                className={styles.profileColor}
                style={{
                  backgroundColor: user.profileColor,
                }}
              />
              <span className={styles.provider} />
            </div>

            <p className={styles.address}>{blockchain.account.address}</p>
          </div>
          <button className={styles.disconnect}>
            <FaPowerOff size={24} />
          </button>
        </div>

        <p>
          <strong>Balance:</strong>
          {blockchain.balance.value}
          {blockchain.balance.symbol}
        </p>
      </div>
    </aside>
  );
};

export default Wallet;
