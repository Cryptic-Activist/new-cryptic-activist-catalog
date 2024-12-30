'use client';

import { Button } from '@/components';
import { Input, Links } from '@/components/forms';
import { useRegister } from '@/hooks';
import { Template } from '@/layouts/modals';
import { resetNavigationBar, toggleModal } from '@/store/navigationBar';

import styles from './index.module.scss';

const Register = () => {
  const { registerForm, handleSubmit, formValues, onSubmit, errors } =
    useRegister();

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

  return (
    <Template
      width="17rem"
      heading="Register"
      successMessage={formValues.successMessage}
    >
      <div className={styles.container}>
        <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
          <Input
            type="text"
            name="names.firstName"
            id="names.firstName"
            required
            disabled
            label="First Name"
            placeholder="First Name"
            register={registerForm}
            value={formValues.names.firstName}
          />
          <Input
            type="text"
            name="names.lastName"
            id="names.lastName"
            required
            disabled
            label="Last Name"
            placeholder="Last Name"
            register={registerForm}
            value={formValues.names.lastName}
          />
          <Input
            type="text"
            name="username"
            id="username"
            required
            disabled
            label="Username"
            placeholder="Username"
            register={registerForm}
            value={formValues.username}
          />
          <Input
            type="password"
            name="password"
            id="password"
            required
            label="Password"
            placeholder="Password"
            register={registerForm}
            errorMessage={errors['password']?.message}
          />
          <Input
            type="password"
            name="confirmPassword"
            id="confirmPassword"
            required
            label="Confirm Password"
            placeholder="Confirm Password"
            register={registerForm}
            errorMessage={errors['confirmPassword']?.message}
          />
          <Button type="submit" padding="1rem">
            Register
          </Button>
        </form>

        <Links links={links} />
      </div>
    </Template>
  );
};

export default Register;
