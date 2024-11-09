import { useMutation } from '@tanstack/react-query';
import { AxiosError } from 'axios';

import { useRouter } from 'next/navigation';
import { DANGER_TOAST, showToast, SUCCESS_TOAST } from '@/components/Toast';
import api from '@/lib/api';
import { ApiError } from '@/types/api';
import { RegisterRequest, RegisterResponse } from '@/types/auth/regist';

export const useRegistMutation = () => {
  const router = useRouter();
  const {
    mutate: handleRegist,
    isSuccess,
    isPending,
  } = useMutation<RegisterResponse, AxiosError<ApiError>, RegisterRequest>({
    mutationFn: async (data) => {
      const res = await api.post<RegisterResponse>('/auth/register', data);

      return res.data;
    },

    onSuccess: () => {
      showToast('Success register user', SUCCESS_TOAST);
      router.push('/auth');
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

  return { handleRegist, isPending, isSuccess };
};
