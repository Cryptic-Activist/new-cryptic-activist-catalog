import { map } from 'nanostores';

import { USER_API } from '@/constants';
import { fetchGet, fetchPost } from '@/services/axios';
import {
  getBearerToken,
  getLocalStorage,
  removeLocalStorage,
  setCookie,
  setLocalStorage,
} from '@/utils';

import type {
  GetUserInfoReturn,
  GetUserTokenResponse,
  LoginUserParams,
  UserSetter,
  UserState,
} from './types';

export const $user = map<UserState>({
  loading: false,
  fetched: false,
  errors: [],
});

const setter = ({ data, errors, fetched, loading }: UserSetter) => {
  const user = $user.get();

  const localData = data ?? user.data;
  const localErrors = errors ?? user.errors;
  const localFetched = fetched ?? user.fetched;
  const localLoading = loading ?? user.loading;

  $user.set({
    data: localData,
    loading: localLoading,
    fetched: localFetched,
    errors: localErrors,
  });
};

const setUserInfo = (userInfo: GetUserInfoReturn) => ({
  createdAt: userInfo.createdAt,
  names: {
    firstName: userInfo.firstName,
    lastName: userInfo.lastName,
  },
  profileColor: userInfo.profileColor,
  updatedAt: userInfo.updatedAt,
  username: userInfo.username,
  languages: userInfo.languages,
});

const getUserToken = async ({
  password,
  username,
}: LoginUserParams): Promise<GetUserTokenResponse | null> => {
  const response = await fetchPost(USER_API + '/users/auth/login', {
    password,
    username,
  });

  if (response.status !== 200) return null;

  return response.data;
};

const getUserInfoFromToken = async (
  token: string
): Promise<GetUserInfoReturn | null> => {
  const response = await fetchGet(
    `${USER_API}/users/auth/login/decode/token/${token}`,
    {
      Authorization: getBearerToken(token),
    }
  );

  if (response.status !== 200) return null;

  return response.data;
};

const getResetPasswordToken = async () => {};

const getVerificationPasswordResetToken = async () => {};

export const loginUser = async (userData: LoginUserParams) => {
  try {
    setter({ fetched: false, data: undefined, errors: [], loading: true });
    const tokens = await getUserToken(userData);

    if (!tokens) {
      setter({ errors: ['Unable to login'], loading: false });
      return;
    }
    setCookie({
      name: 'accessToken',
      value: tokens.accessToken,
      expiresInHours: 1,
    });
    setCookie({
      name: 'refreshToken',
      value: tokens.refreshToken,
      expiresInHours: 2,
    });
    setLocalStorage('accessToken', tokens.accessToken);
    setLocalStorage('refreshToken', tokens.refreshToken);

    const userInfo = await getUserInfoFromToken(tokens.accessToken);

    if (!userInfo) {
      removeLocalStorage('accessToken');
      removeLocalStorage('refreshToken');
      setter({ errors: ['Unable to login'], loading: false });
      return null;
    }

    setter({ data: setUserInfo(userInfo), fetched: true, loading: false });
    return true;
  } catch (err) {
    removeLocalStorage('accessToken');
    removeLocalStorage('refreshToken');

    setter({ errors: ['Unable to login'], loading: false });
    return null;
  }
};

export const decodeAccessToken = async () => {
  try {
    setter({ fetched: false, data: undefined, errors: [], loading: true });
    const accessToken = getLocalStorage('accessToken');

    if (!accessToken) return null;

    const userInfo = await getUserInfoFromToken(accessToken);

    if (!userInfo) {
      removeLocalStorage('accessToken');
      removeLocalStorage('refreshToken');
      return null;
    }

    setter({
      data: setUserInfo(userInfo),
      loading: false,
      fetched: true,
    });
  } catch (err) {
    removeLocalStorage('accessToken');
    removeLocalStorage('refreshToken');
  }
};

export const logout = () => {
  removeLocalStorage('accessToken');
  removeLocalStorage('refreshToken');
  setter({ data: undefined, errors: [], fetched: false, loading: false });
};

// export const resetPassword = async () => {};

// export const verifyPasswordResetToken = async () => {};
