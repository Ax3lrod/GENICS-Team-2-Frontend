import { useMutation } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import { DANGER_TOAST, showToast, SUCCESS_TOAST } from '@/components/Toast';
import api from '@/lib/api';
import { ApiError } from '@/types/api';
import { UploadModuleRequest, AddModuleResponse } from '@/types/module/module';

export const useAddModuleMutation = () => {
  const {
    mutate: handleUpload,
    isSuccess,
    isPending,
  } = useMutation<AddModuleResponse, AxiosError<ApiError>, UploadModuleRequest>(
    {
      mutationFn: async (data) => {
        const res = await api.post<AddModuleResponse>('/modules', data, {
          headers: { 'Content-Type': 'multipart/form-data' },
          timeout: 60000,
        });

        return res.data;
      },

      onSuccess: () => {
        showToast('Module Uploaded', SUCCESS_TOAST);
      },

      onError: (error: AxiosError<ApiError>) => {
        const message =
          error.response?.data.message || 'Error, please try again later';

        showToast(message, DANGER_TOAST);
      },
    },
  );

  return { handleUpload, isPending, isSuccess };
};
