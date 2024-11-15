import { ApiResponse } from '@/types/api';

export type CommentRequest = {
  id: string;
  feedback: string;
  rating: number;
  userId: string;
  lecturerId: string;
  moduleId: string;
  createdAt: string;
  updatedAt: string;
};

export type CommentResponse = ApiResponse<{
  id: string;
  feedback: string;
  rating: number;
  userId: string;
  lecturerId: string;
  moduleId: string;
  createdAt: string;
  updatedAt: string;
}>;
