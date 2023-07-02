type Language = {
  id: string;
  name: string;
};

type User = {
  names: {
    firstName: string;
    lastName: string;
  };
  username: string;
  profileColor: string;
  createdAt: string;
  updatedAt: string;
  languages: Language[];
};

export type UserState = {
  data?: User;
  loading: boolean;
  fetched: boolean;
  errors: string[];
};

export type UserSetter = {
  data?: User;
  loading?: boolean;
  fetched?: boolean;
  errors?: string[];
};

export type LoginUserParams = {
  username: string;
  password: string;
};

export type GetUserTokenResponse = {
  accessToken: string;
  refreshToken: string;
};

export type GetUserInfoReturn = {
  firstName: string;
  lastName: string;
  username: string;
  profileColor: string;
  createdAt: string;
  updatedAt: string;
  languages: Language[];
};
