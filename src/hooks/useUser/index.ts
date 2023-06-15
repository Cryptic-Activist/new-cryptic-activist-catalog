import { $user } from '@/store';
import { useStore } from '@nanostores/react';

const useUser = () => {
  const user = useStore($user);

  return { user };
};

export default useUser;
