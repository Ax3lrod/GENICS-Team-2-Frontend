'use client';
import { NextUIProvider } from '@nextui-org/react';
import {
  QueryClient,
  QueryClientProvider,
  QueryOptions,
} from '@tanstack/react-query';
import { useRouter } from 'next/navigation';

import Toast from '@/components/Toast';
import api from '@/lib/api';

export default function Providers({ children }: { children: React.ReactNode }) {
  const router = useRouter();

  const defaultQueryFn = async ({ queryKey }: QueryOptions) => {
    const { data } = await api.get(`${queryKey?.[0]}`);
    return data;
  };
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        queryFn: defaultQueryFn,
      },
    },
  });

  // const queryClient = new QueryClient()

  return (
    <NextUIProvider navigate={router.push}>
      <QueryClientProvider client={queryClient}>
        <Toast />
        {children}
      </QueryClientProvider>
    </NextUIProvider>
  );
}
