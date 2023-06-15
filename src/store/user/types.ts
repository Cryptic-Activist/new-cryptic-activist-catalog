export type User = {
  names: {
    firstName: string;
    lastName: string;
  };
  username: string;
};

export type UserState = {
  data?: User;
  loading: boolean;
  fetched: boolean;
  errors: string[];
};

export type UserCredentials = {
  email: string;
  password: string;
};

export type UserPasswordResetCredentials = {
  email: string;
};

export type UserPasswordResetVerify = {
  token: string;
};

export type UserSetter = {
  data?: User;
  loading: boolean;
  fetched: boolean;
  errors: string[];
};
