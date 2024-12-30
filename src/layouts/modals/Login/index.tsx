'use client';

import { useEffect } from 'react';

import { Button } from '@/components';
import { Form, Input, Links } from '@/components/forms';
import { useUser } from '@/hooks';
import { Template } from '@/layouts/modals';
import { resetNavigationBar, toggleModal } from '@/store/navigationBar';
import { LoginUserParams } from '@/store/user/types';

import styles from './index.module.scss';
import { loginResolver } from './zod';

const Login = () => {
  const { loginUser, user, isLoggedIn } = useUser(false);
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

  const onSubmit = async (data: LoginUserParams) => {
    await loginUser(data);
  };

  useEffect(() => {
    if (isLoggedIn()) {
      toggleModal('login');
    }
  }, [user]);

  return (
    <Template width="17rem" heading="Login">
      <div className={styles.container}>
        <Form onSubmit={onSubmit} resolver={loginResolver}>
          <Input
            type="text"
            name="username"
            id="username"
            required
            label="Username"
            placeholder="Username"
          />
          <Input
            type="password"
            name="password"
            id="password"
            required
            label="Password"
            placeholder="Password"
          />

          <Button type="submit" padding="1rem">
            Login
          </Button>
        </Form>

        <Links links={links} />
      </div>
    </Template>
  );
};

export default Login;
