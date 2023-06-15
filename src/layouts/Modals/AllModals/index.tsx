'use client';

import { useNavigationBar } from '@/hooks';
import Login from '../Login';

const AllModals = () => {
  const { navigationBar } = useNavigationBar();

  return <>{navigationBar.modals.login ? <Login /> : <></>}</>;
};

export default AllModals;
