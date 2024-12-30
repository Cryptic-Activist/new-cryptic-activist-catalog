import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

import { ZodUsername } from '../zod';

export const VerifyAccountCredentials = z.object({
  username: ZodUsername,
});

export const verifyAccountResolver = zodResolver(VerifyAccountCredentials);
