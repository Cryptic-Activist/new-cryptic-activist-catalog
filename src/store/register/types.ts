type RandomCredentials = {
  firstName?: string;
  lastName?: string;
  username?: string;
};

export type RegisterState = RandomCredentials & {
  privateKeys?: string[];
};

export type RegisterSetter = RandomCredentials & {
  privateKeys?: string[];
};

export type UserRegistrationParams = {
  names: {
    firstName?: string;
    lastName?: string;
  };
  username?: string;
  password: string;
  confirmPassword: string;
};
