import {
  ProgressBar,
  Radio,
  SelectPaymentMethod,
  Selector,
} from '@/components';
import React, { FC } from 'react';

import { CreateOfferPaymentMethodProps } from './types';
import Head from 'next/head';
import type { Item } from '@/components/Radio/types';
import styles from './index.module.scss';
import stylesCore from '../index.module.scss';

const CreateOfferPaymentMethod: FC<CreateOfferPaymentMethodProps> = ({
  setCreateOfferValues,
  createOffer,
}) => {
  console.log({ createOffer });

  const selectOfferType = (value: Item) => {
    setCreateOfferValues({ data: { paymentMethodType: value.value } });
  };

  return (
    <>
      <Head>
        <title>Payment Method | Create Offer - Cryptic Activist</title>
      </Head>
      <div className={stylesCore.container}>
        <main className={stylesCore.main}>
          <h1 className={stylesCore.heading}>Create an Offer</h1>
          <ProgressBar
            steps={['Payment Method', 'Trade Pricing', 'Trade Instructions']}
            currentStep={0}
          />
          <section className={stylesCore.horizontalGroup}>
            <h2 className={stylesCore.groupHeading}>Choose Fiat</h2>
            <Selector type="fiat" hasLabel={false} />
          </section>
          <section className={stylesCore.horizontalGroup}>
            <h2 className={stylesCore.groupHeading}>Choose Cryptocurrency</h2>
            <Selector type="cryptocurrency" hasLabel={false} />
          </section>
          {createOffer.data?.cryptocurrency && (
            <section className={stylesCore.horizontalGroup}>
              <h2 className={stylesCore.groupHeading}>
                What would like to do?
              </h2>
              <Radio
                items={[
                  { label: 'Buy', value: 'buy' },
                  { label: 'Sell', value: 'sell' },
                ]}
                onChange={selectOfferType}
              />
            </section>
          )}
          <section className={stylesCore.horizontalGroup}>
            <h2 className={stylesCore.groupHeading}>
              Step 1: Select a payment method
            </h2>
            <SelectPaymentMethod />
          </section>
        </main>
        <aside className={stylesCore.aside}>
          <h3>About the Payment Method</h3>
        </aside>
      </div>
    </>
  );
};

export default CreateOfferPaymentMethod;
