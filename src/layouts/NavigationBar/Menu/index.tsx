'use client';

import { Button, Tooltip } from '@/components';
import { menuList, menuUserList } from './data';
import {
  useBlockchain,
  useNavigationBar,
  useOutsideClick,
  useUser,
} from '@/hooks';

import { FaWallet } from 'react-icons/fa6';
import { MenuList } from '@/layouts/tooltips';
import styles from './index.module.scss';

const Menu = () => {
  const {
    navigationBar: {
      drawers: { user: userDrawer },
    },
    toggleDrawer,
    toggleModal,
  } = useNavigationBar();
  const {
    user,
    mutation: userMutation,
    query: userQuery,
    isLoggedIn,
  } = useUser();
  const { blockchain, getAccountAddress } = useBlockchain();

  const handleToggleUserDrawer = () => {
    toggleDrawer('user');
  };

  const handleToggleLogin = () => {
    toggleModal('login');
  };

  const handleToggleBlockchain = () => {
    toggleModal('blockchain');
  };

  const ref = useOutsideClick(handleToggleUserDrawer);

  return (
    <div className={styles.menu}>
      {menuList.map(({ href, label }, index) => (
        <Button href={href} key={index}>
          {label}
        </Button>
      ))}
      {userMutation.data && (
        <Button
          theme="transparent"
          type="button"
          onClick={handleToggleBlockchain}
        >
          Connect Wallet
        </Button>
      )}
      {userMutation.data && blockchain.provider && (
        <Button theme="transparent" type="button" onClick={getAccountAddress}>
          <FaWallet />
        </Button>
      )}
      <Tooltip position="bottom" spacing={55}>
        {isLoggedIn() ? (
          <Button theme="transparent" onClick={handleToggleUserDrawer}>
            {user.names?.firstName}
          </Button>
        ) : (
          <Button theme="transparent" onClick={handleToggleLogin}>
            Login
          </Button>
        )}
        {userDrawer ? (
          <>
            {/* @ts-ignore */}
            <MenuList ref={ref} items={menuUserList} />
          </>
        ) : (
          <></>
        )}
      </Tooltip>
    </div>
  );
};

export default Menu;
