import { ApiResponse } from '../api';

export type LecturerRequest = {
  id: string;
  name: string;
  faculty: string;
  department: string;
  upvotes: number;
  downvotes: number;
};

export type LecturerDetail = {
  id: string;
  name: string;
  faculty: string;
  department: string;
  upVote: number;
  downVote: number;
  rating: number;
  updatedAt: string;
  createdAt: string;
};

export type LecturerFilter = {
  search: string;
  faculty: string;
};
export type LecturerResponse = ApiResponse<LecturerDetail>;
export type LecturerListResponse = ApiResponse<LecturerDetail[]>;
