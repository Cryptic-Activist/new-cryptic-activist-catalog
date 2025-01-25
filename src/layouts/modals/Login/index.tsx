'use client';

import { Form, Input, Links } from '@/components/forms';
import { resetNavigationBar, toggleModal } from '@/store/navigationBar';

import { Button } from '@/components';
import { LoginUserParams } from '@/store/user/types';
import { Template } from '@/layouts/modals';
import { loginResolver } from './zod';
import styles from './index.module.scss';
import { useEffect } from 'react';
import { useUser } from '@/hooks';

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

          <Button type="submit" padding="1rem" fullWidth>
            Login
          </Button>
        </Form>

        <Links links={links} />
      </div>
    </Template>
  );
};

export default Login;
