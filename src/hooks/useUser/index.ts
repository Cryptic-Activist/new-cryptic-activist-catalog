'use client';
import {
  $user,
  decodeAccessToken,
  loginUser as loginUserStore,
  logout as logoutStore,
} from '@/store';
import { LoginUserParams } from '@/store/user/types';
import { useStore } from '@nanostores/react';
import { useEffect } from 'react';
import { UseUserHasFetch } from './types';
import useApp from '../useApp';

let count = 0;

const useUser = (hasFetch: UseUserHasFetch = false) => {
  const user = useStore($user);
  const { addToast } = useApp();

  useEffect(() => {
    const handleDecodeAccessToken = async () => {
      await decodeAccessToken();
    };

    if (count === 0 && hasFetch) {
      handleDecodeAccessToken().catch();
      count++;
    }
  }, []);

  const loginUser = async (userData: LoginUserParams) => {
    const loggedIn = await loginUserStore(userData);

    if (!loggedIn) {
      addToast('error', 'Enable to login', 10000);
    }
  };

  const logoutUser = () => {
    logoutStore();
  };

  const isLoggedIn = () => {
    return (
      user.data && user.errors.length === 0 && user.fetched && !user.loading
    );
  };

  return { user, loginUser, logoutUser, isLoggedIn };
};

export default useUser;
