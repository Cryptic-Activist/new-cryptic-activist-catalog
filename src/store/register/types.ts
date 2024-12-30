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

export type UserRegistrationParams = RandomCredentials & {
  password: string;
  confirmPasword: string;
};
