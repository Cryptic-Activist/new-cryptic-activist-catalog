'use client';

import { useNavigationBar } from '@/hooks';
import { Wallet } from '@/layouts/drawers';

const AllDrawers = () => {
  const { navigationBar } = useNavigationBar();

  return <>{navigationBar.drawers.wallet ? <Wallet /> : <></>}</>;
};

export default AllDrawers;
