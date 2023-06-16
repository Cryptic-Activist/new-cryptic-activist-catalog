import { ReactElement } from 'react';

type InputType = 'text' | 'email' | 'password' | 'hidden';

export type InputProps = {
  name?: string;
  required?: boolean;
  disabled?: boolean;
  id?: string;
  value?: string;
  onChange?: any;
  register?: any;
  type?: InputType;
  placeholder?: string;
  label?: string;
  sideButton?: ReactElement;
};
