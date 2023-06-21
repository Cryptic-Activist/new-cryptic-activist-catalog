import { FC } from 'react';
import styles from './index.module.scss';
import { SelectWithInput } from './types';

const SelectorWithInput: FC<SelectWithInput> = ({ label, placeholder }) => {
  return (
    <div className={styles.container}>
      <label className={styles.label} htmlFor={styles.input}>
        {label}
      </label>
      <div className={styles.selector}>
        <input type="text" id={styles.input} placeholder={placeholder} />
      </div>
    </div>
  );
};

export default SelectorWithInput;
