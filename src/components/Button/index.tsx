import Link from 'next/link';
import { FC } from 'react';

import styles from './index.module.scss';

import { Button } from './types';

const Button: FC<Button> = ({ type, label, theme = 'primary', href }) => {
  return (
    <>
      {href ? (
        <Link
          href={href}
          className={`${styles.container} ${
            theme === 'primary' && styles.primary
          }`}
        >
          {label}
        </Link>
      ) : (
        <button
          type={type}
          className={`${styles.container} ${
            theme === 'primary' && styles.primary
          }`}
        >
          {label}
        </button>
      )}
    </>
  );
};

export default Button;
