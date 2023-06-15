import { map } from 'nanostores';

import type { UserSetter, UserState } from './types';

export const $user = map<UserState>({
  loading: false,
  fetched: false,
  errors: [],
});

const setter = ({ data, errors, fetched, loading }: UserSetter) => {
  $user.set({
    data,
    loading,
    fetched,
    errors,
  });
};

const getUserToken = async () => {};

const getResetPasswordToken = async () => {};

const getVerificationPasswordResetToken = async () => {};

export const loginInUser = async () => {};

export const resetPassword = async () => {};

export const verifyPasswordResetToken = async () => {};
