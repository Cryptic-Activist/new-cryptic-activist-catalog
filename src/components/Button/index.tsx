import type { FC } from 'react';

import styles from './index.module.scss';
import { ButtonProps } from './types';

const Button: FC<ButtonProps> = ({
  children,
  type = 'button',
  href,
  theme = 'primary',
  padding,
  onClick,
}) => {
  const primary = theme === 'primary' ? styles.primary : null;
  const secondary = theme === 'secondary' ? styles.secondary : null;
  const ghost = theme === 'ghost' ? styles.ghost : null;
  const transparent = theme === 'transparent' ? styles.transparent : null;

  return (
    <>
      {href ? (
        <a
          href={href}
          className={`${styles.button} ${primary} ${secondary} ${ghost} ${transparent}`}
          style={{
            padding,
          }}
        >
          {children}
        </a>
      ) : (
        <button
          type={type}
          className={`${styles.button} ${primary} ${secondary} ${ghost} ${transparent}`}
          onClick={onClick}
          style={{
            padding,
          }}
        >
          {children}
        </button>
      )}
    </>
  );
};

export default Button;
