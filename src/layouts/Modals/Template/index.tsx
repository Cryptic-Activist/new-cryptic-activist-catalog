'use client';

import { FC } from 'react';

import { useNavigationBar } from '@/hooks';

import styles from './index.module.scss';
import type { TemplateProps } from './types';

const Template: FC<TemplateProps> = ({ children, width, heading }) => {
  const { resetNavigationBar } = useNavigationBar();

  const closeModal = () => {
    resetNavigationBar();
  };

  return (
    <>
      <div className={styles.bg} onClick={closeModal} />
      <div className={styles.container} style={{ width }}>
        {heading && <h1 className={styles.heading}>{heading}</h1>}
        {children}
      </div>
    </>
  );
};

export default Template;
