import React from 'react';
import Image from 'next/image';

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
        {blockchainsList.map(({ icon, label, onClick }, index) => (
          <li key={index} className={styles.blockchainListItem}>
            <Button
              onClick={onClick}
              size={18}
              padding="0.8rem 1rem"
              type="button"
              align="center"
              fullWidth
            >
              <Image src={icon} alt={`${label} logo`} width={24} height={24} />
              <span>{toCapitalize(label)}</span>
            </Button>
          </li>
        ))}
      </ul>
    </Template>
  );
};

export default Blockchain;
