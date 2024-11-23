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
    department: string;
    uploadedModules: [
      {
        id: string;
        title: string;
      },
    ];
    votes: [
      {
        id: string;
        voteType: string;
        module: {
          id: string;
          title: string;
        };
      },
    ];
  };
  token: string;
}>;
