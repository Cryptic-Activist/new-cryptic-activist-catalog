'use client';

import { Button } from '@/components';
import { Form, Input, Links } from '@/components/forms';
import { Template } from '@/layouts/Modals';
import { resetNavigationBar, toggleModal } from '@/store/navigationBar';

import styles from './index.module.scss';
import { registerResolver } from './zod';

const Register = () => {
  const links = [
    {
      label: 'Already have an account',
      onClick: () => {
        resetNavigationBar();
        toggleModal('login');
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

  const onSubmit = async (data: any) => {
    console.log(data);
  };

  return (
    <Template width="17rem" heading="Register">
      <div className={styles.container}>
        <Form onSubmit={onSubmit} resolver={registerResolver}>
          <Input
            type="text"
            name="names.firstName"
            id="names.firstName"
            required
            disabled
            label="First Name"
            placeholder="First Name"
          />
          <Input
            type="text"
            name="names.lastName"
            id="names.lastName"
            required
            disabled
            label="Last Name"
            placeholder="Last Name"
          />
          <Input
            type="text"
            name="username"
            id="username"
            required
            disabled
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
          <Input
            type="password"
            name="password2"
            id="password2"
            required
            label="Confirm Password"
            placeholder="Confirm Password"
          />
          <Button type="submit" padding="1rem 0">
            Register
          </Button>
        </Form>

        <Links links={links} />
      </div>
    </Template>
  );
};

export default Register;
