import { map } from 'nanostores';

import { USER_API } from '@/constants';
import { fetchGet, fetchPost } from '@/services/axios';

import type {
  RegisterSetter,
  RegisterState,
  UserRegistrationParams,
} from './types';

export const $register = map<RegisterState>();

const setter = ({
  firstName,
  lastName,
  username,
  privateKeys,
}: RegisterSetter) => {
  const register = $register.get();

  $register.set({
    firstName: firstName ?? register.firstName,
    lastName: lastName ?? register.lastName,
    username: username ?? register.username,
    privateKeys: privateKeys ?? register.privateKeys,
  });
};

export const getRandomCredentials = async () => {
  const response = await fetchGet(USER_API + '/users/random/credentials');

  if (response.status !== 200) {
    return;
  }

  setter({
    firstName: response.data.names[0],
    lastName: response.data.names[1],
    username: response.data.username,
  });
};

export const onSubmitUserRegistration = async (
  params: UserRegistrationParams
) => {
  const response = await fetchPost(USER_API + '/users/auth/register', {
    ...params,
  });

  if (response.status !== 201) {
    return false;
  }

  return true;
};
