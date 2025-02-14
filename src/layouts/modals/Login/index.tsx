'use client';

import { Form, Input, Links } from '@/components/forms';
import { resetNavigationBar, toggleModal } from '@/store/navigationBar';

import { Button } from '@/components';
import { Template } from '@/layouts/modals';
import styles from './index.module.scss';
import { useEffect } from 'react';
import { useUser } from '@/hooks';

const Login = () => {
  const {
    user,
    errors,
    loginFormRegister,
    isLoggedIn,
    onSubmit,
    handleSubmit,
  } = useUser();
  const links = [
    {
      label: "Don't have an account yet?",
      onClick: () => {
        resetNavigationBar();
        toggleModal('register');
      },
    },
    {
      label: 'Forgot password?',
      onClick: () => {
        resetNavigationBar();
        toggleModal('resetPassword');
      },
    },
    {
      label: 'Verify account',
      onClick: () => {
        resetNavigationBar();
        toggleModal('verifyAccount');
      },
    },
  ];

  useEffect(() => {
    if (isLoggedIn()) {
      toggleModal('login');
    }
  }, [user]);

  return (
    <Template width="20rem" heading="Login">
      <div className={styles.container}>
        <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
          <Input
            type="text"
            name="username"
            id="username"
            required
            label="Username"
            placeholder="Username"
            register={loginFormRegister}
            errorMessage={errors['username']?.message}
          />
          <Input
            type="password"
            name="password"
            id="password"
            required
            label="Password"
            placeholder="Password"
            register={loginFormRegister}
            errorMessage={errors['password']?.message}
          />

          <Button type="submit" padding="1rem" fullWidth>
            Login
          </Button>
        </form>

        <Links links={links} />
      </div>
    </Template>
  );
};

export default Login;
