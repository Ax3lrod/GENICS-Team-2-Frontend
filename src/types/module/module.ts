import { ApiResponse } from '../api';

export type ModuleDetail = {
  id: string;
  title: string;
  description: string;
  upvotes: number;
  downvotes: number;
  createdAt: string;
  updatedAt: string;
  user: {
    username: string;
  };
};

export type ModuleRequest = {
  id: string;
  title: string;
  description: string;
  upvotes: number;
  downvotes: number;
};

export type ModuleResponse = ApiResponse<{
  id: string;
  title: string;
  description: string;
  upvotes: number;
  downvotes: number;
}>;
