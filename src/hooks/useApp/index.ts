import { useStore } from '@nanostores/react';

import { $app, setValue as setValueStore } from '@/store';
import { Value } from '@/store/app/types';

const useApp = () => {
  const app = useStore($app);

  const setValue = (value: Value) => {
    setValueStore(value);
  };

  return { app, setValue };
};

export default useApp;
