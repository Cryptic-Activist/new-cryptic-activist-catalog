type User = {
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

export type UserSetter = {
  data?: User;
  loading: boolean;
  fetched: boolean;
  errors: string[];
};
