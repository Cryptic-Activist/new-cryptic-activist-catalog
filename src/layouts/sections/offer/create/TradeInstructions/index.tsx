import React, { FC } from 'react';

import { CreateOfferTradeInstructionsProps } from './types';
import Head from 'next/head';
import { ProgressBar } from '@/components';
import stylesCore from '../index.module.scss';

const CreateOfferTradeInstructions: FC<CreateOfferTradeInstructionsProps> = ({
  setCreateOfferValues,
  toStep,
  createOffer,
  step,
  onClickEvents,
}) => {
  return (
    <>
      <Head>
        <title>Trade Instructions | Create Offer - Cryptic Activist</title>
      </Head>
      <div className={stylesCore.container}>
        <main className={stylesCore.main}>
          <h1 className={stylesCore.heading}>Create an Offer</h1>
          <ProgressBar
            steps={['Payment Method', 'Trade Pricing', 'Trade Instructions']}
            currentStep={step}
            onClickEvents={onClickEvents}
          />
        </main>
        <aside className={stylesCore.aside}></aside>
      </div>
    </>
  );
};

export default CreateOfferTradeInstructions;
