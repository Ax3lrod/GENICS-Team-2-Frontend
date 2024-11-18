'use client';

import { useQuery } from '@tanstack/react-query';
import { AllModuleResponse } from '@/types/module/module';
import { ApiResponse } from '@/types/api';

import api from '@/lib/api';

export const useLandingPageQuery = () => {
  const {
    data: queryData,
    isPending,
    isError,
  } = useQuery<ApiResponse<AllModuleResponse>>({
    queryKey: ['Get All Module Response Data'],
    queryFn: async () => {
      const response = await api.get('/modules');
      return response.data;
    },
  });

  return { queryData, isPending, isError };
};
