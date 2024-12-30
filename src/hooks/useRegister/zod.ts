import { z } from 'zod';

import { zodResolver } from '@hookform/resolvers/zod';

import {
  ZodConfirmPassword,
  ZodFirstName,
  ZodLastName,
  ZodPassword,
  ZodUsername,
} from '../../layouts/modals/zod';

export const RegisterCredrentials = z
  .object({
    names: z.object({
      firstName: ZodFirstName,
      lastName: ZodLastName,
    }),
    username: ZodUsername,
    password: ZodPassword,
    confirmPassword: ZodConfirmPassword,
  })
  .superRefine(({ password, confirmPassword }, ctx) => {
    if (confirmPassword !== password) {
      ctx.addIssue({
        code: 'custom',
        message: 'The password must match',
        path: ['confirmPassword'],
      });
    }
  });

export const registerResolver = zodResolver(RegisterCredrentials);
