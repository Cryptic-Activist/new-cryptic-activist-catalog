import { ReactElement } from 'react';

export type Button = {
  type?: 'submit' | 'button';
  theme?: 'primary';
  label: string | ReactElement[];
  href?: string;
};
