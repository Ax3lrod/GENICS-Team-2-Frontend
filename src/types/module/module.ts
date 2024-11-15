import { ApiResponse } from '../api';

export type AllModuleResponse = [
  {
    id: string;
    title: string;
    description: string;
    faculty: string;
    major: string;
    course: string;
    filePath: string;
    upVote: number;
    downVote: number;
    createdAt: string;
    updatedAt: string;
    user: {
      username: string;
    };
  },
];

export type ModuleDetail = {
  id: string;
  title: string;
  description: string;
  faculty: string;
  major: string;
  course: string;
  filePath: string;
  upVote: number;
  downVote: number;
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
