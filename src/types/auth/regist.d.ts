import { ApiResponse } from '@/types/api';

export type RegisterRequest = {
  name: string;
  email: string;
  password: string;
  phone_number: string;
  tahu_ise_darimana: string;
  jenjang: string;
  provinsi: number;
};

export type RegisterResponse = ApiResponse<{
  name: string;
  email: string;
  phone_number: string;
  tahu_ise_darimana: string;
  jenjang: string;
  provinsi: string;
  is_email_verfied: boolean;
}>;
