import { ApiResponse } from '@/types/api';

export type RegisterRequest = {
  username: string;
  email: string;
  faculty: string;
  department: string;
  password: string;
};

export type RegisterResponse = ApiResponse<{
  id: string;
  username: string;
  email: string;
  faculty: string;
  department: string;
  password: string;
  passwordResetToken: null;
  passwordResetExpires: null;
  createdAt: string;
  updatedAt: string;
}>;
