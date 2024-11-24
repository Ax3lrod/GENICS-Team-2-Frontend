'use client';

import { useMutation } from '@tanstack/react-query';

import api from '@/lib/api';
import { UpVoteResponse, UpVoteRequest } from '@/types/module/upvote';
import { DownVoteResponse, DownVoteRequest } from '@/types/module/downvote';

export const useModulesMutation = () => {
  const {
    mutate: handleUpvote,
    isSuccess: isSuccessUpvote,
    isPending: isPendingUpvote,
    data: upvoteData,
    isError: isErrorUpvote,
  } = useMutation<UpVoteRequest, Error, string, number>({
    mutationKey: ['upvote-module'],
    mutationFn: async (moduleId) => {
      const response = await api.post<UpVoteResponse>(
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
  } = useMutation<DownVoteRequest, Error, string, number>({
    mutationKey: ['downvote-module'],
    mutationFn: async (moduleId) => {
      const response = await api.post<DownVoteResponse>(
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
