'use client';

import { useEffect } from 'react';
import { useForm } from 'react-hook-form';

import {
  $register,
  getRandomCredentials,
  onSubmitUserRegistration,
} from '@/store';
import { resetNavigationBar, toggleModal } from '@/store/navigationBar';
import { useStore } from '@nanostores/react';

import { registerResolver } from './zod';
import { useMutation } from '@tanstack/react-query';

const useRegister = (fetchRandomCredentials = true) => {
  const register = useStore($register);
  const mutation = useMutation({
    mutationKey: ['register', 'credentials'],
    mutationFn: onSubmitUserRegistration,
  });

  const {
    register: registerForm,
    handleSubmit,
    setValue,
    formState: { errors },
    getValues,
  } = useForm({ resolver: registerResolver });

  useEffect(() => {
    if (fetchRandomCredentials) {
      getRandomCredentials().then();
    }
  }, [fetchRandomCredentials]);

  useEffect(() => {
    setValue('names.firstName', register.firstName);
    setValue('names.lastName', register.lastName);
    setValue('username', register.username);
  }, [register]);

  const onSubmit = async (data: any) => {
    setValue('successMessage', undefined);
    const { confirmPassword, names, password, username } = data;
    mutation.mutate({
      confirmPassword,
      password,
      username,
      names,
    });
  };

  useEffect(() => {
    if (mutation.data) {
      setTimeout(() => {
        resetNavigationBar();
        toggleModal('privateKeys');
      }, 5000);
    }
  }, [mutation.data]);

  return {
    getRandomCredentials,
    registerForm,
    handleSubmit,
    onSubmit,
    register,
    errors,
    mutation,
    formValues: {
      names: {
        firstName: getValues('names.firstName'),
        lastName: getValues('names.lastName'),
      },
      username: getValues('username'),
      password: getValues('password'),
      confirmPassword: getValues('confirmPassword'),
      successMessage: getValues('successMessage'),
    },
  };
};

export default useRegister;
