'use client';

import { FaWallet } from 'react-icons/fa6';

import { Button, Tooltip } from '@/components';
import {
  useBlockchain,
  useNavigationBar,
  useOutsideClick,
  useUser,
} from '@/hooks';

import { menuList, menuUserList } from './data';
import styles from './index.module.scss';

const Menu = () => {
  const {
    navigationBar: {
      drawers: { user: userDrawer },
    },
    toggleDrawer,
    toggleModal,
  } = useNavigationBar();
  const { user } = useUser(false);
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
      {user.data && user.fetched && !blockchain.provider && (
        <Button
          theme="transparent"
          type="button"
          onClick={handleToggleBlockchain}
        >
          Connect Wallet
        </Button>
      )}
      {user.data && user.fetched && blockchain.provider && (
        <Button theme="transparent" type="button" onClick={getAccountAddress}>
          <FaWallet />
          <p>p</p>
        </Button>
      )}
      <Tooltip position="bottom" spacing={55}>
        {user.data && user.fetched ? (
          <Button theme="transparent" onClick={handleToggleUserDrawer}>
            {user.data.names.firstName}
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
