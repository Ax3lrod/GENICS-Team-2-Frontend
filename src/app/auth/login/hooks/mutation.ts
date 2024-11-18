'use client';

import { useMutation } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import { useRouter } from 'next/navigation';

import { DANGER_TOAST, showToast, SUCCESS_TOAST } from '@/components/Toast';
import api from '@/lib/api';
import { setToken } from '@/lib/cookies';
import { ApiError } from '@/types/api';
import useAuthStore from '@/stores/useAuthStore';

import { LoginRequest, LoginResponse } from '@/types/auth/login';

export const useLoginMutation = () => {
  const router = useRouter();

  const { login } = useAuthStore();

  const {
    mutate: handleLogin,
    isPending,
    isSuccess,
  } = useMutation<LoginResponse, AxiosError<ApiError>, LoginRequest>({
    mutationFn: async (data) => {
      const res = await api.post<LoginResponse>('/auth/login', data);
      const { token } = res.data.responseObject;
      setToken(token);

      login({
        ...res.data.responseObject,
        token: res.data.responseObject.token,
      });

      return res.data;
    },

    onSuccess: async () => {
      showToast('Login Success', SUCCESS_TOAST);
      router.push('/');
    },

    onError: async (error: AxiosError<ApiError>) => {
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
