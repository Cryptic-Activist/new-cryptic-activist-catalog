import React from 'react';

import { Button } from '@/components';
import useBlockchain from '@/hooks/useBlockchain';
import { Template } from '@/layouts/modals';
import { toCapitalize } from '@/utils';

import styles from './index.module.scss';

const Blockchain = () => {
  const { blockchainsList } = useBlockchain();
  return (
    <Template heading="Select Blockchain" width="fit-content">
      <ul className={styles.blockchainList}>
        {blockchainsList.map(({ icon: Icon, label, onClick }, index) => (
          <li key={index} className={styles.blockchainListItem}>
            <Button
              onClick={onClick}
              size={18}
              type="button"
              align="center"
              fullWidth
            >
              <Icon size={24} />
              <span>{toCapitalize(label)}</span>
            </Button>
          </li>
        ))}
      </ul>
    </Template>
  );
};

export default Blockchain;
