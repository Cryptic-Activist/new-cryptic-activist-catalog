'use client';

import { Button } from '@/components';
import { Form, Input, Links } from '@/components/forms';
import { Template } from '@/layouts/Modals';
import { resetNavigationBar, toggleModal } from '@/store/navigationBar';

import styles from './index.module.scss';
import { loginResolver } from './zod';

const Login = () => {
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

  const onSubmit = async (data: any) => {};

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

          <Button type="submit" padding="1rem 0">
            Login
          </Button>
        </Form>

        <Links links={links} />
      </div>
    </Template>
  );
};

export default Login;
