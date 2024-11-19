'use client';

import { useMutation } from '@tanstack/react-query';

import api from '@/lib/api';
import { ModuleDetail, ModuleResponse } from '@/types/module/module';

export const useModulesMutation = () => {
  const {
    mutate: handleUpvote,
    isSuccess: isSuccessUpvote,
    isPending: isPendingUpvote,
    data: upvoteData,
    isError: isErrorUpvote,
  } = useMutation<ModuleDetail, Error, string>({
    mutationKey: ['upvote-module'],
    mutationFn: async (moduleId: string) => {
      const response = await api.post<ModuleResponse>(
        `modules/${moduleId}/upvotes`,
      );
      return response.data?.responseObject;
    },
  });

  const {
    mutate: handleDownvote,
    isSuccess: isSuccessDownvote,
    isPending: isPendingDownvote,
    data: downvoteData,
    isError: isErrorDownvote,
  } = useMutation<ModuleDetail, Error, string>({
    mutationKey: ['downvote-module'],
    mutationFn: async (moduleId: string) => {
      const response = await api.post<ModuleResponse>(
        `modules/${moduleId}/downvotes`,
      );
      return response.data?.responseObject;
    },
  });

  return {
    upvoteData,
    handleUpvote,
    isSuccessUpvote,
    isPendingUpvote,
    isErrorUpvote,
    downvoteData,
    handleDownvote,
    isSuccessDownvote,
    isPendingDownvote,
    isErrorDownvote,
  };
};
