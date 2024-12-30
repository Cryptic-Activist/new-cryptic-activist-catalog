'use client';
import { useState } from 'react';

import { Button } from '@/components';
import { Form, Input, Links } from '@/components/forms';
import { Template } from '@/layouts/modals';
import { resetNavigationBar, toggleModal } from '@/store/navigationBar';

import styles from './index.module.scss';
import { Step } from './types';
import { verifyAccountResolver } from './zod';

const VerifyAccount = () => {
  const [step, setStep] = useState<Step>('username');
  const links = [
    {
      label: "Don't have an account yet?",
      onClick: () => {
        resetNavigationBar();
        toggleModal('register');
      },
    },
    {
      label: 'Already have an account',
      onClick: () => {
        resetNavigationBar();
        toggleModal('login');
      },
    },
  ];

  const onSubmitFindUser = async (data: any) => {
    setStep('verification');
  };

  const onSubmitVerify = async (data: any) => {};

  return (
    <Template width="17rem" heading="Verify Account">
      <div className={styles.container}>
        {step === 'username' && (
          <Form onSubmit={onSubmitFindUser} resolver={verifyAccountResolver}>
            <Input
              type="text"
              name="username"
              id="username"
              required
              label="Username"
              placeholder="Username"
            />

            <Button type="submit" padding="1rem">
              Find User
            </Button>
          </Form>
        )}
        {step === 'verification' && (
          <Form onSubmit={onSubmitVerify} resolver={verifyAccountResolver}>
            <Button type="submit" padding="1rem">
              Verify Account
            </Button>
          </Form>
        )}

        <Links links={links} />
      </div>
    </Template>
  );
};

export default VerifyAccount;
