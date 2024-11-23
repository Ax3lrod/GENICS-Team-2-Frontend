import { ApiResponse } from '../api';

export type AllModuleResponse = [
  {
    id: string;
    title: string;
    description: string;
    faculty: string;
    department: string;
    course: string;
    filePath: string;
    upVote: number;
    downVote: number;
    createdAt: string;
    updatedAt: string;
    user: {
      username?: string;
    };
  },
];

export type ModuleDetail = {
  id: string;
  title: string;
  description: string;
  faculty: string;
  department: string;
  course: string;
  filePath: string;
  upVote: number;
  downVote: number;
  createdAt: string;
  updatedAt: string;
  user: {
    username?: string;
  };
};

export type ModuleComment = {
  id: string;
  feedback: string;
  rating: number;
  userId: string;
  lecturerId: string;
  moduleId: string;
  createdAt: string;
  updatedAt: string;
};

export interface ModuleDetailProps extends ModuleDetail {
  title: string;
  description: string;
  user: {
    username: string;
  };
}

export type ModuleRequest = {
  id: string;
  title: string;
  description: string;
  upvotes: number;
  downvotes: number;
};

export type UploadModuleRequest = {
  title: string;
  description: string;
  faculty: string;
  department: string;
  course: string;
  file: string;
};

export type ModuleResponse = ApiResponse<{
  id: string;
  title: string;
  description: string;
  upvotes: number;
  downvotes: number;
}>;

export type AddModuleRequest = {
  title: string;
  description: string;
  faculty: string;
  department: string;
  course: string;
  file: string;
};

export type ModuleVote = {
  id: string;
  voteType: 'UPVOTE' | 'DOWNVOTE';
  user: {
    id: string;
    username: string;
  };
};

export type AddModuleResponse = ApiResponse<{
  id: string;
  title: string;
  description: string;
  faculty: string;
  department: string;
  course: string;
  filePath: string;
  upVote: number;
  downVote: number;
  createdAt: string;
  updatedAt: string;
  user: {
    username: string;
  };
  votes: ModuleVote[];
}>;
