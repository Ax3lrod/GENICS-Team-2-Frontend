import { ApiResponse } from '../api';

export type DownVoteRequest = {
  id: string;
  name: string;
  faculty: string;
  department: string;
  upVote: number;
  downVote: number;
};

export type DownVoteResponse = ApiResponse<{
  id: string;
  name: string;
  faculty: string;
  department: string;
  upVote: number;
  downVote: number;
}>;
