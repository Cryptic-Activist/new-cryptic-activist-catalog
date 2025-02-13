'use client';

import React, { FC, useState } from 'react';
import { QueryProviderProps } from './types';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const QueryProvider: FC<QueryProviderProps> = ({ children }) => {
  const [queryClient] = useState(() => new QueryClient());
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};

export default QueryProvider;
