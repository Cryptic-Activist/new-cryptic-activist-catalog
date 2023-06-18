import { $fiats, getFiats as getFiatsStore } from '@/store';
import { useStore } from '@nanostores/react';

const useNavigationBar = () => {
  const fiats = useStore($fiats);

  const getFiats = () => {
    getFiatsStore();
  };

  return { fiats, getFiats };
};

export default useNavigationBar;
