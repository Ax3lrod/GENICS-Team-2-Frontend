import { ApiResponse } from '../api';

export type UpVoteRequest = {
  id: string;
};

export type UpVoteResponse = ApiResponse<{
  id: string;
  name: string;
  faculty: string;
  department: string;
  upvotes: number;
  downvotes: number;
}>;
