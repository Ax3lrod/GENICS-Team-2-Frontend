import { ApiResponse } from '@/types/api';

export type LoginRequest = {
  username: string;
  password: string;
};

export type LoginResponse = ApiResponse<{
  user: {
    id: string;
    username: string;
    email: string;
    faculty: string;
    major: string;
    uploadedModules: [];
    votes: [];
  };
  token: string;
}>;
