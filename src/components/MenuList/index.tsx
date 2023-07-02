import Link from 'next/link';
import { FC, forwardRef } from 'react';

import { useNavigationBar, useUser } from '@/hooks';
import styles from './index.module.scss';
import type { MenuListProps } from './types';

const MenuList: FC<MenuListProps> = forwardRef(({ items }, ref: any) => {
  const { logoutUser } = useUser(false);
  const { toggleDrawer } = useNavigationBar();

  const handleLogout = () => {
    toggleDrawer('user');
    logoutUser();
  };

  return (
    <ul className={styles.container} ref={ref}>
      {items.map(({ label, href }, index) => (
        <li key={index}>
          <Link href={href}>{label}</Link>
        </li>
      ))}
      <li>
        <button onClick={handleLogout}>Logout</button>
      </li>
    </ul>
  );
});

export default MenuList;
