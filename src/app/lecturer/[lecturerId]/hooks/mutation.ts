import { useMutation } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import { DANGER_TOAST, showToast, SUCCESS_TOAST } from '@/components/Toast';
import api from '@/lib/api';
import { ApiError } from '@/types/api';
import { CommentRequest, CommentResponse } from '@/types/comment/comment';

export const useCommentMutation = () => {
  const {
    mutate: handleComment,
    isSuccess,
    isPending,
  } = useMutation<CommentResponse, AxiosError<ApiError>, CommentRequest>({
    mutationFn: async (data) => {
      const res = await api.post<CommentResponse>('/comments', data, {
        headers: { 'Content-Type': 'application/json' },
        timeout: 60000,
      });

      return res.data;
    },

    onSuccess: () => {
      showToast('Comment Posted', SUCCESS_TOAST);
    },

    onError: (error: AxiosError<ApiError>) => {
      const message =
        error.response?.data.message || 'Error, please try again later';

      showToast(message, DANGER_TOAST);
    },
  });

  return { handleComment, isPending, isSuccess };
};
