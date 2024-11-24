import { ApiResponse } from '../api';

export type UpVoteRequest = {
  id: string;
  name: string;
  faculty: string;
  department: string;
  upvotes: number;
  downvotes: number;
};

export type UpVoteResponse = ApiResponse<{
  id: string;
  name: string;
  faculty: string;
  department: string;
  upvotes: number;
  downvotes: number;
}>;
