'use client';

import { Button, MenuList, Tooltip } from '@/components';
import { useNavigationBar, useOutsideClick, useUser } from '@/hooks';
import { menuList } from './data';
import styles from './index.module.scss';

const Menu = () => {
  const {
    navigationBar: {
      drawers: { user: userDrawer },
    },
    toggleDrawer,
    toggleModal,
  } = useNavigationBar();
  const { user } = useUser();

  const handleToggleUserDrawer = () => {
    toggleDrawer('user');
  };

  const handleToggleLogin = () => {
    toggleModal('login');
  };

  const ref = useOutsideClick(handleToggleUserDrawer);

  return (
    <div className={styles.menu}>
      <Button href="/">Home</Button>
      <Button href="/vendors">Vendors</Button>
      <Button href="/help">Help</Button>
      <Tooltip position="bottom" spacing={55}>
        {user.data && !user.loading ? (
          <Button theme="transparent" onClick={handleToggleUserDrawer}>
            {user.data.names.firstName}
          </Button>
        ) : (
          <Button theme="transparent" onClick={handleToggleLogin}>
            Login
          </Button>
        )}
        {user.loading ? <Button theme="transparent">Loading</Button> : <></>}
        {userDrawer ? (
          <>
            {/* @ts-ignore */}
            <MenuList ref={ref} items={menuList} />
          </>
        ) : (
          <></>
        )}
      </Tooltip>
    </div>
  );
};

export default Menu;
