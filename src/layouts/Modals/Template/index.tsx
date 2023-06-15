'use client';

import { FC } from 'react';

import { useNavigationBar } from '@/hooks';
import styles from './index.module.scss';
import type { TemplateProps } from './types';

const Template: FC<TemplateProps> = ({ children }) => {
  const { resetNavigationBar } = useNavigationBar();

  const closeModal = () => {
    resetNavigationBar();
  };

  return (
    <>
      <div className={styles.bg} onClick={closeModal} />
      <div className={styles.container}>{children}</div>
    </>
  );
};

export default Template;
