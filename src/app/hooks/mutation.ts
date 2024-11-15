'use client';

import { useQuery } from '@tanstack/react-query';
import { AllModuleResponse } from '@/types/module/module';

import api from '@/lib/api';

export const useLandingPageQuery = () => {
  const {
    data: queryData,
    isPending,
    isError,
  } = useQuery<AllModuleResponse>({
    queryKey: ['Get All Module Response Data'],
    queryFn: async () => {
      const response = await api.get('/modules');
      return response.data;
    },
  });

  return { queryData, isPending, isError };
};
