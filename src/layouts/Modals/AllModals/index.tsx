'use client';

import { useNavigationBar } from '@/hooks';
import {
  Cryptocurrencies,
  Fiats,
  Login,
  PaymentMethods,
  Register,
  VerifyAccount,
} from '@/layouts/Modals';

const AllModals = () => {
  const { navigationBar } = useNavigationBar();

  return (
    <>
      {navigationBar.modals.login ? <Login /> : <></>}
      {navigationBar.modals.register ? <Register /> : <></>}
      {navigationBar.modals.verifyAccount ? <VerifyAccount /> : <></>}
      {navigationBar.modals.fiats ? <Fiats /> : <></>}
      {navigationBar.modals.cryptocurrencies ? <Cryptocurrencies /> : <></>}
      {navigationBar.modals.paymentMethods ? <PaymentMethods /> : <></>}
    </>
  );
};

export default AllModals;
