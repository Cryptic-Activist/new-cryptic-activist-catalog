import React from 'react';
import Image from 'next/image';

import { Button } from '@/components';
import useBlockchain from '@/hooks/useBlockchain';
import { Template } from '@/layouts/modals';
import { toCapitalize } from '@/utils';

import styles from './index.module.scss';
import { WalletName } from '@/hooks/useBlockchain/types';

const Blockchain = () => {
  const { walletsList, queries } = useBlockchain();

  const handleConnect = (
    onClick: (wallet: WalletName) => void,
    wallet: WalletName,
    isAvailable: boolean
  ) => {
    if (isAvailable) {
      onClick(wallet);
    }
  };

  return (
    <Template heading="Select Blockchain" width="20rem">
      <ul className={styles.walletList}>
        {walletsList.map(({ icon, label, onClick }, index) => {
          const isUnavailable =
            queries[index].isPending || queries[index].isError;
          return (
            <li key={index} className={styles.walletListItem}>
              <Button
                onClick={() =>
                  handleConnect(onClick, label, queries[index].isSuccess)
                }
                size={18}
                padding="0.8rem 1rem"
                type="button"
                align="center"
                fullWidth
                theme="secondary"
                isDisabled={isUnavailable}
              >
                <div className={styles.buttonContainer}>
                  <div className={styles.walletListItemIconLabel}>
                    <Image
                      src={icon}
                      alt={`${label} logo`}
                      width={24}
                      height={24}
                    />
                    <span className={styles.label}>{toCapitalize(label)}</span>
                  </div>
                  {queries[index].isPending && (
                    <p className={styles.statement}>Looking for wallet...</p>
                  )}
                  {queries[index].isError && (
                    <p className={styles.statement}>
                      Provider is not installed
                    </p>
                  )}
                </div>
              </Button>
            </li>
          );
        })}
      </ul>
    </Template>
  );
};

export default Blockchain;
