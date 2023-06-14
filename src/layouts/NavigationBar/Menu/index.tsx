'use client';

import { Button, MenuList, Tooltip } from '@/components';

import styles from './index.module.scss';

import { useOutsideClick } from '@/hooks';
import { menuList } from './data';

const Menu = () => {
  const closeMenu = () => {
    console.log('outside click');
  };

  const ref = useOutsideClick(closeMenu);

  return (
    <div className={styles.menu}>
      <Button href="/">Home</Button>
      <Button href="/vendors">Vendors</Button>
      <Button href="/help">Help</Button>
      <Tooltip position="bottom" spacing={55}>
        <Button theme="transparent">Login</Button>
        {/* @ts-ignore */}
        <MenuList ref={ref} items={menuList} />
      </Tooltip>
    </div>
  );
};

export default Menu;
