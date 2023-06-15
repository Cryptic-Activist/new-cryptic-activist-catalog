import {
  $navigationBar,
  resetNavigationBar as resetNavigationBarState,
  toggleDrawer as toggleDrawerStore,
  toggleModal as toggleModalStore,
} from '@/store';
import { Drawer, Modal } from '@/store/navigationBar/types';
import { useStore } from '@nanostores/react';

const useNavigationBar = () => {
  const navigationBar = useStore($navigationBar);

  const toggleDrawer = (drawer: Drawer) => {
    toggleDrawerStore(drawer);
  };

  const toggleModal = (modal: Modal) => {
    toggleModalStore(modal);
  };

  const resetNavigationBar = () => {
    resetNavigationBarState();
  };

  return { navigationBar, toggleDrawer, toggleModal, resetNavigationBar };
};

export default useNavigationBar;
