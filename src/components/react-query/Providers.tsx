import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import React, { FC, PropsWithChildren, ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

const Providers: FC<Props> = ({ children }) => {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: { refetchOnWindowFocus: false, retry: 0 },
    },
  });
  return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>;
};

export default Providers;
