'use client';

import { FC } from 'react';

import { useNavigationBar } from '@/hooks';

import styles from './index.module.scss';
import type { ListTemplateProps } from './types';

const ListTemplate: FC<ListTemplateProps> = ({
  children,
  width,
  height,
  heading,
}) => {
  const { resetNavigationBar } = useNavigationBar();

  const closeModal = () => {
    resetNavigationBar();
  };

  return (
    <>
      <div className={styles.bg} onClick={closeModal} />
      <div className={styles.container} style={{ width, height }}>
        {heading && <h1 className={styles.heading}>{heading}</h1>}
        {children}
      </div>
    </>
  );
};

export default ListTemplate;
