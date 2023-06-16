'use client';

import { useNavigationBar } from '@/hooks';
import Login from '../Login';
import Register from '../Register';
import VerifyAccount from '../VerifyAccount';

const AllModals = () => {
  const { navigationBar } = useNavigationBar();

  return (
    <>
      {navigationBar.modals.login ? <Login /> : <></>}
      {navigationBar.modals.register ? <Register /> : <></>}
      {navigationBar.modals.verifyAccount ? <VerifyAccount /> : <></>}
    </>
  );
};

export default AllModals;
