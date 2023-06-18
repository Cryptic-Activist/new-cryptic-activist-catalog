import { FC } from 'react';

import styles from './index.module.scss';
import { SelectorProps } from './types';

const Selector: FC<SelectorProps> = ({ type }) => {
  console.log({ type });

  return <button className={styles.container}>Selector</button>;
};

export default Selector;
