import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

import { ZodFirstName, ZodLastName, ZodPassword, ZodUsername } from '../zod';

export const RegisterCredrentials = z.object({
  names: z.object({
    firstName: ZodFirstName,
    lastName: ZodLastName,
  }),
  username: ZodUsername,
  password: ZodPassword,
});

export const registerResolver = zodResolver(RegisterCredrentials);
