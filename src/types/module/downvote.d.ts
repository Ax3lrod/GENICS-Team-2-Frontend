import { ApiResponse } from '../api';

export type DownVoteRequest = {
  id: string;
  name: string;
  faculty: string;
  department: string;
  upvotes: number;
  downvotes: number;
};

export type DownVoteResponse = ApiResponse<{
  id: string;
  name: string;
  faculty: string;
  department: string;
  upvotes: number;
  downvotes: number;
}>;
