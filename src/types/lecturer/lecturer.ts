import { ApiResponse } from '../api';

export type LecturerRequest = {
  id: string;
  name: string;
  faculty: string;
  department: string;
  upvotes: number;
  downvotes: number;
};

export type LecturerResponse = ApiResponse<{
  id: string;
  name: string;
  faculty: string;
  department: string;
  upvotes: number;
  downvotes: number;
}>;
