import { map } from 'nanostores';

import type {
  Drawer,
  Modal,
  NavigationBarState,
  NavigationBarStateSetter,
  Tooltip,
} from './types';

export const $navigationBar = map<NavigationBarState>({
  drawers: {
    user: false,
  },
  tooltips: {
    user: false,
    wallet: false,
  },
  modals: {
    cryptocurrencies: false,
    fiats: false,
    login: false,
    paymentMethods: false,
    privateKeys: false,
    register: false,
    resetPassword: false,
    blockchain: false,
    verifyAccount: false,
  },
  status: 'idle',
});

const setter = ({
  drawers,
  modals,
  status,
  tooltips,
}: NavigationBarStateSetter) => {
  const navbar = $navigationBar.get();

  const localDrawers = drawers ?? navbar.drawers;
  const localModals = modals ?? navbar.modals;
  const localStatus = status ?? navbar.status;
  const localTooltips = tooltips ?? navbar.tooltips;

  $navigationBar.set({
    drawers: localDrawers,
    modals: localModals,
    status: localStatus,
    tooltips: localTooltips,
  });
};

export const toggleDrawer = (drawer: Drawer) => {
  const drawers = $navigationBar.get().drawers;
  drawers[drawer] = !drawers[drawer];
  setter({ drawers });
};

export const toggleModal = async (modal: Modal) => {
  const modals = $navigationBar.get().modals;
  modals[modal] = !modals[modal];
  setter({ modals });
};

export const toggleTooltip = async (tooltip: Tooltip) => {
  const tooltips = $navigationBar.get().tooltips;
  tooltips[tooltip] = !tooltips[tooltip];
  setter({ tooltips });
};

export const resetNavigationBar = async () => {
  setter({
    drawers: {
      user: false,
    },
    tooltips: {
      user: false,
      wallet: false,
    },
    modals: {
      cryptocurrencies: false,
      fiats: false,
      login: false,
      paymentMethods: false,
      privateKeys: false,
      register: false,
      resetPassword: false,
      blockchain: false,
      verifyAccount: false,
    },
    status: 'idle',
  });
};
