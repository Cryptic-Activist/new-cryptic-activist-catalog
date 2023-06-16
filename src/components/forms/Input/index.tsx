'use client';
import { FC } from 'react';

import { toCapitalize } from '@/utils';

import styles from './index.module.scss';
import type { InputProps } from './types';

const Input: FC<InputProps> = ({
  register,
  name,
  id,
  required,
  disabled,
  label,
  sideButton,
  type,
  ...rest
}) => (
  <div className={styles.inputContainer}>
    {id && id.length && label && type !== 'hidden' && (
      <div className={styles.labelLinkContainer}>
        <label htmlFor={id} className={styles.label}>
          {`${toCapitalize(label)} `}
        </label>
        {sideButton}
      </div>
    )}
    <input
      className={styles.input}
      {...register(name, {
        required: required,
        disabled: disabled,
      })}
      type={type}
      id={id}
      {...rest}
    />
  </div>
);

export default Input;
