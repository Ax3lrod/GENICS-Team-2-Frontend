import { useMutation } from '@tanstack/react-query';
import { AxiosError } from 'axios';

// import { useRouter } from 'next/navigation';
import { DANGER_TOAST, showToast, SUCCESS_TOAST } from '@/components/Toast';
import api from '@/lib/api';
import { ApiError } from '@/types/api';
import { UpVoteRequest, UpVoteResponse } from '@/types/module/upvote';

export const useUpVoteMutation = (moduleId: string) => {
  const {
    mutate: handleModuleCard,
    isSuccess,
    isPending,
  } = useMutation<UpVoteResponse, AxiosError<ApiError>, UpVoteRequest>({
    mutationFn: async (data) => {
      const res = await api.post<UpVoteResponse>(
        `/modules/${moduleId}/upvotes`,
        data,
      );

      return res.data;
    },

    onSuccess: () => {
      showToast('Success register user', SUCCESS_TOAST);
    },
    onError: (error: AxiosError<ApiError>) => {
      const statusCode = error.response?.status;
      let message =
        error.response?.data.message || 'Error, please try again later';

      if (statusCode === 400) {
        message = 'Email already exists';
      } else if (statusCode === 422) {
        message = 'Mohon cek kembali data dirimu';
      }

      showToast(message, DANGER_TOAST);
    },
  });

  return { handleModuleCard, isPending, isSuccess };
};
