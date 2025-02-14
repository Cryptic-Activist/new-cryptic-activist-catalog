'use client';

import React, { FC, useState } from 'react';
import { QueryProviderProps } from './types';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { IS_DEVELOPMENT } from '@/constants';

const QueryProvider: FC<QueryProviderProps> = ({ children }) => {
  const [queryClient] = useState(() => new QueryClient());
  return (
    <QueryClientProvider client={queryClient}>
      {children}
      <ReactQueryDevtools initialIsOpen={IS_DEVELOPMENT} />
    </QueryClientProvider>
  );
};

export default QueryProvider;
