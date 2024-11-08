import { useMutation } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import { useRouter } from 'next/navigation';

import { DANGER_TOAST, showToast, SUCCESS_TOAST } from '@/components/Toast';
import api from '@/lib/api';
import { setToken } from '@/lib/cookies';
import { ApiError } from '@/types/api';
import { LoginRequest, LoginResponse } from '@/types/auth/login';

export const useLoginMutation = () => {
  const router = useRouter();

  const {
    mutate: handleLogin,
    isSuccess,
    isPending,
  } = useMutation<LoginResponse, AxiosError<ApiError>, LoginRequest>({
    mutationFn: async (data) => {
      const res = await api.post<LoginResponse>('/auth/login', data);
      const { token } = res.data.data;
      setToken(token);

      if (!res.data.data) {
        throw new Error('Invalid login session');
      }
      setToken(token);

      return res.data;
    },

    onSuccess: () => {
      showToast('Login success', SUCCESS_TOAST);
      router.push('/');
    },
    onError: (error: AxiosError<ApiError>) => {
      const statusCode = error.response?.status;
      let message =
        error.response?.data.message || 'Error, please try again later';

      if (statusCode === 404) {
        message = 'Email tidak ditemukan';
      } else if (statusCode === 401) {
        message = 'Mohon cek kembali email dan password';
      } else if (statusCode === 422) {
        message = 'Mohon cek kembali email dan password';
      }

      showToast(message, DANGER_TOAST);
    },
  });

  return { handleLogin, isPending, isSuccess };
};
