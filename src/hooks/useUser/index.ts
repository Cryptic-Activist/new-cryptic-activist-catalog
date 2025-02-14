'use client';
import { useStore } from '@nanostores/react';
import { useEffect } from 'react';
import { useMutation, useQuery } from '@tanstack/react-query';

import { decodeAccessToken, login, logout } from '@/services/user';
import { $user } from '@/store';

import useApp from '../useApp';
import { useForm } from 'react-hook-form';
import { loginResolver } from './zod';
import { OnSubmit } from './types';

const useUser = () => {
  const user = useStore($user);
  const { addToast } = useApp();
  const mutation = useMutation({
    mutationFn: login,
    mutationKey: ['login'],
  });
  const query = useQuery({ queryKey: ['login'], queryFn: decodeAccessToken });
  const {
    register: loginFormRegister,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm({ resolver: loginResolver });

  const onSubmit: OnSubmit = (data) => {
    const { password, username } = data;
    mutation.mutate({ password, username });
  };

  useEffect(() => {
    if (mutation.error) {
      console.log({ error: mutation.error });
      addToast('error', 'Unable to login', 10000);
    }
  }, [mutation.error]);

  // useEffect(() => {
  //   const handleDecodeAccessToken = async () => {
  //     await decodeAccessToken();
  //   };

  //   if (count === 0 && hasFetch) {
  //     handleDecodeAccessToken().catch();
  //     count++;
  //   }
  // }, []);

  // const loginUser = async (userData: LoginUserParams) => {
  //   const loggedIn = await loginUserStore(userData);

  //   if (!loggedIn) {
  //     addToast('error', 'Enable to login', 10000);
  //   }
  // };

  const isLoggedIn = () => {
    return typeof query.data !== undefined;
  };

  return {
    logout,
    isLoggedIn,
    handleSubmit,
    onSubmit,
    loginFormRegister,
    errors,
    user,
    mutation,
    query,
    formValues: {
      username: getValues('username'),
      password: getValues('password'),
    },
  };
};

export default useUser;
