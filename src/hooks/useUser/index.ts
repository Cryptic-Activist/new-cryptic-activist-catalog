import { $user, decodeAccessToken, loginUser as loginUserStore } from '@/store';
import { LoginUserParams } from '@/store/user/types';
import { useStore } from '@nanostores/react';
import { useEffect } from 'react';
import { UseUserHasFetch } from './types';

let count = 0;

const useUser = (hasFetch: UseUserHasFetch) => {
  const user = useStore($user);

  useEffect(() => {
    const handleDecodeAccessToken = async () => {
      await decodeAccessToken();
    };

    if (count === 0 && hasFetch) {
      handleDecodeAccessToken().catch();
      count++;
    }
  }, []);

  const loginUser = async (userData: LoginUserParams) => {
    await loginUserStore(userData);
  };

  return { user, loginUser };
};

export default useUser;
